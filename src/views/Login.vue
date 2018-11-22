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
    async submit(value) {
      this.username = value.username;
      this.password = value.pwd;
      const response = await this.axios.get('http://localhost:3000/api/user/5bdf83e86326c030104f4ee5');
      this.username = response.data.user.name;
      window.sessionStorage.user = this.username;
      this.$router.push('Products');
    },
  },
};
</script>

<style lang="sass">
</style>
