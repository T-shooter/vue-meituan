<template>
    <div class="footBar">
        <router-link to="/" class="footBarBtn"><i class="icoBowlFill"></i><span class="footBarBtnTxt footBarBtnTxtFirst">首页</span></router-link>
        <router-link to="orderList" class="footBarBtn"><i class="icoPaper"></i><span class="footBarBtnTxt">订单</span></router-link>
        <router-link to="profile" class="footBarBtn"><i class="icoUser"></i><span class="footBarBtnTxt">我的</span></router-link>
    </div>
</template>

<style lang="scss" scoped>
    .footBar {
        position: fixed;
        bottom:0;
        display: flex;
        justify-content: space-around;
        width: 100%;
        height: 2.45rem;
        border-top: 1px solid #b6b6b6;
        background-color: rgba(246,246,246,0.95);
        text-align: center;
        z-index: 1100;
        .footBarBtn {
            display: flex;
            flex-direction: column;
            align-items: center;
            height: 100%;
            padding:.2rem 0;
            font-size: .6rem;
            i {
                display: block;
                width: 1.25rem;
                height: 1.25rem;
                background: url(//xs01.meituan.net/waimai_i/img/sprite/tab-icons.949e08ab.png) no-repeat;
                background-size: 1.25rem auto;
            }
            .icoBowlFill {
                background-position: 0 -2.5rem;
            }
            .icoPaper {
                background-position: 0 -1.25rem;
            }
            .icoUser {
                background-position: 0 -6.25rem;
            }
            .footBarBtnTxt {
                color: #999;
            }
        }
        .footBarBtn.router-link-active {
            .footBarBtnTxtFirst {
                color: #333;
            }
        }
    }
</style>
