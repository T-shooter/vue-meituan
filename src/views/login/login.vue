<template>
    <div>
        <head-top signin-up="login" head-title="登录"></head-top>

        <!--账号密码登陆-->
        <form v-on:submit.prevent class="loginForm" v-if="loginWay">
            <ul class="loginNav">
                <li @click="loginWay=!loginWay">手机验证登录</li>
                <li class="borderNone" @click="loginWay=!loginWay">美团账号登录</li>
            </ul>
            <section class="container">
                <input type="text" placeholder="美团账户" v-model.lazy="userAccount">
            </section>
            <section class="container">
                <input type="password" placeholder="密码" v-model.lazy="userPassword">
            </section>
            <p class="tip">未注册过的手机将自动注册为美团账户</p>
        </form>

        <!--手机号登陆-->
        <form v-on:submit.prevent class="loginForm" v-else>
            <ul class="loginNav">
                <li class="borderNone" @click="loginWay=!loginWay">手机验证登录</li>
                <li @click="loginWay=!loginWay">美团账号登录</li>
            </ul>
            <section class="container">
                <input type="tel" placeholder="手机号" maxlength="11" v-model="userMobile">
                <button @click="getVerifyCode" v-show="!this.time" class="captacha" :class="{rightMobileColor:checkNumber}">获取验证码</button>
                <button v-show="this.time" class="captacha" :class="{rightMobileColor:checkNumber}">已发送{{time}}s</button>
            </section>
            <section class="container">
                <input type="text" placeholder="验证码" maxlength="6" v-model="userVerificationCode">
            </section>
            <p class="tip">未注册过的手机将自动注册为美团账户</p>
        </form>
        <div class="btnWrapper">
            <input @click="mobileLogin" type="submit" class="loginBtn" value="登录">
        </div>
        <alert-modal v-if="showAlert" @closeTip="closeTip" :alertText="alertText"></alert-modal>
    </div>
</template>

<script>
    import headTop from '../../components/head/HeadTop.vue'
    import AlertModal from '../../components/common/AlertModal.vue'
    import {accountLogin} from '../../assets/js/utils/getData'

    export default {
        data() {
            return {
                loginWay: true,  //登录方式，默认密码登录
                userAccount: null, //账户
                userPassword: null, //密码
                userMobile: null, //手机号
                userVerificationCode: null, //验证码
                time: 0,  //验证码倒计时
                showAlert: false, //显示提示组件
                alertText: null, //提示的内容
            }
        },
        computed: {
//          手机号校验
            checkNumber: function () {
                return /^1[34578]\d{9}$/.test(this.userMobile);
            }
        },
        methods: {
//          获取验证码
            getVerifyCode() {
                if (this.checkNumber) {
                    this.time = 5;
                    this.timer = setInterval(() => {
                        this.time--;
                        if (this.time == 0) {
                            clearInterval(this.timer)
                        }
                    }, 1000)

//              发送验证码
                    let mobileCode = '这个没短信商接口哎'

                }
            },
//                    验证码登陆
            mobileLogin() {
                if (!this.loginWay) {
                    if (!this.checkNumber) {
                        this.showAlert = true;
                        this.alertText = '手机号不正确'
                    } else if (!/^\d{6}$/.test(this.userVerificationCode)) {
                        this.showAlert = true;
                        this.alertText = '验证码不正确'
                    }
                } else {
                    //            账号密码登陆
                    accountLogin(this.userAccount, this.userPassword);
                }


            },

            closeTip() {
                this.showAlert = false
            },

        },
        components: {
            headTop,AlertModal
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../assets/style/mixin";

    .loginForm {
        margin-top: 2.1rem;
        .loginNav {
            display: flex;
            li {
                flex: 1;
                text-align: center;
                font-size: 0.8rem;
                color: #666;
                height: 1.6rem;
                line-height: 1.6rem;
                background: #fff;
                border-bottom: 1px solid #e6e6e6;
                &:first-child {
                    border-right: 1px solid #e6e6e6;
                }
            }
            .borderNone {
                border-bottom: 0;
                color: #333;
            }
        }
        .container {
            display: flex;
            justify-content: space-between;
            padding: .6rem .8rem;
            background: #fff;
            @include bb(#f1f1f1);
            input {
                font-size: .7rem;
                color: #666;
                width: 100%;
            }
            .captacha {
                padding: 0.3rem 0.75rem;
                color: #fff;
                white-space: nowrap;
                border-radius: 0.2rem;
            }
            .rightMobileColor {
                background: #fdc900;
            }
        }
        .tip {
            padding: .6rem .8rem;
            background: #fff;
            font-size: 0.7rem;
            color: #666;
        }
    }
    .btnWrapper {
        margin: 0.5rem 0.4rem 0.5rem;
        .loginBtn {
            height: 2rem;
            width: 100%;
            line-height: 2rem;
            font-size: 1rem;
            border-radius: 0.4rem;
            color: #6b450a;
            background-color: #fdc900;
        }
    }
</style>
