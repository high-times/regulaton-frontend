<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-toolbar flat class="mb-10" color="transparent">
          <v-toolbar-title
            class="text-center full-width-title display-2 font-weight-black"
          >
            <v-img
              src="../../public/images/logo.png"
              max-height="85px"
              max-width="85px"
              class="img-middle-text logo-image"
            ></v-img>
            Regulaton</v-toolbar-title
          >
        </v-toolbar>
        <v-card-text>
          <v-form>
            <v-text-field
              v-model="name"
              label="Username"
              name="login"
              type="text"
            ></v-text-field>

            <v-text-field
              v-model="password"
              id="password"
              label="Password"
              name="password"
              type="password"
            ></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions class="justify-center">
          <v-btn min-width="90%" color="primary" @click="submit">Login</v-btn>
        </v-card-actions>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  name: "login",
  props: {
    source: String
  },
  data: () => ({
    drawer: null,
    name: "",
    password: ""
  }),
  methods: {
    submit() {
      console.log([this.name, this.password]);
      // Make a request for a user with a given ID
      axios
        .get("http://localhost:3002/login", {
          params: {
            username: this.name,
            password: this.password
          }
        })
        .then(function(response) {
          // handle success
          console.log(response);
        })
        .catch(function(error) {
          // handle error
          console.log(error);
        })
        .finally(function() {
          // always executed
        });
    }
  }
};
</script>

<style scoped>
.full-width-title {
  min-width: 100%;
}

.logo-image {
  animation: spin 3s ease-in-out;
}
.img-middle-text {
  vertical-align: middle;
  display: inline-block;
}

@keyframes spin {
  0% {
    transform: rotateZ(0);
  }
  100% {
    transform: rotateZ(360deg);
  }
}
</style>
