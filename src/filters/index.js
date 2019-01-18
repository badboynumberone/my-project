import Vue from 'vue'
Vue.filter('',function(value, formatStr='YYYY-MM-DD HH:mm:ss'){
    return value*2;
});
