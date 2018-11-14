<template>
  <div>
    <button>{{message}}</button>
  </div>
</template>

<script>
// <QuestionForm :question.sync='question'/>
// import QuestionForm from '@/components/QuestionForm.vue';

export default {
  name: 'home',
  components: {
  },
  data() {
    return {
      message: 'Un mensaje chachi',
    };
  },
};
</script>

<style scoped lang="sass">
body
  background: #232d3d
</style>
