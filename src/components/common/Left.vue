<!--
内容：公共左侧栏
作者：BOBO
日期： 20170802
-->
<template>
  <div class="left">
    <h1 class="logo"><img src="../../assets/logo.png"></h1>

    <ul class="nav-list">
      <!-- <li>交易指令查询</li> -->

      <!-- 将"激活时的CSS类名"应用在外层元素 li  -->
      <router-link tag="li" v-for="(data, index) in linkData" :to="data.url" :key="index">
        <i class="iconfont" :class="data.icon"></i>

        <dl>
          <dt><router-link :to="data.url">{{ data.sort }} <span>{{ data.en }}</span></router-link></dt>
          <dd v-if="data.sortChild" v-for="(item, key, index) in data.sortChild">
            <router-link :to="item.url">{{ item.tit }} <span>{{ item.en }}</span></router-link>
          </dd>
        </dl>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'left',
  data () {
    return {
      linkData: [
        {
          "sort": "交易指令查询", 
          "en": "Transaction Order Inquiry",
          "url": "/transaction-order-inquiry",
          "icon": "icon-zhiling",
          "sortChild": [
            {"tit": "当日指令", "url": "/transaction-order-inquiry/day-instruction", "en": "Day Instruction"},
            {"tit": "历史指令", "url": "/transaction-order-inquiry/historical-instruction", "en": "Historical Instruction"},
            {"tit": "执行情况查询", "url": "/transaction-order-inquiry/implementation-query", "en": "Implementation Query"}
          ]
        },
        {
          "sort": "账户查询",
          "en": "Query Account",
          "url": "/query-account",
          "icon": "icon-zhanghu",
          "sortChild": [
            {"tit": "资产查询", "url": "/query-account/asset-query", "en": "Asset Query"},
            {"tit": "成交查询", "url": "/query-account/transaction-query", "en": "Transaction Query"},
            {"tit": "委托查询", "url": "/query-account/entrust-query", "en": "Entrust Query"},
            {"tit": "历史持仓", "url": "/query-account/historical-position-query", "en": "Historical Position Query"},
            {"tit": "收益走势", "url": "/query-account/curve-of-refum", "en": "Curve Of Refum"},
            {"tit": "逐日费用查询", "url": "/query-account/daily-cost-inquiries", "en": "Daily Cost Inquiries"}
          ]
        },
        {
          "sort": "模拟账户",
          "en": "Simulated Account",
          "url": "/simulated-account",
          "icon": "icon-monizhanghu",
          "sortChild": [
            {"tit": "账户概要", "url": "/simulated-account/simulation-account-information", "en": "Account Information"},
            {"tit": "成交查询", "url": "/simulated-account/simulation-transaction-query", "en": "Transaction Query"},
            {"tit": "委托查询", "url": "/simulated-account/simulation-entrust-query", "en": "Entrust Query"},
            {"tit": "历史持仓", "url": "/simulated-account/simulation-historical-position-query", "en": "Historical Position Query"},
            {"tit": "收益走势", "url": "/simulated-account/simulation-curve-of-refum", "en": "Curve Of Refum"}
          ]
        },
        {
          "sort": "账户设置",
          "en": "Account Settings",
          "url": "/account-settings",
          "icon": "icon-chakan"
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .left{ position: absolute; z-index: 3; left: 0; top: 0; width: 260px; min-height: 100vh; height: 100%; background: #1D2742; box-shadow: 2px 0 10px 0 rgba(0,0,0,0.10);
    .logo{ padding: 30px 35px;
      img{ width: 170px; height: 60px;}
    }

    .nav-list{
      li{ position: relative; z-index: 1; margin-bottom: 10px;
        .iconfont{ position: absolute; z-index: 2; top: 15px; left: 30px; font-size: 30px;
          &.icon-zhanghu{ left: 32px; font-size: 24px;}
          &.icon-monizhanghu{ left: 26px; font-size: 26px;}
          &.icon-tiyanmonizhanghu{ font-size: 24px;}
        }

        &.router-link-active{
          dd{ display: block;}
        }
        &:hover{
          dt{
            a{ color: #fff; background-image: linear-gradient(90deg, #6F64FF 0%, #B93BFB 100%);}
          }
        }

        a{ display: block; padding: 10px 0 10px 70px; height: 60px; line-height: 20px; color: #8A9DD1; text-decoration: none;
          &.router-link-active{ color: #fff;}
        }

        dl{
          dt{
            a{ font-size: 16px;
              &.router-link-active{ color: #fff; background-image: linear-gradient(90deg, #6F64FF 0%, #B93BFB 100%);}
            }
            span{ display: block; font-size: 12px;}
          }
          dd{ display: none; height: 50px; background: #3B4B76;
            a{ padding: 7px 0 7px 30px; height: 50px; line-height: 18px; font-size: 12px;
              &.router-link-active{ color: #8A9DD1; border-left: 4px solid #037CFC; background: #26304D;}
            }
            span{ display: block;}
          }
        }
      }
    }
  }
</style>
