<template>
    <div id="city">
        <head-top signin-up="city"  head-title="选择收货地址"></head-top>
        <div class="schBox clearFix">
            <div class="schInputCont">
                <form v-on:submit.prevent>
                    <div class="place" @click="$router.go(-1)">
                        <span class="name ellipsis">{{cityName}}</span>
                    </div>
                    <input v-model="keyword" type="search" class="schInput" placeholder="请输入收货地址">
                    <input type="submit" class="citySubmit" @click='search' value="提交">
                </form>
            </div>
        </div>

        <!--搜索结果列表-->
        <ul class="searchList">
            <li @click='chooseAddress(index)' class="field ellipsis"
                v-for="(item,index) in searchInfo" :key="item.id" >
                <p class="title ellipsis">{{item.title}}</p>
                <p class="address ellipsis">{{item.address}}</p>
            </li>
        </ul>
    </div>
</template>

<script>
    import headTop from '../../components/head/HeadTop.vue'
    import {currentCity, search} from '../../assets/js/utils/getData'

    export default {
        data() {
            return {
                keyword: '',  //搜索内容
                cityId: '',  //当前城市id
                cityName: '', //当前城市名
                searchInfo: '', //搜索结果
                searchTitle: '', //搜索结果地址标题
                searchAddress: '', //搜索结果地址信息
                lat: '',    //经度
                lng: ''     //纬度
            }
        },
        mounted() {
            this.cityId = this.$route.params.cityId;
//      获取当前城市
            currentCity(this.cityId).then(res => {
                this.cityName = res.data.name;
            })
        },
        components: {
            headTop
        },
        methods: {
            search() {
                //输入值不为空时才发送信息
                if (this.keyword) {
                    search(this.keyword, this.cityName).then(res => {
                        this.searchInfo = res.data.data;
                        for (let i = 0; i < res.data.data.length; i++) {
                            this.searchTitle = res.data.data[i].title;
                            this.searchAddress = res.data.data[i].address;
                            this.lat = res.data.data[i].location.lat;
                            this.lng = res.data.data[i].location.lng;
                        }
                    })
                }
            },
            chooseAddress(index) {
                this.$router.push({path: '/msite', query: {lat:this.lat,lng:this.lng}})
            },
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../assets/style/mixin";
    .schBox {
        margin-bottom: 0.5rem;
        padding: 2.8rem 0.4rem .45rem;
        @include bb(#e0e0e0);
        background: #fff;
        .schInputCont {
            position: relative;
            .place:after {
                content: '';
                position: absolute;
                width: 0.25rem;
                height: 0.25rem;
                border: 1px solid rgba(0, 0, 0, 0.5);
                border-top: 0;
                border-left: 0;
                top: 0.6rem;
                left: 3.5rem;
                transform: rotate(45deg);
            }
            .citySubmit {
                margin-top: 0.5rem;
                height: 1.4rem;
                width: 100%;
                box-sizing: border-box;
                font-size: 0.65rem;
                border-radius: 0.15rem;
                text-align: center;
                background: #ffd300;
                color: #fff;
            }

            .name {
                position: absolute;
                width: 3rem;
                font-size: 0.7rem;
                z-index: 2;
                top: 0.25rem;
                left: 0.5rem;
                text-align: center;
            }
            .schInput {
                height: 1.4rem;
                width: 100%;
                padding: 0.3rem 0.6rem 0.3rem 4.5rem;
                box-sizing: border-box;
                background: #efefef;
                font-size: 0.65rem;
                @include borderRadius(0.15rem)
            }
        }

    }

    .searchList {
        .field {
            display: block;
            background-color: #fff;
            padding-left: .5rem;
            @include bb;
            &:last-child {
                border-bottom: none;
            }
            .title {
                font-size: .7rem;
                margin-top: .6rem;
                line-height: 1rem;
                padding-right: .5rem;
            }
            .address {
                font-size: .7rem;
                line-height: 1rem;
                padding: .3rem 0 .6rem;
                color: #999;
                width: 90%;
            }

        }
    }
</style>
