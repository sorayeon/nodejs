const { Router } = require('express');
const router = Router();
// /controllers/index.js : 대분류Url + 폴더위치
// /controllers/admin/index.js : admin_url + 미들웨어
// /controllers/admin/admin.controller.js : 컨트롤러 역할

router.use('/admin', require('./admin'));
module.exports = router;