<template>
  <v-app>

    <Login v-if="!$store.getters.userLoggedIn"></Login>

    <AppMain :user-loggedin="$store.getters.userLoggedIn"/>

  </v-app>
</template>

<script>

  import Login from "./views/Login";
  import AppMain from "./AppMain";

  export default {
  name: 'App',
  components: {AppMain, Login},
  data: () => ({

  }),
};
</script>
