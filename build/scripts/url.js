const home = 'https://baffinlee.com/leetcode-javascript';
const github = 'https://github.com/BaffinLee/leetcode-javascript';

function difficulty (slug, num = 1) {
	return num === 1 ? `${home}/difficulty/${slug}` : `${home}/difficulty/${slug}/page/${num}.html`;
}

function tag (slug, num = 1) {
	return num === 1 ? `${home}/tag/${slug}` : `${home}/tag/${slug}/page/${num}.html`;
}

function problem (slug) {
	return `${home}/problem/${slug}.html`;
}

function page (num = 1) {
	return num === 1 ? home : `${home}/page/${num}.html`;
}

module.exports = {
	home,
	github,
	difficulty,
	tag,
	page,
	problem
};
