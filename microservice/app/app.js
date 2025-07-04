	const express = require('express');
	const app = express();
	const port = 80;
	
	app.get('/', (req, res) => {
	  res.json({ message: 'Hello from Node.js microservice on ECS Fargate!' });
	});
	
	app.get('/health', (req, res) => {
	  res.json({ status: 'OK' });
	});
	
	app.listen(port, () => {
	  console.log(`App listening on port ${port}`);
});