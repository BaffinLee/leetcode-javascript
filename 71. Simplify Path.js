/**
 * 71. Simplify Path
 * 
 * Given an absolute path for a file (Unix-style), simplify it.
 * 
 * For example,
 * path = "/home/", => "/home"
 * path = "/a/./b/../../c/", => "/c"
 * 
 * Corner Cases:
 * 
 * Did you consider the case where path = "/../"?
 * In this case, you should return "/".
 * Another corner case is the path might contain multiple slashes '/' together, such as "/home//foo/".
 * In this case, you should ignore redundant slashes and return "/home/foo".
 */

/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
	var arr = path.split('/');
	var stack = [];
	var len = arr.length;
	var item = '';
	for (var i = 0; i < len; i++) {
			item = arr[i];
			if (item === '' || item === '.') continue;
			if (item === '..') {
					stack.pop();
			} else {
					stack.push(item);
			}
	}
	return '/' + stack.join('/');
};

// 栈
