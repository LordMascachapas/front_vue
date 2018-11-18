<template>
  <div class="container">
    <div class="col-xs-12 col-md8 col-md-offset-2">
      <h1>{{username}}</h1>
      <hr>
      <SignForm
        @dataLogin="submit"
        @dataRegist="submit"/>
    </div>
  </div>
</template>

<script>
// <QuestionForm :question.sync='question'/>
import SignForm from '@/components/SignForm.vue';

export default {
  name: 'login',
  components: {
    SignForm,
  },
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    submit(value) {
      this.username = value.username;
      this.password = value.pwd;
    },
  },
};
</script>

<style lang="sass">
</style>
