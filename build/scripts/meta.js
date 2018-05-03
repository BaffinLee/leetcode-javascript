function getId (markdown) {
	const reg = /#\s(\d+)\./;
	const process = str => Number(str);
	const res = reg.exec(markdown);
	return res ? process(res[1]) : 0;
}

function getName (markdown) {
	const reg = /#\s\d+\.\s(.*)/;
	const process = str => str.trim();
	const res = reg.exec(markdown);
	return res ? process(res[1]) : 0;
}

function getDifficulty (markdown) {
	const reg = /-\sDifficulty:\s(.*)/;
	const process = str => str.replace(/\.$/, '');
	const res = reg.exec(markdown);
	return res ? process(res[1]) : '';
}

function getRelatedTopics (markdown) {
	const reg = /-\sRelated\sTopics:\s(.*)/;
	const process = str => str.replace(/\.$/, '').split(',').map(t => t.trim());
	const res = reg.exec(markdown);
	return res ? process(res[1]) : [];
}

function getSimilarQuestions (markdown) {
	const reg = /-\sSimilar\sQuestions:\s(.*)/;
	const process = str => str.replace(/\.$/, '').split(',').map(t => t.trim());
	const res = reg.exec(markdown);
	return res ? process(res[1]) : [];
}

module.exports.getId = getId;
module.exports.getName = getName;
module.exports.getDifficulty = getDifficulty;
module.exports.getRelatedTopics = getRelatedTopics;
module.exports.getSimilarQuestions = getSimilarQuestions;
