var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get(URL pattern, 해당 URL로 접속시키기 통합  콜백함수 )
router.get('/', function(req, res, next) {
  // res.render : 이미 존재하는 파일을 처리하여
  // 그 결과를 브라우저에게 전달하는 함수입니다.
  res.render('index', { title: 'Express' });
});

module.exports = router;
