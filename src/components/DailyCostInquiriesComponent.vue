<!--
内容：逐日费用查询 组件
作者：BOBO
日期： 20170809
-->
<template>
  <div class="daily-cost-inquiries-component mb30">
  	<header class="table-common-head clearfix">
  		<span class="tit fl">逐日费用查询 <br/> Daily Cost Inquiries</span>
  		<div class="daily-cost-inquiries-component-summary fr">
  			<Date-picker type="date" placeholder="选择日期" style="width: 140px" placement="bottom-end" class="mr10"></Date-picker>
        <span class="mr10">至</span>
        <Date-picker type="date" placeholder="选择日期" style="width: 140px" placement="bottom-end" class="mr10"></Date-picker>
        <Button type="info" shape="circle" style="width: 70px" class="mr10">查询</Button>
  		</div>
  	</header>

    <table cellpadding="0" cellspacing="0" class="table-common-main-lang">
      <thead>
        <tr>
          <th v-for="item in tableData.tHead">
            <strong>{{ item.title }}</strong>
            {{ item.lang }}
          </th>  
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in tableData.tDataList">
          <td>{{ item.Date }}</td>
          <td><plus-or-reduce :obj="item.TransactionFee"></plus-or-reduce></td>
          <td><plus-or-reduce :obj="item.AccumulatedTransactionCosts"></plus-or-reduce></td>
          <td><plus-or-reduce :obj="item.DeferredFee"></plus-or-reduce></td>
          <td><plus-or-reduce :obj="item.CumulativeDeferredCharges"></plus-or-reduce></td>
          <td>{{ item.OtherFee | currencyFormatter }}</td>
          <td>{{ item.OtherCostsAccumulated | currencyFormatter }}</td>
          <td><plus-or-reduce :obj="item.DayProfitAndLoss"></plus-or-reduce></td>
          <td><plus-or-reduce :obj="item.AccountCumulativeIncome"></plus-or-reduce></td>
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
    name: 'daily-cost-inquiries-component',
    data () {
        return {
            tableData: {
                tHead: [
                    {
                        title: '日期',
                        lang: 'Date'
                    },
                    {
                        title: '交易费用',
                        lang: 'Transaction Fee'
                    },
                    {
                        title: '累计交易费用',
                        lang: 'Accumulated Transaction Costs'
                    },
                    {
                        title: '递延费',
                        lang: 'Deferred Fee'
                    },
                    {
                        title: '累计递延费',
                        lang: 'Cumulative Deferred Charges'
                    },
                    {
                        title: '其他费用',
                        lang: 'Other Fee'
                    },
                    {
                        title: '其他费用累计',
                        lang: 'Other Costs Accumulated'
                    },
                    {
                        title: '当日盈亏',
                        lang: 'Day Profit And Loss'
                    },
                    {
                        title: '账户累计收益',
                        lang: 'Account Cumulative Income'
                    }
                ],
                tDataList:[
                    {
                        Date: '2017-05-25',
                        TransactionFee: {
                            "status": 'reduce',
                            "num": 135.20
                        },
                        AccumulatedTransactionCosts: {
                            "status": 'reduce',
                            "num": 254400.00
                        },
                        DeferredFee: {
                            "status": 'reduce',
                            "num": 282.50
                        },
                        CumulativeDeferredCharges: {
                            "status": 'plus',
                            "num": 10250.28
                        },
                        OtherFee: 0.00,
                        OtherCostsAccumulated: 0.00,
                        DayProfitAndLoss: {
                            "status": 'plus',
                            "num": 10350.00
                        },
                        AccountCumulativeIncome: {
                            "status": 'plus',
                            "num": 465147.78
                        }
                    },
                    {
                        Date: '2017-05-24',
                        TransactionFee: {
                            "status": 'reduce',
                            "num": 235.20
                        },
                        AccumulatedTransactionCosts: {
                            "status": 'plus',
                            "num": 26700.00
                        },
                        DeferredFee: {
                            "status": 'plus',
                            "num": 345.50
                        },
                        CumulativeDeferredCharges: {
                            "status": 'plus',
                            "num": 5563.28
                        },
                        OtherFee: 0.00,
                        OtherCostsAccumulated: 0.00,
                        DayProfitAndLoss: {
                            "status": 'plus',
                            "num": 35265.00
                        },
                        AccountCumulativeIncome: {
                            "status": 'plus',
                            "num": 5432256.78
                        }
                    }
                ]
            }
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    .daily-cost-inquiries-component-summary{ padding: 14px 15px; height: 60px;}
    .chart-wrap{ padding: 30px; background: #252F48;}
</style>
