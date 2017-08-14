<!--
内容：执行情况查询 组件
作者：BOBO
日期： 20170809
-->
<template>
  <div class="implementation-query-component mb30">
    <header class="table-common-head clearfix">
        <span class="tit fl">执行情况查询 <br/> Implementation Query Component</span>
        <div class="implementation-query-component-summary fr">
            <Date-picker type="date" placeholder="选择日期" style="width: 140px" placement="bottom-end" class="mr10"></Date-picker>
            <span class="mr10">至(To)</span>
            <Date-picker type="date" placeholder="选择日期" style="width: 140px" placement="bottom-end" class="mr10"></Date-picker>

            <Input v-model="timeInput" placeholder="请输入指令编号" style="width: 140px"></Input>

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
          <td>{{ item.OrderNumber }}</td>
          <td>{{ item.Time }}</td>
          <td>{{ item.InstructionContent }}</td>
          <td>{{ item.Implementation }}</td>
          <td>{{ item.ExecutionState }}</td>
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
  name: 'implementation-query-component',
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
                  title: '指令内容',
                  lang: 'Instruction Content'
              },
              {
                  title: '执行情况',
                  lang: 'Implementation'
              },
              {
                  title: '执行状态',
                  lang: 'Execution State'
              }
            ],
            tDataList:[
                {
                    OrderNumber: '1058521455dk155',
                    Time: '10:33:18',
                    InstructionContent: '黄金延期Au(T+D)，价格>=279.00，多开10手，279.05；指令有效期截止当日15:20，过后自动失效',
                    Implementation: '于9:34触发，黄金延期，多开10手；于10:21全部成交，成交均价279.31',
                    ExecutionState: '触发，全部完成'
                },
                {
                    OrderNumber: '1058521455dk155',
                    Time: '10:33:18',
                    InstructionContent: '黄金延期Au(T+D)，价格>=279.00，多开10手，279.05；指令有效期截止当日15:20，过后自动失效',
                    Implementation: '于9:34触发，黄金延期，多开10手；于10:21全部成交，成交均价279.31',
                    ExecutionState: '触发，部分完成、手动撤单'
                }
            ]
        }

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    .implementation-query-component-summary{ padding: 14px 15px; height: 60px;}
    .f-blue{ color: #24B1F7;}
</style>
