{'<!DOCTYPE html>'}
<html lang="en">
<head>
	<meta charSet="UTF-8"/>
	<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
	<meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
	<title>{name} - LeetCode javascript solutions</title>
	<link rel="stylesheet" href="./static/css/problem.css"/>
</head>
<body>
	<h1>{id + '. ' + name}</h1>
	<header>
		<div className="row">
			<div className="name">Difficulty:</div>
			<div className="value">
				<a href={url.difficulty(difficulty.slug)}>{difficulty.name}</a>
			</div>
		</div>
		<div className="row">
			<div className="name">Related Topics:</div>
			<div className="value">
				<ul>
					{tags.map((item, index) => (
						<li key={index}>
							<a href={url.tag(item.slug)}>{item.name}</a>
						</li>
					))}
				</ul>
			</div>
		</div>
		<div className="row">
			<div className="name">Similar Questions:</div>
			<div className="value">
				<ul>
					{similarQuestions.map((item, index) => (
						<li key={index}>
							<a href={url.problem(item.slug)}>item.name</a>
						</li>
					))}
				</ul>
			</div>
		</div>
	</header>
	<main>
		<article className="markdown-body" dangerouslySetInnerHTML={{__html: content}}></article>
	</main>
	<footer>
		<a href={url.home} target="_blank">
			<img src="./static/img/github.png" alt="github"/>
		</a>
	</footer>
</body>
</html>
