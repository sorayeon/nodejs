const { Router } = require('express');
const router = Router();
const controller = require('./admin.controller.js');


// admin_url + 미들웨어

// REST API
// GET /users => 사용자정보
// POST /users => 사용자추가
// GET /users/(ID) => 한명만 조회
// PUT /users/(ID) => 한명 수정하기
// DELETE /users/(ID) => 한명 삭제하기

router.get('/products', controller.get_products);

router.get('/products/write', controller.get_products_write);

router.post('/products/write', controller.post_products_write);

module.exports = router;