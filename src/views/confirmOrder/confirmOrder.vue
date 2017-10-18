<template>
    <div id="confirmOrder">
        <head-top head-title="订单确认" go-back='true'></head-top>
        <div class="main">
            <form>
                <!--地址时间-->
                <div class="addressTime">
                  <div v-for="(item,index) in confirmOrderList">{{confirmOrderList[index].dishId}}</div>
                    <div class="addressSection">
                        <a class="addressField" href="javascript:">
                            <i class="icon"></i>
                            <p class="detail">中钢国际广场 东门</p>
                            <p>
                                <span class="name ellipsis">王先生</span><span class="gender">先生</span><span class="phone">17611060219</span>
                            </p>
                        </a>
                    </div>
                    <div class="field">
                        <i class="fieldIco"></i>
                        <div class="fieldSpan">
                            <div class="fieldTxt">立即送出<em>(大约11:11送达)</em></div>
                        </div>
                    </div>
                </div>
                <!--商品信息-->
                <div class="orderRegion foodsRegion">
                    <div class="foodTitle">
                        <div class="foodShop ellipsis">
                            <img :src="currentShop.picUrl" class="foodShopIcon">
                            <span>{{currentShop.name}}</span>
                        </div>
                        <p class="thirdPart deliveryThird">{{currentShop.deliveryMode ? currentShop.deliveryMode : '商家自配'}}</p>
                    </div>
                  <div class="foodList">
                    <div class="foodItem" v-for="item in confirmOrderList">
                      <div>
                        <div class="itemImg">
                          <img :src="item.picture">
                        </div>
                        <div class="itemPrice">
                          <p class="current">￥{{item.totalPrice}}</p>
                        </div>
                        <div class="info">
                          <p class="itemName">{{item.name}}</p>
                          <p class="unit">份</p>
                          <p class="itemNum">x{{item.number}}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                    <ul class="regionEntries">
                        <li class="entry">
                            <span class="name">配送费</span>
                            <span class="price">￥{{shippingFeeTip}}</span>
                        </li>
                    </ul>
                    <div class="divide">
                        <div class="divideLine"></div>
                    </div>
                    <ul class="regionEntries">
                        <li>
                            <a class="entry">
                                <span>商家代金券</span><span class="num"><span class="cMark">暂无可用</span></span>
                            </a>
                        </li>
                    </ul>
                    <div class="divide">
                        <div class="divideLine"></div>
                    </div>
                    <ul class="regionEntries clearFix">
                        <li class="entry">
                            <span class="payPrice">实付<em>￥{{payPrice}}</em></span><span class="totalOriginal">共计￥{{payPrice}}</span>
                        </li>
                    </ul>
                </div>
                <!--支付方式-->
                <div class="orderRegion">
                    <ul class="entries">
                        <li class="entry">
                            <span>支付方式</span><span class="payType"><span>在线支付</span></span>
                        </li>
                    </ul>
                    <div class="orderField clearFix">
                        <div class="fieldInner">
                            <label class="orderLabel">备注/发票：</label>
                            <a class="orderInput ellipsis">口味、偏好等要求</a>
                        </div>
                    </div>
                </div>
            </form>
        </div>
        <!--底部确定支付-->
        <div class="orderBtnField">
            <input class="commonBtn orderBtn" type="submit" value="提交订单">
            <span class="totalField">待支付<em class="orderTotal">￥{{payPrice}}</em></span>
        </div>

    </div>
</template>

<script>
    import {mapGetters} from 'vuex';
    import headTop from '../../components/head/HeadTop.vue'
    import {shopDetailData} from '../../assets/js/utils/getData'

    export default {
        data() {
            return {
                confirmOrderList: null, //订单列表
                currentShop: '', //商店名
                shippingFeeTip: '', //配送费
                dishesPrice: 0, //食物总价
            }
        },
        created() {
            //获取上个页面传递过来的shopid值
            shopDetailData(this.$route.params.shopId).then(res => {
                this.currentShop = res.data;
                this.shippingFeeTip =  res.data.shippingFeeTip;
            })

            //获取当前商铺购物车信息

            for (let i=0;i<this.getCart().length;i++) {
                this.confirmOrderList = this.getCart()[i].foodList
            }
            for(let i=0;i<this.confirmOrderList.length;i++) {
                this.dishesPrice += this.confirmOrderList[i].totalPrice
            }

        },
        computed: {
          payPrice(){
            return this.dishesPrice + this.shippingFeeTip
          },
        },
        methods: {
            ...mapGetters([
                'getCart'
            ]),
        },
        components: {
            headTop,
        },
    }
</script>

