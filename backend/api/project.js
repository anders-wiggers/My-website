let express = require('express');
let router = express.Router();

router.get('/api/project', (req, res) => {
	if (req.query.id) {
		res.send(`This project: ${req.params.id}`);
	} else {
		res.send('Project send');
	}
});

router.get('/api/project/:id', (req, res) => {
	res.send(`This project: ${req.params.id}`);
});

module.exports = router;
