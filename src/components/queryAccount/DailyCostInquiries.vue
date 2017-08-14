<!--
内容：逐日费用查询页面
作者：BOBO
日期： 20170809
-->
<template>
  <div class="daily-cost-inquiries">
  	<!-- 逐日费用查询 -->
    <daily-cost-inquiries-component></daily-cost-inquiries-component>
  </div>
</template>

<script>
import DailyCostInquiriesComponent from '@/components/DailyCostInquiriesComponent'

export default {
  	components: {
      DailyCostInquiriesComponent
  	},
  	name: 'daily-cost-inquiries',
  	data () {
	    return {

	    }
  	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
