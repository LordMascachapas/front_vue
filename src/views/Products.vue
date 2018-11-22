<template>
  <h1>{{message}}</h1>
</template>

<script>
export default{
  name: 'Products',
  data() {
    return {
      message: window.sessionStorage.user,
    };
  },
};
</script>
