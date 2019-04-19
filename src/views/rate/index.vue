<template>
  <div>
    <el-rate v-model="value3" show-text :texts="texts"></el-rate>
  </div>
</template>


<script>
export default {
  data() {
    return {
      value3: null,
      texts: ["极差11111", "失望2", "一般3", "满意4", "惊喜5"]
    };
  }
};
</script>