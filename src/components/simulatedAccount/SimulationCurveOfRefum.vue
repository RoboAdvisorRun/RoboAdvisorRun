<!--
内容：模拟收益走势页面
作者：BOBO
日期： 20170809
-->
<template>
  <div class="simulation-curve-of-refum">
    <!-- 模拟收益走势简介 -->
    <curve-of-refum-summary-component></curve-of-refum-summary-component>

    <!-- 模拟收益走势 -->
    <curve-of-refum-component></curve-of-refum-component>
  </div>
</template>

<script>
import CurveOfRefumComponent from '@/components/CurveOfRefumComponent'
import CurveOfRefumSummaryComponent from '@/components/CurveOfRefumSummaryComponent'

export default {
    components: {
      CurveOfRefumComponent,
      CurveOfRefumSummaryComponent
    },
    name: 'simulation-curve-of-refum',
    data () {
      return {

      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
