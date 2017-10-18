const ADDTOCART = 'ADDTOCART'
import {setStore, getStore} from '../assets/js/utils/localstorage'


export default {

	// 加入购物车
    [ADDTOCART](state,{shopId,type,dishes,picture,name,productQuantity,price}) {
        let cart = state.cartList;
        // let cart = Object.assign({}, state.cartList)
        if(productQuantity) {
          productQuantity++;
        } else {

        }
        cart = {
            shopId,type,dishes,picture,name,productQuantity,price
        }


        state.cartList = cart




      // let cart = state.cartList;
      // let shop = cart[shopid] = (cart[shopid] || {});
      // let category = shop[category_id] = (shop[category_id] || {});
      // let item = category[item_id] = (category[item_id] || {});
      // if (item[food_id]) {
      //   item[food_id]['num']++;
      // } else {
      //   item[food_id] = {
      //     "num" : 1,
      //     "id" : food_id,
      //     "name" : name,
      //     "price" : price,
      //     "specs" : specs,
      //     "packing_fee" : packing_fee,
      //     "sku_id" : sku_id,
      //     "stock" : stock
      //   };
      // }
      // state.cartList = {...cart};
      //存入localStorage
      setStore('buyCart', state.cartList);
    },
}
