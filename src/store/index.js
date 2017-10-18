import Vue from 'vue'
import Vuex from 'vuex'
import {
    setStore,getStore
} from '../assets/js/utils/localstorage'

const ADDTOCART = 'ADDTOCART'
const REDUCETOCART = 'REDUCETOCART'
const INITBUYCART = 'INITBUYCART'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        cartList: []
    },
    getters: {
        getCart(state) {
            return state.cartList;
        }
    },
    mutations: {
        updateCartList(state, {
            formatList
        }) {
            state.cartList = formatList;
        },
        updateFoodList(state, {
            formatList,
            cartListIndex,
        }) {
            state.cartList[cartListIndex].foodList = formatList;
        },

        //网页初始化时从本地缓存获取购物车数据
        [INITBUYCART](state) {
            let initCart = getStore('buyCart');
            if (initCart) {
                state.cartList = JSON.parse(initCart);
            }
        },

        [ADDTOCART](state, {
            shopId,
            dishes,
            dishId,
            picture,
            name,
            price
        }) {
            if (dishes.productQuantity == 0) {
                dishes.productQuantity = 1;
            } else {
                dishes.productQuantity++;
            }
            let cart = {
                shopId: shopId,
                dishes: dishes,
                productQuantity: dishes.productQuantity,
                dishId: dishId,
                picture: picture,
                name: name,
                price: price
            }

            state.cartList.push(cart)
            setStore('buyCart', state.cartList);

        },

        // 减
        [REDUCETOCART](state, {
            shopId,
            dishes,
            dishId,
            picture,
            name,
            price
        }) {
            dishes.productQuantity--;
            let cart = {
                shopId: shopId,
                dishes: dishes,
                productQuantity: dishes.productQuantity,
                dishId: dishId,
                picture: picture,
                name: name,
                price: price
            }

            state.cartList.push(cart)
            setStore('buyCart', state.cartList);

        }
    },
    actions: {
        // 判断是否已经存在店铺
        checkShopExisted({
                             state,
                             dispatch,
                             commit
                         }, {
                             shopId,
                             foodObj,
                             flag,
                         }) {
            let tempcartList = state.cartList.slice();
            let shopExistedIndex = tempcartList.findIndex((shop, index) => {
                return shop.shopId === shopId;
            });
            switch (flag) {
                case 'add':
                    if (shopExistedIndex !== -1) {
                        dispatch('checkFoodExisted', {
                            shopExistedIndex,
                            foodObj,
                            flag,
                        });
                    } else {
                        tempcartList.push({
                            shopId,
                            foodList: [{
                                foodId: foodObj.id,
                                totalPrice: foodObj.price,
                                number: 1,
                                name: foodObj.name,
                                picture: foodObj.picture,
                            }],
                        });
                        commit('updateCartList', {
                            formatList: tempcartList
                        });
                    }
                    ;
                    break;
                case 'sub':
                    if (shopExistedIndex !== -1) {
                        dispatch('checkFoodExisted', {
                            shopExistedIndex,
                            foodObj,
                            flag,
                        });
                    } else {
                        return null;
                    }
                    ;
                    break;
            }

        },
        // 判断是否已经存在食品
        async checkFoodExisted({
                                   state,
                                   dispatch,
                                   commit
                               }, {
                                   shopExistedIndex,
                                   foodObj,
                                   flag,
                               }) {
            let tempFoodList = state.cartList[shopExistedIndex].foodList.slice();
            let foodExistedIndex = tempFoodList.findIndex((food, index) => {
                return food.foodId === foodObj.id;
            });
            switch (flag) {
                case 'add':
                    if (foodExistedIndex !== -1) {
                        tempFoodList[foodExistedIndex] = await dispatch('calculatePrice', {
                            foodObj,
                            currentFoodObj: tempFoodList[foodExistedIndex],
                            flag,
                        });
                        commit('updateFoodList', {
                            formatList: tempFoodList,
                            cartListIndex: shopExistedIndex,
                        })
                    } else {
                        tempFoodList.push({
                            foodId: foodObj.id,
                            totalPrice: foodObj.price,
                            number: 1,
                            name: foodObj.name,
                            picture: foodObj.picture,
                        });
                        commit('updateFoodList', {
                            formatList: tempFoodList,
                            cartListIndex: shopExistedIndex,
                        })
                    }
                    ;
                    break;
                case 'sub':
                    if (foodExistedIndex !== -1) {
                        tempFoodList[foodExistedIndex] = await dispatch('calculatePrice', {
                            foodObj,
                            currentFoodObj: tempFoodList[foodExistedIndex],
                            flag,
                        });
                        commit('updateFoodList', {
                            formatList: tempFoodList,
                            cartListIndex: shopExistedIndex,
                        })
                    } else {
                        return null;
                    }
                    ;
                    break;
            }

        },
        // 计算增加食品后的对象信息
        calculatePrice({
                           state,
                           dispatch,
                           commit
                       }, {
                           foodObj,
                           currentFoodObj,
                           flag,
                       }) {
            let tempCurrentFood = Object.assign({}, {
                ...currentFoodObj
            });
            switch (flag) {
                case 'add':
                    tempCurrentFood.totalPrice = tempCurrentFood.totalPrice + foodObj.price;
                    tempCurrentFood.number = ++tempCurrentFood.number;
                    return tempCurrentFood;
                    break;
                case 'sub':
                    tempCurrentFood.totalPrice = tempCurrentFood.totalPrice - foodObj.price;
                    tempCurrentFood.number = --tempCurrentFood.number;
                    return tempCurrentFood;
                    break;
            }
        }
    }
})
