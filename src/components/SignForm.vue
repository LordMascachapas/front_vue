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
            name="username"
            type="text"
            class="form-control"
            id="InputUsername"
          >
          <label for="InputPassword">Password </label>
          <input
            v-model="password"
            name="password"
            type="password"
            class="form-control"
            id="InputPassword"
          >
          <div v-if="registerMode">
          <label for="InputConfirmPassword">Confirm password </label>
            <input
              v-model="passwordConfirm"
              name="passwordConfirm"
              type="password"
              class="form-control"
              id="InputConfirmPassword"
            >
          </div>
        </div>
      </div>
      <button
        type="button"
        class="btn btn-success ribbon"
        @click="sendData"
      >Submit</button>
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
  data() {
    return {
      registerModeString: 'SignUp',
      passwordConfirm: '',
      registerMode: false,
    };
  },
  props: {
    username: {
      type: String,
      default: '',
    },
    password: {
      type: String,
      default: '',
    },
  },
  methods: {
    toggleRegisterMode() {
      this.registerMode = !this.registerMode;
      if (this.registerMode === false) this.registerModeString = 'SignUp';
      else this.registerModeString = 'SignIn';
    },
    sendData() {
      if (this.registerMode === false) {
        this.$emit('dataLogin', {
          username: this.username,
          pwd: this.password,
        });
      } else
      if (this.passwordConfirm === this.password) {
        this.$emit('dataRegist', {
          username: this.username,
          pwd: this.password,
        });
      } else alert('Error confirmando contrasena');
    },
  },
};
</script>
