import App from './App'

// #ifndef VUE3
import Vue from 'vue'
import store from 'store/index.js'
Vue.config.productionTip = false
App.mpType = 'app'

Vue.filter('formatCount',function(value){//播放量过滤器
	if( value >= 10000 && value <= 100000000){
		value /= 1000;
		return value.toFixed(1) + '万';//保留一位小数
	}else if(value > 100000000){
		value /= 100000000;
		return value.toFixed(1) + '亿';
	}else{
		return value;
	}
})

Vue.filter('formatTime',function(value){
	var date = new Date(value);
	return date.getFullYear() + '年' + (date.getMonth() + 1) + '月' + date.getDate() + '日';
})

const app = new Vue({
    ...App,
	store
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif