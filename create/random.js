const axios = require('axios');
const { queryAndCreate } = require('./index');

axios.post('https://leetcode.com/graphql/', {
  operationName: "randomQuestion",
  query: "\n    query randomQuestion($categorySlug: String, $filters: QuestionListFilterInput) {\n  randomQuestion(categorySlug: $categorySlug, filters: $filters) {\n    titleSlug\n  }\n}\n    ",
  variables: {
    categorySlug: "",
    filters: {},
  },
}).then(res => {
  queryAndCreate(res.data.data.randomQuestion.titleSlug);
}).catch(err => {
	console.error(err);
});
