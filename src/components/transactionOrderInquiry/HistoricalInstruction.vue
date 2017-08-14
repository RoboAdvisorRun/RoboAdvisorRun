<!--
内容：历史指令页面
作者：BOBO
日期： 20170809
-->
<template>
  <div class="historical-instruction">
  	<!-- 历史指令 -->
    <historical-instruction-component></historical-instruction-component>

  </div>
</template>

<script>
import HistoricalInstructionComponent from '@/components/HistoricalInstructionComponent'

export default {
  	components: {
  		HistoricalInstructionComponent
  	},
  	name: 'historical-instruction',
  	data () {
	    return {
	      	msg: ''
	    }
  	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
