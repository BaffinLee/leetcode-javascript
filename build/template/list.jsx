{'<!DOCTYPE html>'}
<html lang="en">
<head>
	<meta charSet="UTF-8"/>
	<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
	<meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
	<title>LeetCode javascript solutions</title>
	<link rel="stylesheet" href="./static/css/list.css"/>
</head>
<body>
	<header>
		<span>Difficulty:</span>
		<ul>
			{difficultyList.map((item, index) => (
				<li key={index}>
					<a
						href={item.slug === difficulty.slug ? url.home : url.difficulty(item.slug)}
						className={item.slug === difficulty.slug ? 'seleted' : ''}
					>{item.name}</a>
				</li>
			))}
		</ul>
		<span>Tag:</span>
		<ul>
			{tagList.map((item, index) => (
				<li key={index}>
					<a
						href={item.slug === tag.slug ? url.home : url.tag(item.slug)}
						className={item.slug === tag.slug ? 'seleted' : ''}
					>{item.name}</a>
				</li>
			))}
		</ul>
	</header>
	<main>
		<table>
			<thead>
				<tr>
					<th>ID</th>
					<th>Title</th>
					<th>Difficulty</th>
				</tr>
			</thead>
			<tbody>
				{list.map((item, index) => (
					<tr key={index}>
						<td>{item.id}</td>
						<td>
							<a href={url.problem(item.slug)}>{item.name}</a>
						</td>
						<td>
							<span className={item.difficulty.slug}>{item.difficulty.name}</span>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	</main>
	<footer>
		<a href={url.home} target="_blank">
			<img src="./static/img/github.png" alt="github"/>
		</a>
	</footer>
</body>
</html>
