const create = data => {
  const fs = require('fs');
  const fse = require('fs-extra');
	const path = require('path');
	const chalk = require('chalk');
	const pageData = {
		id: data.questionId,
		name: data.questionTitle,
		difficulty: data.difficulty,
		relatedTopics: data.topicTags.map(t => t.name).join(', '),
		similarQuestions: JSON.parse(data.similarQuestions).map(q => q.title).join(', '),
		description: getDescription(data.content),
	};
	const dir = getPath(pageData.id, pageData.name);
	let str = fs.readFileSync(path.resolve(__dirname, './template.md'), 'utf-8');

	Object.keys(pageData).forEach(name => {
		str = str.replace(`{{${name}}}`, pageData[name]);
	});

	fse.outputFileSync(dir, str);

	console.log(`created at: ${chalk.blue(dir)}\n`);
};

const getDescription = (description) => {
  const cheerio = require('cheerio');
  const rules = [
    {
      regexp: /<pre>([\s\S]*?)<\/pre>/ig,
      replacer: (_, $1) => `\`\`\`\n${cheerio.load($1).text().replace(/\n$/, '')}\n\`\`\``
    },
    {
      regexp: /<code>(.*?)<\/code>/ig,
      replacer: (_, $1) => `\`\`\`${$1}\`\`\``
    },
    {
      regexp: /<i>(.*?)<\/i>/ig,
      replacer: (_, $1) => `*${$1}*`
    },
    {
      regexp: /<b>(.*?)<\/b>/ig,
      replacer: (_, $1) => `**${$1}**`
    },
    {
      regexp: /<em>(.*?)<\/em>/ig,
      replacer: (_, $1) => `**${$1}**`
    },
    {
      regexp: /<img.*src="([^"]+)".*\/?>/ig,
      replacer: (_, $1) => `\n![](${$1})\n`
    },
    {
      regexp: /<strong>(.*?)<\/strong>/ig,
      replacer: (_, $1) => `**${$1}**`
    },
    {
      regexp: /<\/?ul>/ig,
      replacer: '',
    },
    {
      regexp: /<li>(.*?)<\/li>/ig,
      replacer: (_, $1) => `\n- ${$1}`
    }
  ];
  let html = description;
  rules.forEach(rule => {
    html = html.replace(rule.regexp, rule.replacer);
  });
	return cheerio.load(html).text();
};

const getPath = (id, name) => {
	const path = require('path');
	const left = Math.floor((id - 1) / 100);
	const folder = `${left === 0 ? '001' : (left * 100 + 1)}-${(left + 1) * 100}`;
	return path.resolve(__dirname, `../${folder}/${id}. ${name}.md`);
};

const getName = url => {
	if (!url) throw new Error('need leetcode problem url');
	const res = /https:\/\/leetcode.com\/problems\/([^/]+)/.exec(url);
	if (!res) throw new Error('leetcode problem url not valid');
	return res[1];
}

const axios = require('axios');
const name = getName(process.argv[2]);
const url = `https://leetcode.com/graphql?query=query%20getQuestionDetail($titleSlug:%20String!)%20%7B%0A%20%20question(titleSlug:%20$titleSlug)%20%7B%0A%20%20%20%20questionId%0A%20%20%20%20questionTitle%0A%20%20%20%20content%0A%20%20%20%20difficulty%0A%20%20%20%20stats%0A%20%20%20%20similarQuestions%0A%20%20%20%20topicTags%20%7B%0A%20%20%20%20%20%20name%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A&operationName=getQuestionDetail&variables=%7B%22titleSlug%22:%22${name}%22%7D`;

axios.get(url).then(res => {
	create(res.data.data.question);
}).catch(err => {
	console.error(err);
});
