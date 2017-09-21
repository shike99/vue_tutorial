// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Hello from './components/Hello';

Vue.config.productionTip = false;

/* eslint-disable no-new */
Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>',
});

new Vue({
  el: '#app',
  data: {
    message: 'message',
    message2: `You loaded this page on ${new Date().toLocaleString()}`,
    seen: true,
    groceryList: [
      { id: 0, text: 'Vegetables' },
      { id: 1, text: 'Cheese' },
      { id: 2, text: 'Whatever else humans are supposed to eat' },
    ],
    name: 'orange',
    price: 200,
  },
  methods: {
    reverseMessage() {
      this.message = this.message.split('').reverse().join('');
    },
  },
  components: {
    Hello,
  },
  computed: {
    priceWithTax() {
      return this.price * 1.08;
    },
    isValid() {
      return this.message.length > 0;
    },
  },
});
