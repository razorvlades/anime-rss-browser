const express = require('express');
const router = express.Router();
const Parser = require('rss-parser');

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

module.exports = router;