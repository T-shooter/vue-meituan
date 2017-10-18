<template>
  <div id="profile">
    <div class="top">
      <img src="https://img.meituan.net/avatar/8e289d0c7b9ab37d1b89c67d0c9857e680086.jpg" class="avatar">
      <p>smile杀猪仔 ></p>
    </div>
    <section class="card">
      <ul class="cardUl clearFix">
        <router-link to="/address" tag="li" class="list">
          <img class="img" src="//xs01.meituan.net/waimai_i/img/user-addr-icon.192fb37b.png">
          <span class="txt">收货地址管理<i class="arrows"></i></span>
        </router-link>
        <router-link to="/address" tag="li" class="list">
          <img class="img" src="//xs01.meituan.net/waimai_i/img/user-addr-icon.192fb37b.png">
          <span class="txt">商家代金券<i class="arrows"></i></span>
        </router-link>
      </ul>
      <ul class="cardUl suggestion clearFix">
        <router-link to="/address" tag="li" class="list">
          <img class="img" src="//xs01.meituan.net/waimai_i/img/user-addr-icon.192fb37b.png">
          <span class="txt">意见反馈<i class="arrows"></i></span>
        </router-link>
        <router-link to="/address" tag="li" class="list">
          <img class="img" src="//xs01.meituan.net/waimai_i/img/user-addr-icon.192fb37b.png">
          <span class="txt">常见问题<i class="arrows"></i></span>
        </router-link>
      </ul>
      <div class="service">
        <a href="tel:10109777">客服电话：<label>101-097-77</label></a>
      </div>
      <div class="service time">
        <p>服务时间：9:00-23:00</p>
      </div>

    </section>
  </div>
</template>


<style lang="scss" scoped>
  #profile {
    .top {
      height:8rem;
      background: url(//xs01.meituan.net/waimai_i/img/user-banner.8c03fc75.png) no-repeat;
      background-size:cover;
      text-align: center;
      .avatar {
        margin-top:1.5rem;
        width:3.6rem;
        height: 3.6rem;
        border-radius: 50%;
        border: .15rem solid rgba(255,255,255,0.4);
      }
      p {
        font-size: 0.8rem;
        padding-top: .3rem;
      }
    }
    .card {
      .cardUl {
        background: #fff;
        .list {
          margin-left:1rem;
          height: 2.2rem;
          line-height: 2.2rem;
          background: #fff;
          border-bottom:1px solid #e6e6e6;
          position: relative;
          &:last-child {
            border-bottom:0;
          }
          .img {
            width: .8rem;
            height: .8rem;
            padding-right: .3rem;
            vertical-align: middle;
          }
          .txt {
            font-size: .7rem;
            .arrows {
              position: absolute;
              right: .9rem;
              width: .6rem;
              height: .6rem;
              border: 1px solid #ccc;
              text-align: center;
              top: .7rem;
              border-left: 0;
              border-bottom: 0;
              transform: rotate(45deg);
            }
          }
        }
      }
      .suggestion {
        margin-top: 0.5rem;
      }
      .service {
        margin-top: .5rem;
        height: 2.2rem;
        line-height: 2.2rem;
        text-align: center;
        background: #fff;
        font-size: .7rem;
        a {
          color: #ffb000;
        }
      }
      .time {
        height: 1rem;
        line-height: 1rem;
        background: #efefef;
        p {
          color: #999;
        }
      }


    }
  }

</style>
