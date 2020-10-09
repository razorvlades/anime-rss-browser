const express = require('express');
const router = express.Router();
const Parser = require('rss-parser');
const DOMParser = require('xmldom').DOMParser;
const fetch = require('node-fetch');

const parser = new Parser({
	customFields: {
	  feed: ['otherTitle', 'extendedDescription'],
	  item: ['coAuthor','subtitle'],
	}
});

router.get('/', async (req, res) => {
	res.send('hi');
});

router.get('/feed', async (req, res) => {
	let feed = await parser.parseURL('https://www.erai-rss.info/rss-eps');
	
	// const posts = [];

	// console.log(feed.items[0])
   
	// feed.items.forEach(item => {
	// 	posts.push(item);
	// });

	res.send(feed.items);
});

router.get('/show', async (req, res) => {

	const url = req.query.url;
	const result = await fetch(url);
	const html = await result.text();

	const doc = new DOMParser().parseFromString(html,'text/html');

	const show_url = doc.getElementsByClassName('tooltip2_red')[0].getAttribute('href');

	const show_page_result = await fetch(show_url);
	const show_page_html = await show_page_result.text();
	const document = new DOMParser().parseFromString(show_page_html, 'text/html');

	res.send({ doc: show_page_html });
});

module.exports = router;