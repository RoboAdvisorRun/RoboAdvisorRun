<!--
内容：执行情况查询页面
作者：BOBO
日期： 20170809
-->
<template>
  <div class="implementation-query">
  	<!-- 执行情况查询 -->
    <implementation-query-component></implementation-query-component>

  </div>
</template>

<script>
import ImplementationQueryComponent from '@/components/ImplementationQueryComponent'

export default {
  	components: {
  		ImplementationQueryComponent
  	},
  	name: 'implementation-query',
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
