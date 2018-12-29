<template>
  <div class="background-login">
    <v-container fluid>
      <v-layout row justify-center align-center fill-height class="mt-5">
        <v-flex xs12 sm4 >
          <v-card :raised="true" :hover="true" >
            <v-avatar
              :tile="false"
              :size="80"
              class="logo"
            >
              <img src="../assets/apple-touch-icon-180x180.png" alt="avatar">
            </v-avatar>
            <v-card-title primary-title class="title-align">
                <div><h3 class="headline mb-0" >Login</h3>
                <p class="mt-2 mb-0">Submit your credentials</p></div>
            </v-card-title>
            <v-slide-x-transition appear>
              <v-card-text  v-show="true">
                <v-form v-model="valid">
                  <v-flex xs12 sm12 md12>
                      <v-text-field
                        v-model="email"
                        label="Email"
                        outline
                        :color="'cyan darken-1'"
                        type="text"
                        append-icon="email"
                        :rules="emailRules"
                        required
                      ></v-text-field>
                  </v-flex>
                  <v-layout row justify-center align-center>
                    <v-flex md6 sm12 xs12 align-right>
                      <v-btn class="ml-0 " to="/register" flat right color="cyan darken-1">Create Account</v-btn>
                    </v-flex>
                    <v-flex md6 xs12 sm12 >
                      <v-btn  @click="register" left color="cyan darken-1" :disabled="!valid" :dark="true" class="left-align">Next<v-icon right dark>arrow_forward</v-icon></v-btn>
                    </v-flex>
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
  </div>
</template>

<script>
import AuthService from '@/services/AuthService'
export default {
  data () {
    return {
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
      ],
      password: '',
      passwordRules: [
        v => !!v || 'Password is required',
        v => v.length >= 8 || 'Password must be minimum 8 characters'
      ],
      show: true,
      show1: false,
      valid: true
    }
  },
  created () {
    setTimeout(() => { window.location.href = '/#/password' }, 1000)
  },
  methods: {
    async register () {
      try {
        await AuthService.register({
          email: this.email,
          password: this.password
        })
      } catch (error) {
        console.log(error)
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
  left: 21%;
}
</style>
