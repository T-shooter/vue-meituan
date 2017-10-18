<template>
    <div id="home">
        <!--头部标题-->
        <head-top signin-up="home" head-title="选择城市">
            <router-link to="/" slot="logo" class="left logo">
                <img src="//xs01.meituan.net/waimai_i/img/logo.42591fec.png">
            </router-link>
        </head-top>

        <!--猜您位置-->
        <div class="currPosition">
            <p>猜您当前位于：
                <router-link :to="'city/' + cityId" class="currCityName" v-cloak>{{guessCity}}</router-link>
            </p>
        </div>

        <!--城市列表-->
        <div class="list">
            <div v-for="item in cityNav" :key="item.id" class="field">
                <a :name="item.idx" :id="item.idx" class="letter">{{item.idx}}</a>
                <ul class="fieldCities">
                    <li v-for="cities in item.cities" :key="item.id" class="fieldCitesCity">
                        <router-link tag="li" :to="'/city/' + cities.cityId" class="fieldCitesCityName ellipsis">
                            {{cities.cityName}}
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>

        <!--城市拼音索引-->
        <div class="cityNav">
            <a :href="'#'+item.idx" :id="item.idx" class="cityNavItem" v-for="item in classifyNav" :key="item.id" >{{item.idx}}</a>
        </div>

    </div>
</template>

<script>
    import headTop from '../../components/head/HeadTop.vue'
    import {cities, guessCity} from '../../assets/js/utils/getData'

    export default {
        data() {
            return {
                guessCity: '',  //定位城市
                cityId: {},     //城市id
                cityNav: {},    //所有城市名
                classifyNav: {}  //城市索引

            }
        },
        components: {
            headTop
        },
        mounted() {
            cities().then(res => {
                if (res.status == 200) {
//                  所有城市N
                    this.cityNav = res.data.data.cityNav;
//                  城市索引
                    this.classifyNav = res.data.data.classifyNav;
                }
            }),
                guessCity().then(res => {
                    if (res.data.status == 0) {
                        const cityInfo = {
                            lat: res.data.result.location.lat,
                            lng: res.data.result.location.lng,
                            city: res.data.result.ad_info.city,
                            id: res.data.result.ad_info.adcode,
                        }
                        this.guessCity = cityInfo.city;
                        //          城市id
                        this.cityId = cityInfo.id
                    }

                })
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../assets/style/mixin";

    [v-cloak] {
        display: none;
    }

    #home {
        .logo {
            @include ct;
            img {
                @include wh(1.7rem, 1.7rem);
                display: block;
                padding-left: .75rem;
            }
        }
        .currPosition {
            position: fixed;
            @include wh(100%, 1.85rem);
            font-size: .7rem;
            line-height: 1.85rem;
            margin-top: 2.105rem;
            background-color: #fff;
            color: #2f2f2f;
            padding-left: .75rem;
            .currCityName {
                color: #ffb100;

            }
        }
        .list {
            padding-top: 4rem;
            background: #fff;
            .field {
                margin-right: 0.75rem;
                .letter {
                    color: #999;
                    background: #eee;
                    font-size: 0.7rem;
                    line-height: 1.5rem;
                    padding-left: 0.5rem;
                    display: block;
                }
                .fieldCities {
                    background: #fff;
                    .fieldCitesCity {
                        margin-left: 0.5rem;
                        height: 2.2rem;
                        line-height: 2.2rem;
                        @include bb;
                        &:last-child {
                            border-bottom: 0;
                        }
                        .fieldCitesCityName {
                            display: inline-block;
                            width: 90%;
                            color: #000;
                            font-size: 0.7rem;
                        }
                    }
                }
            }
        }
        .cityNav {
            position: fixed;
            width: 0.75rem;
            top: 6rem;
            right: 0;
            .cityNavItem {
                color: #666;
                display: block;
                font-size: .55rem;
                line-height: .75rem;
                text-align: center;
            }
        }
    }
</style>
