<template>
  <div >
    <v-container fluid grid-list-sm class="py-3">
      <v-layout row wrap justify-center align-center fill-height class="mt-5">
        <v-flex  d-flex xs12 md9>
          <v-card :raised="true" :hover="true" >
             <v-slide-x-transition appear>
              <v-layout row wrap>
                <!-- Inputs -->
                <v-flex md8 xs12 >
                  <v-flex md6 xs12 class="mx-3 my-3 px-4">
                    <h4 class="text-md-left display-1 cyan--text text--darken-1">Vuetify</h4>
                    <h5 class="my-2 title font-weight-light text-md-left">Sign up in our platform</h5>
                  </v-flex>
                  <v-flex md12 xs12 class="mx-3 my-2 px-4">
                    <v-form v-model="valid">
                      <v-layout row wrap >
                        <v-flex md6 xs6 class="pr-3">
                          <v-text-field
                            v-model="name"
                            label="Name"
                            outline
                            :color="'cyan darken-1'"
                            type="text"
                            required
                          ></v-text-field>
                        </v-flex>
                        <v-flex md6 xs6 class="pl-3">
                          <v-text-field
                            v-model="lastName"
                            label="Last name"
                            outline
                            :color="'cyan darken-1'"
                            type="text"
                            required
                          ></v-text-field>
                        </v-flex>
                        <v-flex md12 xs12>
                          <v-text-field
                            v-model="email"
                            label="Email"
                            outline
                            :color="'cyan darken-1'"
                            type="text"
                            required
                          ></v-text-field>
                        </v-flex>
                        <v-flex md5 xs5 class="pr-3">
                          <v-text-field
                            v-model="password"
                            label="Password"
                            outline
                            :color="'cyan darken-1'"
                            :type="show1 ? 'text' : 'password'"
                            :rules="emailRules"
                            required
                          ></v-text-field>
                        </v-flex>
                        <v-flex md5 xs5 class="pl-3">
                          <v-text-field
                            v-model="confirmPassword"
                            label="Confirm password"
                            outline
                            :color="'cyan darken-1'"
                            :type="show1 ? 'text' : 'password'"
                            required
                          ></v-text-field>
                        </v-flex>
                        <v-flex md2 xs2>
                          <v-btn class="my-0 py-0" color="warning" fab flat @click="show1 = !show1">
                            <v-icon>{{show1 ? 'visibility' : 'visibility_off'}}</v-icon>
                          </v-btn>
                        </v-flex>
                        <p class="body-1 text-xs-left ml-1">Use minimum 8 characters between numbers and letters both lowercase and uppercase.</p>
                        <v-flex md6 xs12  sm6>
                          <v-btn class="ml-0 align-left"  to="/" flat left color="cyan darken-1" >Redirect to log in</v-btn>
                        </v-flex>
                        <v-flex md6 xs12 sm6>
                          <v-btn class="ml-0 align-right white--text" @click="register()" right color="cyan darken-1" >Create Account<v-icon right dark>person_add</v-icon></v-btn>
                        </v-flex>
                      </v-layout>
                    </v-form>
                  </v-flex>
                </v-flex>
                <!-- Image -->
                <v-flex md4 xs12 >
                    <v-card color="cyan darken-1" dark>
                      <v-card-text>Welcome to the Vuetify Framework</v-card-text>
                    </v-card>
                    <v-container fluid grid-list-lg>
                      <v-layout row wrap justify-center align-center fill-height>
                        <v-flex md12 class="mt-5">
                          <img src="../assets/apple-touch-icon-180x180.png" alt="" srcset="">
                        </v-flex >
                        <v-flex md12>
                          <h5 class="headline center-xs-left ">Vuetify</h5>
                          <p class="subheading font-weight-medium">A great front-end framework on Vuejs based.</p>
                        </v-flex>
                      </v-layout>
                    </v-container>
                </v-flex>
                  <v-flex md12 xs12>

                  </v-flex>
              </v-layout>
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
      name: '',
      lastName: '',
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
      confirmPassword: '',
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
          password: this.password,
          name: this.name,
          last_name: this.lastName
        })
        this.$router.push({ name: 'Login' })
      } catch (error) {
        if (error.response.data.key === 'email') {
          // this.errosInput.email.colorError = 'red'
          // this.errosInput.email.errorEmail = false
          // this.errosInput.email.message = error.response.data.error
          document.getElementById('email').focus()
        } else {
          // this.errosInput.password.colorError = 'red'
          // this.errosInput.password.errorEmail = false
          // this.errosInput.password.message = error.response.data.error
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
.align-left {
  left: -22%;
}
.align-right {
  left: 15.5%;
}
</style>
