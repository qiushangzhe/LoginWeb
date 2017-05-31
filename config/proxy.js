//var url = "http://127.0.0.1:1987/LoginSystem";
var url = "http://127.0.0.1:12345/";
var json = ''; //'.json';
var png = ""; //'.png';
module.exports = {
    //获取验证码
    '/user/getCaptcha': {
        target: url,
        changeOrigin: true,
        pathRewrite: {
            '^/user/getCaptcha': '/user/getCaptcha' + png
        }
    },
    //检查验证码
    '/user/checkCaptcha': {
        target: url,
        changeOrigin: true,
        pathRewrite: {
            '^/user/checkCaptcha': '/user/checkCaptcha' + json
        }
    },
    //登录接口
    '/user/login': {
        target: url,
        changeOrigin: true,
        pathRewrite: {
            '^/user/login': '/user/login' + json
        }
    },
    //注册接口
    '/user/register': {
        target: url,
        changeOrigin: true,
        pathRewrite: {
            '^/user/register': '/user/register' + json
        }
    },
    //检查当前用户名是否可用
    '/user/checkUserName': {
        target: url,
        changeOrigin: true,
        pathRewrite: {
            '^/user/checkUserName': '/user/checkUserName' + json
        }
    }
}