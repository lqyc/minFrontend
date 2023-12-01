<template>
  <div>
    <HelloWorld msg="Vue3Demo示例kkkkk"></HelloWorld>
    <p style="text-align: center">哈哈哈哈哈哈哈哈哈哈哈 <b>just try</b> 哈哈哈哈哈哈哈哈哈哈</p>
    <div class="content" style="text-align: center">
      <p>
        试试demo的版本号：
        <el-tag style="vertical-align: text-top" size="small">3.2.24</el-tag>
      </p>
      <p>
        当前的element-plus版本：
        <el-tag style="vertical-align: text-top" size="small">2.2.6</el-tag>
      </p>
      <p>
        当前ant-design-vue版本
        <el-tag style="vertical-align: text-top" size="small">2.2.8</el-tag>
      </p>
      <p>
        <el-button @click="() => open('https://github.com/Tencent/wujie/tree/master/examples/vue3')"
          >仓库地址</el-button
        >
      </p>
    </div>
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
export default {
  data() {
    return {
      open: window.open,
    };
  },
  components: {
    HelloWorld,
  },
};
</script>

<style>
:root {
  --host-color: #f16b5f;
}
</style>
