export const ADD_SHARED_COUNT = 'ADD_SHARED_COUNT';
export const SET_SHARED_COUNT = 'SET_SHARED_COUNT';
export const SET_GOODS = 'SET_GOODS';


import { createStore } from "vuex";

const store = createStore({
  state:{
    sharedCount: 0,
    goods: {},
  },
  getters: {
    getCount: (state) => state.sharedCount + 1,
  },
  mutations: {
    [ADD_SHARED_COUNT](state) {
      state.sharedCount++;
    },
    [SET_SHARED_COUNT](state, payload) {
      state.sharedCount += payload.value;
    },
    [SET_GOODS](state, payload) {
      console.log(payload.value);
      if (state.goods && state.goods.x) {
        state.goods.x++;
      } else {
        state.goods = payload.value;
      }
    }
  },
  actions: {
    async fetchGoods(context) {
      await import('./json/test.json').then(res => {
        context.commit(SET_GOODS, { value: res.default });
      });
      context.commit(SET_SHARED_COUNT, { value: context.state.goods.x });
    }
  }
})

export default store;