// routes/user.js
const express = require('express');
const router = express.Router();
router.get('/', (req, res) => { // GET /user 라우터
res.send('Hello, User');
});
module.exports = router;