<html lang="en">
<head>
	<meta charSet="UTF-8"/>
	<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
	<meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
	<title>LeetCode javascript solutions</title>
	<link rel="shortcut icon" href={url.home + '/static/img/favicon.png'} type="image/png"/>
	<link rel="stylesheet" href={url.home + '/static/css/app.css'}/>
</head>
<body>
	<header className="list-header">
		<div className="row">
			<div className="name">Difficulty:</div>
			<div className="value">
				<ul className="clearfix">
					{difficultyList.map((item, index) => (
						<li key={index} className={item.slug === meta.difficulty.slug ? 'selected' : ''}>
							<a href={item.slug === meta.difficulty.slug ? url.home : url.difficulty(item.slug)}>{item.name}</a>
						</li>
					))}
				</ul>
			</div>
		</div>
		<div className="row">
			<div className="name">Tag:</div>
			<div className="value">
				<ul className="clearfix">
					{tagList.map((item, index) => (
						<li key={index} className={item.slug === meta.tag.slug ? 'selected' : ''}>
							<a href={item.slug === meta.tag.slug ? url.home : url.tag(item.slug)}>{item.name}</a>
						</li>
					))}
				</ul>
			</div>
		</div>
	</header>
	<main>
		<table>
			<thead>
				<tr>
					<th className="other">ID</th>
					<th>Title</th>
					<th className="other">Difficulty</th>
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
							<span className={'tag ' + item.difficulty.slug}>{item.difficulty.name}</span>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	</main>
	<section className="paging">
		<ul className="clearfix">
			<li className={paging.pageNow > 1 ? '' : 'disabled'}>
				<a href={paging.pageNow > 1 ? url[type](meta[type].slug, paging.pageNow - 1) : '#'}>&lt;</a>
			</li>
			{paging.pages.map((page, index) => (
				<li key={index} className={paging.pageNow === page ? 'selected' : ''}>
					<a href={paging.pageNow === page ? '#' : (type === 'page' ? url[type](page) : url[type](meta[type].slug, page))}>{page}</a>
				</li>
			))}
			<li className={paging.pageNow < paging.pageCount ? '' : 'disabled'}>
				<a href={paging.pageNow < paging.pageCount ? url[type](meta[type].slug, paging.pageNow + 1) : '#'}>&gt;</a>
			</li>
		</ul>
	</section>
	<footer>
		<a href={url.github} target="_blank">
			<img src={url.home + '/static/img/github.png'} alt="github"/>
		</a>
	</footer>
</body>
</html>
