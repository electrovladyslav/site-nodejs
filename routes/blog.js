var express = require('express');
var router = express.Router();

/* GET blog pages. */
router.get('/fixiks.html', function(req, res, next) {
  res.render('blog-fixiks', { title: 'Фиксики' });
});

module.exports = router;
