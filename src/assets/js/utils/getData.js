import axios from 'axios'

// 获取城市列表
export const cities = () => axios.get('/cities');

// 首页ip猜您当前城市
export const guessCity = () => axios.get('/guessCity');

// 传城市id获取当前城市
export const currentCity = (number) => axios.get('/currentCity/' + number);

// 收货地址关键字搜索
export const search = (keyword,cityName) => axios.get('/search', {
    params: {
        keyword,
        boundary: 'region('+cityName+',0)',
        page_size: 10,
    }
});


export const foods = () => axios.get('/foods');

// 账号密码登录
export const accountLogin = (username,password) => axios.post('/accountLogin', {
    username,password
});

export const foodsType = () => axios.get('/foodsType');

// 商家列表
export const seller = () => axios.get('/seller');


export const shopDetailData = (id) => axios.get('/shopDetailData/' + id);
