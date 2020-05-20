<template>
  <div class="container">
    <div class="request">
      Don't have a Design+Code HQ account?
      <router-link to="/request">Request an account</router-link>
    </div>
    <div class="login">
      <img src="@/assets/DCHQ.svg" alt="logo" />
      <h4>Sign into Design+Code HQ</h4>
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button>Sign In</button>
      <router-link to="/recover">Forgotten your password</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SignIn',
  data() {
    return {
      logo: '@/assets/DCHQ.svg'
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/global-styles/colors.scss';
.container {
  display: flex;
  justify-content: center;
  align-items: center;

  min-height: 100vh;
}

.login {
  width: 400px;
}

.request {
  position: absolute;
  top: 40px;
  right: 40px;

  color: rgba(255, 255, 255, 0.3);

  a {
    color: $white;
  }
}

h4 {
  margin: 0;
  line-height: 34px;
  text-align: center;
  color: #ffffff;
}
input {
  height: 60px;
  width: 100%;

  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-sizing: border-box;
  border-radius: 4px;

  font-size: 20px;
  color: $white;
  padding-left: 20px;
  margin-top: 20px;

  &::placeholder {
    color: rgba(255, 255, 255, 0.3);
  }
}

button {
  height: 60px;
  width: 100%;
  border: none;

  background: #56ccf2;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  margin-top: 20px;

  font-size: 20px;
  color: $white;
  margin-bottom: 40px;
}

a {
  font-size: 16px;
  line-height: 25px;
  text-align: center;

  color: rgba(255, 255, 255, 0.3);
  text-decoration: none;
}
</style>
