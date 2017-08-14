<!--
内容：当日指令 组件
作者：BOBO
日期： 20170809
-->
<template>
  <div class="day-instruction-component mb30">
    <header class="table-common-head clearfix">
        <span class="tit fl">当日指令 <br/> Day Instruction</span>
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
          <td>{{ item.OrderNumber }}</td>
          <td>{{ item.Time }}</td>
          <td>{{ item.SpotName }}</td>
          <td>{{ item.TradeSignal.default}}<br/> {{ item.TradeSignal.lang }}</td>
          <td>{{ item.TradeType }}</td>
          <td>{{ item.OrderPrice }}</td>
          <td>{{ item.OrderAmount }}</td>
          <td>{{ item.Deadline }}</td>
          <td :class="{'f-blue': item.Remark.succ }">{{ item.Remark.text }}</td>
          <td>{{ item.oprate }}</td>
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
  name: 'day-instruction-component',
  data () {
    return {
        tableData: {
            tHead: [
              {
                  title: '指令编号',
                  lang: 'Order Number'
              },
              {
                  title: '下发时间',
                  lang: 'Time'
              },
              {
                  title: '合约',
                  lang: 'Spot Name'
              },
              {
                  title: '交易信号',
                  lang: 'Trade Signal'
              },
              {
                  title: '交易类型',
                  lang: 'Trade Type'
              },
              {
                  title: '交易价格',
                  lang: 'Order Price'
              },
              {
                  title: '交易数量',
                  lang: 'Order Amount'
              },
              {
                  title: '指令截止时间',
                  lang: 'Deadline'
              },
              {
                  title: '来源备注',
                  lang: 'Remark'
              },
              {
                  title: '操作',
                  lang: 'Operating'
              }
            ],
            tDataList:[
                {
                    OrderNumber: '1058521455dk155',
                    Time: '10:33:18',
                    SpotName: '黄金延期Au(T+D)',
                    TradeSignal: {
                        "default": '价格>=279.00',
                        "lang": 'p>=279.00'
                    },
                    TradeType: '多开(Buy Long)',
                    OrderPrice: 279.68,
                    OrderAmount: 10,
                    Deadline: '15:30',
                    Remark: {
                        "text": '已下发(Running)',
                        "succ": false
                    },
                    oprate: '终止'
                },
                {
                    OrderNumber: '1058521455dk155',
                    Time: '10:33:18',
                    SpotName: '白银延期Au(T+D)',
                    TradeSignal: {
                        "default": '价格>=279.00',
                        "lang": 'p>=279.00'
                    },
                    TradeType: '多开(Buy Long)',
                    OrderPrice: 558.68,
                    OrderAmount: 60,
                    Deadline: '15:30',
                    Remark: {
                        "text": '已触发，委托(Triggered)',
                        "succ": true
                    },
                    oprate: '撤单'
                },
                {
                    OrderNumber: '1058521455dk155',
                    Time: '10:33:18',
                    SpotName: '迷你黄金延期Au(T+D)',
                    TradeSignal: {
                        "default": '价格>=279.00',
                        "lang": 'p>=279.00'
                    },
                    TradeType: '多开(Buy Long)',
                    OrderPrice: 457.68,
                    OrderAmount: 100,
                    Deadline: '15:30',
                    Remark: {
                        "text": '交易成功(Trade)',
                        "succ": true
                    },
                    oprate: '终止'
                },
                {
                    OrderNumber: '1058521455dk155',
                    Time: '10:33:18',
                    SpotName: '黄金延期Au(T+D)',
                    TradeSignal: {
                        "default": '价格>=279.00',
                        "lang": 'p>=279.00'
                    },
                    TradeType: '多开(Buy Long)',
                    OrderPrice: 268.68,
                    OrderAmount: 10,
                    Deadline: '15:30',
                    Remark: {
                        "text": '已下发(Running)',
                        "succ": false
                    },
                    oprate: '撤单'
                }
                
            ]
        }

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    .day-instruction-component-summary{ padding: 14px 15px; height: 60px;}
    .f-blue{ color: #24B1F7;}
</style>
