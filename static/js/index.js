const got = require('got');
const cheerio = require('cheerio');
const Promise = require('bluebird');
const fs = Promise.promisifyAll(require('fs'));
const beautify = require('js-beautify').js_beautify;
const path = require('path');
const tocI18n = require('./_data/toc.json');


(async ()=> {
	const enBaseUrl = 'https://nodejs.org/dist/latest-v8.x/docs/api/';
	const zhBaseUrl = 'http://nodejs.cn/api/';

	try {
		// 获取所有文档页列表
		const response = await got(enBaseUrl);
		const $ = cheerio.load(response.body);

		const toc = $('#apicontent a');
		toc.each(function(i, el){
			const text = $(el).text();
			const textI18n = tocI18n[text];

			if(textI18n) {
				$(el).text(textI18n);
			} else {
				tocI18n[text] = '';
			}
		});

		console.log(tocI18n);

		const tocContent = $('#apicontent').html().replace(/&#(x[0-9a-fA-F]{4});/g, function(match, dec) {
					return String.fromCharCode('0' + dec);
				});

		await fs.writeFileAsync('_includes/toc.html', tocContent);
		console.log('save', '_includes/toc.html');

		const tocUrls  = $('#apicontent a[href*=".html"]').map(function(index, el) {
			return $(this).attr('href');
		}).get();

		console.log(tocUrls);

		// 先下载英文，再下载中文文档，以免中文没有。最后保存文档正文部分
		for(let url of tocUrls) {
			let response = await got(enBaseUrl + url);
			let $ = cheerio.load(response.body, {decodeEntities: true});

			let title = $('title').text().replace(/\|.+$/, '').trim();
			let apitoc = $.html('#toc');
			let apicontent = $.html('#apicontent');

			// 中文 title
			if(tocI18n[title]) {
				title = tocI18n[title];
			} else {
				tocI18n[title] = '';
			}

			try {
				response = await got(zhBaseUrl + url);

				// response.body = response.body.toString().replace(/&#(x[0-9a-fA-F]{4});/g, function(match, dec) {
				// 	return String.fromCharCode('0' + dec);
				// });
				// console.log(response.body)

				$ = cheerio.load(response.body, {decodeEntities: true});
				$('p[style]').remove(); //去除中文文档中额外添加的链接

				apitoc = $.html('#toc').replace(/&#(x[0-9a-fA-F]{4});/g, function(match, dec) {
					return String.fromCharCode('0' + dec);
				});
				apicontent = $.html('#apicontent').replace(/&#(x[0-9a-fA-F]{4});/g, function(match, dec) {
					return String.fromCharCode('0' + dec);
				});

			} catch(err) {

			}

			console.log('download ', url);

			//添加 frontmatter 并保存正文
			const content = `---\ntitle: ${title}\npermalink: ${url}\n---\n\n${apitoc}\n${apicontent}`;

			await fs.writeFileAsync(path.join('docs', url),  content);
		}

		// 保存翻译列表
		await fs.writeFileAsync('_data/toc.json', beautify(JSON.stringify(tocI18n)));
		console.log('save ', '_data/toc.json');


	} catch(err) {
		console.log(err);
	}
})();