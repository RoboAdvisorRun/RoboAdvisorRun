<!--
内容：当日指令页面
作者：BOBO
日期： 20170809
-->
<template>
  <div class="day-instruction">
  	<!-- 当日指令 -->
    <day-instruction-component></day-instruction-component>

  </div>
</template>

<script>
import DayInstructionComponent from '@/components/DayInstructionComponent'

export default {
  	components: {
  		DayInstructionComponent
  	},
  	name: 'day-instruction',
  	data () {
	    return {

	    }
  	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
