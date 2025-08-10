import Vue from 'vue'
import { Buffer } from 'buffer'

Vue.prototype.$btoa = (text) =>
  (typeof window !== 'undefined' && typeof window.btoa === 'function')
    ? window.btoa(text)
    : Buffer.from(text, 'utf-8').toString('base64')

Vue.prototype.$atob = (base64) =>
  (typeof window !== 'undefined' && typeof window.atob === 'function')
    ? window.atob(base64)
    : Buffer.from(base64, 'base64').toString('utf-8')
