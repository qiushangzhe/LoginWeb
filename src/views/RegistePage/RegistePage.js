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
            user_tips: '',
            user_canuse: false,
            username: '',
            //密码
            psd_tips: '',
            password: '',
            psd_canuse: false,
            //第二次输入的密码
            repassword: '',
            //验证码
            code: ''
        }
    },
    //方法
    methods: {
        nameInputOver: function() {
            this.$http.post('/user/checkUserName', { username: this.username }).then(function(data) {
                data = data.data;
                if (data.error.code != 0) {
                    this.user_canuse = false;
                    this.user_tips = data.error.errorMessage;
                    return;
                } else {
                    this.user_canuse = true;
                    this.user_tips = '用户名可用';
                }
            });
        },
        registeFunc: function() {
            if (this.user_canuse && this.psd_canuse) {
                this.$http.post('/user/register', {
                    username: this.username,
                    password: this.repassword
                }).then(function(data) {
                    data = data.data;
                    if (data.error.code != 0) {
                        this.warning_data = data.error.errorMessage;
                        return;
                    } else {
                        this.warning_data = '';
                        alert('注册成功');
                        this.$router.push('login');
                    }
                });
            }
        },
        checkPassword: function() {
            console.log(this.password);
            if (this.password != this.repassword) {
                this.warning_data = "两次密码输入不符,请重新输入";
                this.psd_canuse = false;
                return false;
            } else if (this.password == '') {
                this.warning_data = "密码呢？";
                this.psd_canuse = false;
            } else {
                this.warning_data = '';
                this.psd_canuse = true;
                return true;
            }
        },
        pwdInputOver: function() {
            this.checkPassword();
        },
        repwdInputOver: function() {
            this.checkPassword();
        },
        backToLogin: function() {
            this.$router.push('login');
        }
    },
    //监听
    watch: {

    }
}