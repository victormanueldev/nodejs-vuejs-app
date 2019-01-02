// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'

Vue.config.productionTip = false
Vue.use(Vuetify, {
  iconfont: 'mdi'
})

//  Modify CSS lines
//  Comment transition:
//    .v-text-field--outline.v-input--is-focused > .v-input__control > .v-input__slot,
//    .v-text-field--outline.v-input--has-state > .v-input__control > .v-input__slot
//  border inputs 1px   .theme--light.v-text-field--outline > .v-input__control > .v-input__slot
//  opacity border 0.32 .theme--light.v-text-field--outline:not(.v-input--is-focused):not(.v-input--has-state) > .v-input__control > .v-input__slot:hover

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
