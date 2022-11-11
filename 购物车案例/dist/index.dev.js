"use strict";

var app = new Vue({
  el: '#app',
  data: function data() {
    return {
      list: [{
        id: '1',
        name: 'iphone',
        price: 1999,
        count: 1
      }, {
        id: '2',
        name: 'huawei',
        price: 1999,
        count: 1
      }, {
        id: '3',
        name: 'xiaomi',
        price: 1999,
        count: 1
      }]
    };
  },
  computed: {},
  mounted: function mounted() {},
  created: function created() {}
});