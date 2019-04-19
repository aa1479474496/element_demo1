<template>
  <div>
    <div>
      <h3>form</h3>
      <router-link to="/form">basic</router-link>
      <router-link to="/form/advanceform">advance</router-link>
      
      </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>