<style lang="scss" scoped>
    @import '../../assets/style/mixin';

    #confirmOrder {
        .main {
            padding-top: 2.1rem;
            margin-bottom: 3rem;
            form {
                margin: 0 .5rem;
                .addressTime {
                    background: #fff;
                    margin-top: .6rem;
                    .addressSection {
                        .addressField {
                            display: block;
                            background-color: #fff;
                            font-size: .7rem;
                            position: relative;
                            padding: .75rem 1rem .75rem 2rem;
                            line-height: 1.2rem;
                            .icon {
                                position: absolute;
                                left: .6rem;
                                top: 1.5rem;
                                width: .8rem;
                                height: .8rem;
                                background: url(../../assets/img/location.png) no-repeat;
                                background-size: .8rem .8rem;
                            }
                            .detail {
                                color: #333;
                                font-size: .8rem;
                                font-weight: bold;
                            }
                        }
                        p {
                            color: #666;
                            &:after {
                                content: '';
                                position: absolute;
                                right: .65rem;
                                top: 50%;
                                width: .4rem;
                                height: .4rem;
                                margin-top: -.25rem;
                                border: 1px solid #adadad;
                                border-width: 1px 1px 0 0;
                                transform: rotate(45deg);
                            }
                            .name {
                                margin-right: .5rem;
                                float: left;
                                max-width: 6em;
                            }
                            .gender {
                                margin-right: 1.5rem;
                            }
                        }
                    }
                    .field {
                        padding: .75rem 1rem .75rem 2rem;
                        border-top: 1px solid #f0f0f0;
                        position: relative;
                        .fieldIco {
                            position: absolute;
                            left: .6rem;
                            top: 1rem;
                            width: .8rem;
                            height: .8rem;
                            background: url(../../assets/img/time.png) no-repeat;
                            background-size: .8rem .8rem;
                        }
                        .fieldSpan {
                            &:after {
                                content: '';
                                position: absolute;
                                right: .65rem;
                                top: 50%;
                                width: .4rem;
                                height: .4rem;
                                margin-top: -.25rem;
                                border: 1px solid #adadad;
                                border-width: 1px 1px 0 0;
                                transform: rotate(45deg);
                            }
                            .fieldTxt {
                                color: #333;
                                font-weight: bold;
                                em {
                                    margin-left: .25rem;
                                    color: #348BED;
                                    font-size: .7rem;
                                    font-style: normal;
                                    font-weight: normal;
                                }
                            }
                        }
                    }

                }
                /*商品信息*/
                .orderRegion {
                    border-top: 1px solid #f0f0f0;
                    margin-top: .5rem;
                    background: #fff;
                    font-size: .7rem;
                    .foodTitle {
                        position: relative;
                        height: 2.5rem;
                        line-height: 2.5rem;
                        padding: 0 .75rem;
                        font-size: .7rem;
                        overflow: hidden;
                        .foodShop {
                            box-sizing: border-box;
                            float: left;
                            max-width: 100%;
                            padding-right: 3.75rem;
                            span {
                                color: #999;
                            }
                            .foodShopIcon {
                                display: inline-block;
                                width: .9rem;
                                height: .9rem;
                                vertical-align: -3px;
                                margin-right: .3rem;
                                background: url(http://p1.meituan.net/xianfu/d4abcf9825a8c77b7374151a1f58aa0f21515.jpg) no-repeat center;
                                background-size: cover;
                                overflow: hidden;
                                border-radius: 50%;
                            }
                            .foodShop {
                                box-sizing: border-box;
                                float: left;
                                max-width: 100%;
                                padding-right: 3.75rem;
                                white-space: nowrap;
                                overflow: hidden;
                                text-overflow: ellipsis;
                            }
                        }
                        .deliveryThird {
                            line-height: .7rem;
                            border: 1px solid #333;
                        }
                        .thirdPart {
                            position: absolute;
                            right: .75rem;
                            height: .75rem;
                            line-height: .75rem;
                            margin-top: .85rem;
                            padding: 0 .25rem;
                            color: #333;
                            font-size: .5rem;
                            box-sizing: border-box;
                            text-align: center;
                        }
                    }
                    .foodList {
                        background: #fff;
                        .foodItem {
                            padding: .5rem;
                            background: #F8F8F8;
                            overflow: hidden;
                            margin-bottom: .5rem;
                            &:last-child {
                                margin-bottom: 0;
                            }
                            .itemImg {
                                float: left;
                                background: #fff;
                                width: 2.8rem;
                                height: 2.8rem;
                                overflow: hidden;
                                img {
                                    width: 2.8rem;
                                    height: 2.8rem;
                                    object-fit: cover;
                                }
                            }
                            .itemPrice {
                                float: right;
                                width: 2.25rem;
                                text-align: right;
                                .current {
                                    line-height: 1rem;
                                    font-size: .7rem;
                                    color: #333;
                                }
                            }
                            .info {
                                margin: 0 2.5rem 0 3.25rem;
                                .itemName {
                                    line-height: 1rem;
                                    white-space: nowrap;
                                    overflow: hidden;
                                    text-overflow: ellipsis;
                                    font-size: .7rem;
                                }
                                .unit {
                                    line-height: .9rem;
                                    white-space: nowrap;
                                    overflow: hidden;
                                    text-overflow: ellipsis;
                                    color: #999;
                                    font-size: .6rem;
                                }
                                .itemNum {
                                    line-height: .9rem;
                                    color: #999;
                                    font-size: .6rem;
                                }
                            }
                        }
                    }
                    .regionEntries {
                        margin-left: .75rem;
                        li {
                            padding-top: .75rem;
                            &:first-child {
                                padding-top: .45rem;
                            }
                            &:last-child {
                                padding-bottom: .45rem;
                            }
                        }

                        .entry {
                            margin-top: 0;
                            border-top: 0;
                            margin-left: 0;
                            padding: .4rem 0;
                            font-size: .7rem;
                            position: relative;
                            color: #2f2f2f;
                            overflow: hidden;
                            .num {
                                float: right;
                                color: #aaa;
                                font-size: .7rem;
                                .cMark {
                                    position: relative;
                                    right: 1rem;
                                    color: #fb4e44;
                                }

                            }
                            .price {
                                position: absolute;
                                top: .4rem;
                                right: .75rem;
                                font-size: .6rem;
                            }
                            .name {
                                overflow: hidden;
                                display: block;
                                line-height: 1.15em;
                                white-space: nowrap;
                                text-overflow: ellipsis;
                            }
                            .payPrice {
                                float: right;
                                margin: 0 .75rem 0 0;
                                line-height: 1.2rem;
                                em {
                                    color: #fe4d3d;
                                    font-size: .8rem;
                                    font-style: normal;
                                }
                            }
                            .totalOriginal {
                                float: right;
                                line-height: 1.2rem;
                                margin-right: .5rem;
                                color: #898989;
                                font-size: .6rem;
                            }
                        }
                    }
                    .divide {
                        position: relative;
                        height: .3rem;
                        padding-top: .3rem;
                        &:before, &:after {
                            content: '';
                            position: absolute;
                            top: 0;
                            width: .6rem;
                            height: .6rem;
                            border-radius: 50%;
                            background: #f4f4f4;
                        }
                        &:before {
                            left: -.3rem;
                        }
                        &:after {
                            right: -.3rem;
                        }
                        .divideLine {
                            margin: 0 .5rem;
                            height: 0;
                            font-size: 0;
                            border-top: 1px dotted #ddd;
                        }
                    }
                    .regionEntries {
                        margin-left: .75rem;
                    }
                    .orderRegion {
                        border-top: 1px solid #f0f0f0;
                        margin-top: .5rem;
                        background: #fff;
                        font-size: .7rem;
                    }
                }
                /*支付方式*/
                .orderRegion {
                    border-top: 1px solid #f0f0f0;
                    margin-top: .5rem;
                    background: #fff;
                    font-size: .7rem;
                    .entries {
                        .entry {
                            border-top: 1px solid #f0f0f0;
                            padding: .65rem .75rem .65rem 0;
                            margin-top: -1px;
                            margin-left: .75rem;
                            font-size: .7rem;
                            position: relative;
                            color: #2f2f2f;
                            overflow: hidden;
                            .payType {
                                float: right;
                                font-size: .65rem;
                            }
                        }
                    }
                    .orderField {
                        background-color: #fff;
                        margin: 0 0 0 .75rem;
                        line-height: 2.5rem;
                        font-size: .7rem;
                        position: relative;
                        border-top: 1px solid #efefef;
                        height: 2.5rem;
                        .fieldInner {
                            &:after {
                                content: '';
                                position: absolute;
                                right: .65rem;
                                top: 50%;
                                width: .4rem;
                                height: .4rem;
                                margin-top: -.25rem;
                                border: 1px solid #adadad;
                                border-width: 1px 1px 0 0;
                                transform: rotate(45deg);
                            }
                            .orderLabel {
                                top: 0;
                                left: 0;
                                position: absolute;
                                font-size: .7rem;
                            }
                            .orderInput {
                                width: 62%;
                                margin-left: 30%;
                                font-size: .7rem;
                                text-align: right;
                                display: inline-block;
                                color: #999;
                            }
                        }
                    }
                }
            }
        }
        /*底部确认支付*/
        .orderBtnField {
            width: 100%;
            height: 2.5rem;
            position: fixed;
            bottom: 0;
            left: 0;
            border-top: 1px solid #e0e0e0;
            background-color: #fff;
            .orderBtn {
                float: right;
                width: 5.5rem;
                height: 2.5rem;
                font-size: .8rem;
                color: #333;
                background: #FFD161;
                text-align: center;
                cursor: pointer;
                -webkit-appearance: none;
            }
            .totalField {
                float: right;
                margin-right: .5rem;
                height: 2.5rem;
                line-height: 2.5rem;
                color: #2f2f2f;
                font-size: .7rem;
                .orderTotal {
                    color: #fb4e44;
                    font-size: 1.05rem;
                    font-style: normal;
                    vertical-align: middle;
                }
            }
        }
    }
</style>
