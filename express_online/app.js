const express = require('express');
const nunjucks = require('nunjucks');
const logger = require('morgan');
const bodyParser = require('body-parser');

class App {
    constructor() {
        this.app = express();
        //뷰엔진 세팅
        this.setViewEngine();
        //미들웨어 세팅
        this.setMiddleware();
        //정적 디렉토리 추가
        this.setStatic();
        //로컬 변수
        this.setLocals();
        //라우팅
        this.getRouting();
        //404 페이지를 찾을수가 없음
        this.status404();
        //에러처리
        this.errorHandler();
    }
    setViewEngine() {
        // nunjucks세팅
        // template폴더명
        // autoescape xss공격차단
        nunjucks.configure('template', {
            autoescape: true,
            express: this.app
        });
    }
    setMiddleware() {
        // 미들웨어 세팅
        this.app.use(logger("dev"));
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
    setStatic() {
        // 정적파일 URL, 폴더명
        this.app.use('/uploads', express.static('uploads'));
    }
    setLocals() {
        this.app.use( (req, res, next) => {
            this.app.locals.isLogin = true;
            this.app.locals.req_path = req.path;
            next();
        });
    }
    getRouting() {
        this.app.use(require('./controllers'));
    }
    status404() {
        // 404, 500 에러처리
        this.app.use( (req, res, _) => {
            res.status(400).render('common/404.html');
        });
    }
    errorHandler() {
        this.app.use( (err, req, res, _) => {
            console.log(err);
            res.status(500).render('common/500.html');
        });
    }

}
module.exports = new App().app;