<template>
  <v-app>

    <login v-if="!userLoggedin"></login>

    <Navbar v-if="userLoggedin"></Navbar>

    <v-content v-if="userLoggedin">
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>

  import Navbar from "./components/Navbar";
  import login from "./views/login";

  export default {
  name: 'App',

  components: {Navbar, login},
  data: () => ({
    userLoggedin:false
  }),
};
</script>
