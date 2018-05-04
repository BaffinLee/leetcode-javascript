const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

const url = require('./scripts/url');
const meta = require('./scripts/meta');
const getSlug = require('./scripts/slug');
const markdownRender = require('./scripts/markdownRender');
const listRender = require('./scripts/listRender');
const problemRender = require('./scripts/problemRender');

const problemList = [];
const difficultyMap = {};
const difficultyList = [];
const tagMap = {};
const tagList = [];

function buildProblems () {
	const pathReg = /^\d{3}-\d{3}$/;
	const fileReg = /\.md$/;
	fs.readdirSync(path.resolve(__dirname, '../')).forEach(floder => {
		if (!pathReg.test(floder)) return;
		fs.readdirSync(path.resolve(__dirname, '../', floder)).forEach(file => {
			if (!fileReg.test(file)) return;
			const markdown = fs.readFileSync(path.resolve(__dirname, '../', floder, file), 'utf-8');
			const content = markdownRender(markdown);
			const id = meta.getId(markdown);
			const name = meta.getName(markdown);
			const slug = getSlug(name);
			const difficulty = {
				name: meta.getDifficulty(markdown),
				slug: ''
			};
			const tags = meta.getRelatedTopics(markdown).map(name => {
				return {
					name,
					slug: getSlug(name)
				};
			});
			const similarQuestions = meta.getSimilarQuestions(markdown).map(name => {
				return {
					name,
					slug: getSlug(name)
				};
			});

			difficulty.slug = getSlug(difficulty.name);

			problemList.push({
				id,
				name,
				slug,
				difficulty,
				tags
			});

			if (!difficultyMap[difficulty.slug]) {
				difficultyMap[difficulty.slug] = difficulty.name;
				difficultyList.push({
					name: difficulty.name,
					slug: difficulty.slug
				});
			}
			
			tags.forEach(tag => {
				if (!tagMap[tag.slug]) {
					tagMap[tag.slug] = tag.name;
					tagList.push({
						name: tag.name,
						slug: tag.slug
					});
				}
			});

			problemRender({
				id,
				name,
				slug,
				difficulty,
				tags,
				similarQuestions,
				content,
				url
			});
		});
	});
}

function buildPages () {
	listRender(
		'page',
		'',
		url,
		tagList,
		difficultyList,
		problemList,
		{
			tag: {},
			difficulty: {}
		}
	);
}

function buildTags () {
	let list = null;
	Object.keys(tagMap).forEach(slug => {
		list = problemList.filter(item => {
			let res = false;
			item.tags.forEach(tag => {
				if (tag.slug === slug) res = true;
			});
			return res;
		});
		listRender(
			'tag',
			`./tag/${slug}`,
			url,
			tagList,
			difficultyList,
			list,
			{
				tag: {
					name: tagMap[slug],
					slug
				},
				difficulty: {}
			}
		);
	});
}

function buildDifficulties () {
	let list = null;
	Object.keys(difficultyMap).forEach(slug => {
		list = problemList.filter(item => item.difficulty.slug === slug);
		listRender(
			'difficulty',
			`./difficulty/${slug}`,
			url,
			tagList,
			difficultyList,
			list,
			{
				tag: {},
				difficulty: {
					name: difficultyMap[slug],
					slug
				}
			}
		);
	});
}

buildProblems();
buildPages();
buildTags();
buildDifficulties();

console.log(`\n${chalk.blue('Done!')}\n`);
