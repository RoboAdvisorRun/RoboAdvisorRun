<!--
内容：账户设置页面
作者：BOBO
日期： 20170809
-->
<template>
  <div class="account-settings">
  	<!-- 账户设置 -->
    <account-settings-component></account-settings-component>

  </div>
</template>

<script>
import AccountSettingsComponent from '@/components/AccountSettingsComponent'

export default {
  	components: {
  		AccountSettingsComponent
  	},
  	name: 'account-settings',
  	data () {
	    return {

	    }
  	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
