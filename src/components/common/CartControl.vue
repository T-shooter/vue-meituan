<template>
    <div class="cartControl right">
        <span class="right foodsQuantity">
             <i class="sub" @click="subToCart(foods,foods.id)"></i>
             <i class="amount">{{amount}}</i>
             <i class="add" @click="addToCart(foods,amount,foods.id)"></i>
        </span>
    </div>
</template>

<script>
    import {mapState, mapMutations} from 'vuex'
    export default {
        data() {
            return {
                amount: 0
            }
        },
        computed: {
            /*amount () {
                return this.$store.state.cartList
            }*/
        },
        props:['foods'],
        mounted() {
//            打印出来的为啥不是数值呢？？
//            console.log(this.$store.state.cartList)
        },
        methods: {
            ...mapMutations(['ADD_CART']),
            subToCart(foods,amount,foodsId) {

            },
            addToCart(foods,amount,foodsId) {
                this.amount++;
                this.ADD_CART({foods,amount,foodsId})
                this.$emit('addBuyCart');
            },
        }
    }
</script>

<style lang="scss" scoped>
    .cartControl {
        display: inline-block;
        .foodsQuantity {
            display: flex;
            align-items: center;
            .sub {
                width: 1.25rem;
                height: 1.25rem;
                background-image: url(//xs01.meituan.net/waimai_i/img/sprite/tiny-icon.db95320f.png);
                background-position: -.75rem -1.4rem;
                background-size: 7.5rem 17.5rem;
            }
            .amount {
                padding: 0 .25rem;
            }
            .add {
                width: 1.25rem;
                height: 1.25rem;
                background: url(//xs01.meituan.net/waimai_i/img/add-food.4a0b4c25.png) no-repeat center;
                background-size: 1.25rem;
            }
        }
    }
</style>