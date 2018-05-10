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

function getPages (now, all) {
	let start = 0;
	let end = 0;
	const pages = [];

	if (now < 3) {
		start = 1;
		end = Math.min(all, 5);
	} else if (now > all - 2) {
		end = all;
		start = Math.max(1, all - 4);
	} else {
		start = now - 2;
		end = now + 2;
	}

	while (start <= end) {
		pages.push(start);
		start++;
	}

	return pages;
}

function listRender (type, path, url, tagList, difficultyList, list, meta) {
	const len = list.length;
	const count = Math.ceil(len / PAGE_SIZE);
  let i = 0;
  let pageNow = 1;
	while (i < len) {
		fse.outputFileSync(
			getPath(path, pageNow),
			'<!DOCTYPE html>' + render({
				type,
				list: list.slice(i, PAGE_SIZE),
				paging: {
					pageNow: pageNow,
					pageSize: PAGE_SIZE,
					pageCount: count,
					totalCount: len,
					pages: getPages(pageNow, count)
				},
				tagList,
				difficultyList,
				meta,
				url
			}, {
				html: true
			})
    );
    pageNow += 1;
		i += PAGE_SIZE;
	}
}

module.exports =  listRender;
