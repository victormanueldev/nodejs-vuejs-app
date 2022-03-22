<template>
  <div class="background-login">
    <v-container fluid class="py-5">
      <v-layout row justify-center align-center fill-height class="mt-5">
        <v-flex xs12 sm4 >
          <v-card :raised="true" :hover="true" >
            <v-progress-linear :indeterminate="true" :color="'cyan darken-1'" :active="loader"></v-progress-linear>
            <v-avatar
              :tile="false"
              :size="80"
              class="logo"
            >
              <img src="../assets/apple-touch-icon-180x180.png" alt="avatar">
            </v-avatar>
            <v-card-title primary-title class="title-align">
                <div><h3 class="headline mb-0" >Welcome!</h3>
                <p class="mt-2 mb-0">{{ $route.params.email }}</p></div>
            </v-card-title>
            <v-slide-x-transition appear>
              <v-card-text >
                <v-form v-model="valid">
                  <v-flex xs12 sm12 md12>
                    <v-text-field
                      v-model="password"
                      label="Password"
                      outline
                      :append-icon="show1 ? 'visibility_off' : 'visibility'"
                      :type="show1 ? 'text' : 'password'"
                      @click:append="show1 = !show1"
                      :color="'cyan darken-1'"
                      :rules="passwordRules"
                    ></v-text-field>
                  </v-flex>
                  <v-layout row justify-center>
                    <v-flex md6 sm12 xs12 align-right>
                    </v-flex>
                      <v-btn  class="ml-0 left-align" to="/" flat right color="cyan darken-1" :dark="false"><v-icon left light>arrow_back</v-icon>Back</v-btn>
                    <v-flex md6 xs12 sm12 >
                    </v-flex>
                      <v-btn class="white--text" @click="login" center color="cyan darken-1" :disabled="!valid" :dark="false">Start Session<v-icon right dark>account_circle</v-icon></v-btn>
                  </v-layout>
                </v-form>
              </v-card-text>
            </v-slide-x-transition>
          </v-card>
        </v-flex>
    </v-layout>
    <v-layout row justify-center align-center >
          <v-flex md2>
              <p class="mt-3 text-xs-left " >Vuetify</p>
          </v-flex>
          <v-flex md2>
            <p class="mt-3 text-xs-right white--text" >VMA &copy; 2018</p>
          </v-flex>
    </v-layout>
  </v-container>
  <v-snackbar
    v-model="snackbar"
    :bottom="true"
    :timeout="6000"
  >
    {{ errorResponse }}
    <v-btn
      color="cyan"
      flat
      @click="snackbar = false"
    >
      Close
    </v-btn>
  </v-snackbar>
  </div>
</template>

<script>
import AuthService from '@/services/AuthService'
export default {
  data () {
    return {
      password: '',
      passwordRules: [
        v => !!v || 'Password is required',
        v => v.length >= 8 || 'Password must be minimum 8 characters'
      ],
      show1: false,
      valid: true,
      errorResponse: '',
      loader: false
    }
  },
  created () {
    console.log(this.$route.params)
  },
  methods: {
    async login () {
      this.loader = true
      try {
        const response = await AuthService.login({
          email: this.$route.params.email,
          password: this.password
        })
        this.loader = false
        this.errorResponse = `Bienvenido ${response.data.name} ${response.data.last_name}!`
        this.snackbar = true
      } catch (error) {
        this.loader = false
        this.errorResponse = error.response.data.error
        this.snackbar = true
        this.password = ''
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: bold;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.err {
  color: red;
}
.logo {
  margin-top: 30px;
}
.title-align {
  justify-content: center;
}
.left-align {
  left: -11%;
}
</style>
