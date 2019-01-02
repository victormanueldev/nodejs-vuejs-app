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
                <div><h3 class="headline mb-0" >Login</h3>
                <p class="mt-2 mb-0">Submit your credentials</p></div>
            </v-card-title>
            <v-slide-x-transition appear>
              <v-card-text >
                <v-form v-model="valid">
                  <v-flex xs12 sm12 md12>
                      <v-text-field
                        v-model="email"
                        label="Email"
                        outline
                        :color="'cyan darken-1'"
                        type="text"
                        append-icon="email"
                        :rules="[emailRules.validation1, emailRules.validation2]"
                        required
                        @update="error(false)"
                      ></v-text-field>
                  </v-flex>
                  <v-layout row justify-center align-center>
                    <v-flex md6 sm12 xs12 align-right>
                      <v-btn class="ml-0 "  to="/register" flat right color="cyan darken-1">Create Account</v-btn>
                    </v-flex>
                    <v-flex md6 xs12 sm12 >
                      <v-btn  @click="searchEmail" left color="cyan darken-1" :disabled="!valid" :dark="false" class="right-align white--text">Next<v-icon right dark>arrow_forward</v-icon></v-btn>
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
      err: false,
      email: '',
      emailRules: {
        validation1: v => !!v || 'E-mail is required',
        validation2: v => /.+@.+/.test(v) || 'E-mail must be valid'
      },
      show1: false,
      valid: true,
      loader: false,
      snackbar: false,
      errorResponse: ''
    }
  },
  created () {},
  methods: {
    async searchEmail () {
      this.loader = true
      try {
        const res = await AuthService.findEmail({
          email: this.email
        })
        console.log(res)
        this.$router.push({name: 'password', params: {email: res.data.email}})
      } catch (error) {
        this.loader = false
        this.errorResponse = error.response.data.error
        this.snackbar = true
        this.email = ''
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
.right-align {
  left: 21%;
}
</style>
