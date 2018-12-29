<template>
  <div >
    <v-container fluid>
      <v-layout row justify-center align-center fill-height>
        <v-flex xs12 sm4>
          <v-card>
            <v-avatar
              :tile="false"
              :size="80"
              class="logo"
            >
              <img src="../assets/apple-touch-icon-180x180.png" alt="avatar">
            </v-avatar>
            <v-card-title primary-title class="title-align">
                <div><h3 class="headline mb-0" >Register</h3>
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
                        :rules="emailRules"
                        required
                      ></v-text-field>
                  </v-flex>
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
                  <v-layout row justify-center align-center>
                    <v-flex md6 sm12 xs12 align-right>
                      <v-btn class="ml-0 " to="/register" flat right color="cyan darken-1">Create Account</v-btn>
                    </v-flex>
                    <v-flex md6 xs12 sm12 >
                      <v-btn  @click="register" left color="cyan darken-1" :disabled="!valid" :dark="true">Start Session<v-icon right dark>account_circle</v-icon></v-btn>
                    </v-flex>
                  </v-layout>
                </v-form>
              </v-card-text>
            </v-slide-x-transition>
          </v-card>
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
  methods: {
    async register () {
      try {
        await AuthService.register({
          email: this.email,
          password: this.password
        })
      } catch (error) {
        if (error.response.data.key === 'email') {
          this.errosInput.email.colorError = 'red'
          this.errosInput.email.errorEmail = false
          this.errosInput.email.message = error.response.data.error
          document.getElementById('email').focus()
        } else {
          this.errosInput.password.colorError = 'red'
          this.errosInput.password.errorEmail = false
          this.errosInput.password.message = error.response.data.error
        }
        this.error = error.response.data.error
      }
    },
    func () {
      console.log(12345364)
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
</style>
