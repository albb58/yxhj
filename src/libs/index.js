import Vue from 'vue'

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

import ajax from '@util/axios'


Vue.use(VueAwesomeSwiper)

Vue.prototype.$http = ajax