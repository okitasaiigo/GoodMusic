import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
	  topListIds : [],
	  nextId : ''
	},
	mutations: {
	  INIT_TOPLISTIDS(state,payload){
		  state.topListIds = payload;
	  },
	  NEXT_ID(state,payload){
		  for(var i=0;i<state.topListIds.length;i++){
			  if( state.topListIds[i].id == payload ){//有一个bug如果点到最后一首歌就无法存储了
				  state.nextId = state.topListIds[i+1].id;
			  }
		  }
	  }
	}
});