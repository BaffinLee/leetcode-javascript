const fs = require('fs');
const fse = require('fs-extra');
const path = require('path');
const jsx = require('react-jsx');

const template = fs.readFileSync(path.resolve(__dirname, '../template/list.jsx'), 'utf-8');
const render = jsx.server(template, {
	filename: 'list.jsx',
	debug: true,
	raw: true
});

const PAGE_SIZE = 30;
const ROOT_DIR = path.resolve(__dirname, '../../');

function getPath (type, page) {
	if (page === 1) {
		return path.resolve(ROOT_DIR, './docs', type, 'index.html');
	} else {
		return path.resolve(ROOT_DIR, './docs', type, 'page', `${page}.html`);
	}
}

function listRender (type, url, tagList, difficultyList, list, tag, difficulty) {
	const len = list.length;
	let i = 0;
	while (i < len) {
		fse.outputFileSync(
			getPath(type, i + 1),
			render({
				list: list.slice(i, PAGE_SIZE),
				paging: {
					pageNow: i + 1,
					pageSize: PAGE_SIZE,
					pageCount: len
				},
				tagList,
				difficultyList,
				tag,
				difficulty,
				url
			}, {
				html: true
			})
		);
		i += PAGE_SIZE;
	}
}

module.exports =  listRender;
