import userService from '@/service/user.service.js'
export default {
    created: function() {
        this.$http.$options = { withCredentials: true };
    },
    //数据
    data: function() {
        return {
            //提示语
            warning_data: '',
            //用户名
            username: '',
            //密码
            password: '',
            //验证码
            code: '',
            //可以登录
            canLogin: false
        }
    },
    //方法
    methods: {
        //验证码框失去焦点
        leaveCodeBox: function() {
            if (!this.code) {
                this.warning_data = '请输入验证码';
            } else {
                this.warning_data = '';
                this.$http.post('/user/checkCaptcha', { captcha: this.code }).then(function(res) {
                    if (res.data.error.code * 1 != 0) {
                        this.canLogin = false;
                        console.log('验证码错误');
                        this.warning_data = res.data.error.errorMessage;
                        return;
                    }
                    this.canLogin = true;
                });
            }
        },
        loginFunc: function() {
            if (!this.canLogin && this.username && this.password) {
                return;
            }
            this.$http.post('/user/login', {
                username: this.username,
                password: this.password
            }).then(function(res) {
                var data = res.data;
                if (data.error.code != 0) {
                    this.warning_data = data.error.errorMessage;
                    return;
                }
                userService.isLogin = true;
                this.warning_data = '';
                this.$router.push('userpage');
            });
        },
        linkToRegist: function() {
            this.$router.push('regist');
        },
        linkToForgot: function() {
            alert('没有这个功能，自己重新注册吧。:-)');
        }
    },
    //监听
    watch: {
        code: function(newVal, oldVal) {
            this.code = newVal.toUpperCase();
        }
    }
}