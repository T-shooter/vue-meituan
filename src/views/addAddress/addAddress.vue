<template>
  <div id="addAddress">
    <head-top signin-up="add" head-title="新增收货地址"></head-top>
    <div class="mainWrap">
      <div class="sectionWrap">
        <h3>联系人</h3>
        <ul class="fillSection">
          <li>
            <span class="fillType">姓名：</span>
            <div class="sectionRight">
              <input type="text" class="fillInput" placeholder="请填写收货人姓名">
              <div class="gender">
                <span class="choice">
                  <i class="iCircle actives"></i>先生</span>
                <span class="choice">
                  <i class="iCircle"></i>女士</span>
              </div>
            </div>
          </li>
          <li>
            <span class="fillType">电话：</span>
            <div class="sectionRight">
              <input type="text" class="fillInput inputTel" maxlength="11" placeholder="请填写收货手机号码">
            </div>
          </li>
        </ul>
      </div>
      <div class="sectionWrap">
        <h3>收货地址</h3>
        <ul class="fillSection addressSection">
          <li>
            <span class="fillType">小区/大厦/学校：</span>
            <a class="sectionRight" href="javascript:void(0);">
              <i class="arrow"></i>
              <input type="text" class="addressChoose" readonly="" placeholder="点击选择">
            </a>
          </li>
          <li>
            <span class="fillType">楼号－门牌号：</span>
            <div class="sectionRight">
              <input type="text" class="fillInput fillInputAddress" placeholder="例16号楼427室">
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import headTop from '../../components/head/HeadTop.vue'

  export default {
    components: {
      headTop
    }
  }
</script>


<style lang="scss">
  #addAddress {
    .mainWrap {
      padding-top: 2.1rem;
      .sectionWrap {
        h3 {
          line-height: 1.75rem;
          padding-left: .75rem;
          font-size: .6rem;
          background: #eee;
          font-weight: normal;
          color: #666;
        }
        .fillSection {
          padding-left: .6rem;
          background: #fff;
          border-bottom: 1px solid #f0f0f0;
          li {
            font-size: .7rem;
            .fillType {
              float: left;
              line-height: 2.2rem;
            }
            .sectionRight {
              position: relative;
              margin-left: 2.5rem;
              .fillInput {
                width: 100%;
                height: 2.2rem;
                line-height: 1.9rem;
                font-size: .7rem;
                border-bottom: 1px solid #E4E4E4;
                .choice {
                  float: left;
                  height: 2.2rem;
                  line-height: 2.2rem;
                  padding: 0 .5rem;
                  box-sizing: border-box;
                  &:last-child {
                    margin-left: 1.95rem;
                  }

                }
              }
              .gender {
                border-bottom: 1px solid #E4E4E4;
                height: 2.2rem;
                .choice {
                  float: left;
                  height: 2.2rem;
                  line-height: 2.2rem;
                  padding: 0 .5rem;
                  box-sizing: border-box;
                  &:last-child {
                    margin-left: 1.95rem;
                  }
                  .iCircle.actives {
                    width: .9rem;
                    height: .9rem;
                    border: 0;
                    color: transparent;
                    background: url(//xs01.meituan.net/waimai_i/img/address/addr_check.611f02ef.png) no-repeat center;
                    background-size: .9rem;
                  }
                  .iCircle {
                    float: left;
                    width: .8rem;
                    height: .8rem;
                    line-height: .8rem;
                    border: 1px solid #999;
                    margin: .6rem .4rem 0 0;
                    border-radius: 50%;
                  }
                }
              }
              .inputTel {
                border-bottom: 0;
              }
            }
          }
        }
        .addressSection {
          li {
            border-bottom: 1px solid #E4E4E4;
            .fillType {
              float: left;
              line-height: 2.2rem;
            }
            .sectionRight {
              display: block;
              height: 2.2rem;
              margin-left: 5.25rem;
              .arrow {
                float: right;
                margin: .8rem .6rem 0 0;
                width: .5rem;
                height: .5rem;
                border: 1px solid #ddd;
                border-width: 1px 1px 0 0;
                transform: rotate(45deg);
              }
              .addressChoose {
                display: block;
                line-height: 2.2rem;
                font-size: .65rem;
                color: #333;
                border: 0;
                text-overflow: ellipsis;
                white-space: nowrap;
                padding-left: 1rem;
                background: url(//xs01.meituan.net/waimai_i/img/user-addr-icon.192fb37b.png) left center no-repeat;
                background-size: .8rem;
              }
              .fillInputAddress {
                border-bottom: 0;
              }
            }
          }
        }

      }
    }
  }
</style>
