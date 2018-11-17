<template>
  <div>
    <form>
      <div class="card">
        <div class="card-body">
          <h2 class="card-title">Introduce usuario y contraseña</h2>
        </div>
        <div class="form-group">
          <label for="InputUsername">Username</label>
          <input
            v-model="username"
            type="text"
            class="form-control"
            id="InputUsername"
          >
          <label for="InputPassword">Password </label>
          <input
            v-model="password"
            type="password"
            class="form-control"
            id="InputPassword"
          >
          <div v-if="registerMode">
          <label for="InputConfirmPassword">Confirm password </label>
            <input
              v-model="passwordConfirm"
              type="password"
              class="form-control"
              id="InputConfirmPassword"
            >
          </div>
        </div>
      </div>
      <button type="Submit" class="btn btn-success ribbon">Submit</button>
    </form>
    <button
      type="button"
      class="btn btn-primary"
      @click="toggleRegisterMode"
    >{{registerModeString}}</button>
  </div>
</template>

<script>
export default {
  name: 'SignForm',
  props: {
    username: {
      type: String,
      default: '',
    },
    password: {
      type: String,
      default: '',
    },
    passwordConfirm: {
      type: String,
      default: '',
    },
    registerMode: {
      type: Boolean,
      default: false,
    },
    registerModeString: {
      type: String,
      default: 'SignUp',
    },
  },
  methods: {
    toggleRegisterMode() {
      this.registerMode = !this.registerMode;
      if (this.registerMode === false) this.registerModeString = 'SignUp';
      else this.registerModeString = 'SignIn';
    },
  },
};
</script>
