<!--
内容：账户设置 组件
作者：BOBO
日期： 20170809
-->
<template>
  <div class="account-settings-component mb30">
  	<header class="table-common-head clearfix">
  		<span class="tit fl">账户设置 <br/> Account Settings</span>
  	</header>

    <table cellpadding="0" cellspacing="0" class="table-item table-common-main-lang">
      <thead>
        <tr>
          <th class="left-tit">1.自动交易资金设置</th> 
          <th>
            <span class="mr10">
              使用总资金不超过 <Input v-model="TotalFunds" placeholder="请输入金额" style="width: 86px"></Input> 元;
            </span>
            <span class="mr10">
              单次交易资金不超过 <Input v-model="SingleFunding" placeholder="请输入金额" style="width: 86px"></Input> 元
            </span>
          </th> 
        </tr>
      </thead>
      <tbody>      
        <tr>
          <td class="left-tit">&nbsp;</td>
          <td>
            <Button type="primary" class="buy-btn mr10 ok-btn">确定</Button>
          </td>
        </tr>
      </tbody>
    </table>

  </div>
</template>

<script>
//引入全局过滤器
import currencyFormatter from '@/filter/currencyFormatter'
import plusOrReduce from '@/components/common/plusOrReduce'

export default {
  components: {
    currencyFormatter,
    plusOrReduce
  },
  name: 'account-settings-component',
  data () {
    return {
      TotalFunds: '',
      SingleFunding: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
	.account-settings-component-summary{ padding: 14px 15px; height: 60px;}

  .table-item{ color: #fff; font-size: 14px; font-weight: normal; text-align: left;
    th{ font-size: 14px; text-align: left; font-weight: normal;}
    .left-tit{ padding-left: 20px; width: 160px;}
    .oprate-btn{ width: 120px;}
    .ok-btn{ width: 200px;}
  }
</style>
