<template>
  <p>count: {{ counter }}</p>
  <button @click="add">add count</button>
  <p>number {{ state.number }}</p>
  <button @click="addNumber">add number</button>
  <p>shareCount {{ sharedCount }}</p>
  <button @click="addSharedCount">add sharedCount</button>
  <p>goods {{ goods }}</p>
  <button @click="setGoods">add sharedCount</button>
  <p>-------------------------------count1 end-------------------------------</p>
</template>

<script>
import test1 from '../json/test.json'
import { test2 } from '../js/test.js';
import simpleStore from '../simpleStore/simpleStore'
import {
  mapState,
  mapGetters,
  // mapMutations,
} from 'vuex';
import { ADD_SHARED_COUNT } from '../store';

// console.log('test2', test2);

export default {
  name: 'counter1',
  props: {
    baseCounter: Number,
  },
  data() {
    return {
      counter: 0,
      test1,
      test2,
      state: simpleStore.state,
    };
  },
  computed: {
    ...mapState(['sharedCount', 'goods']),
    ...mapGetters(['getCount']),
  },
  // beforeUpdate() {
  //   console.log('beforeUpdate');
  // },
  // updated() {
  //   console.log('updated');
  // },
  // renderTriggered() {
  //   console.log('renderTriggered');
  // },
  // renderTracked() {
  //   console.log('renderTracked');
  // },
  mounted() {
    // console.log(this.$data);
    // console.log('this: ', this);

  },
  methods: {
    add() {
      this.counter++;
    },
    addNumber() {
      this.setNumberAction(this.state.number + 1);
    },
    addSharedCount() {
      // this[ADD_SHARED_COUNT]();
      this.$store.commit(ADD_SHARED_COUNT);
      // store.commit('addSharedCount');
    },
    setGoods() {
      this.$store.dispatch('fetchGoods');
    },
    // ...mapMutations([ADD_SHARED_COUNT]),
    ...simpleStore.actions,
  }
}
</script>

<style scoped>

</style>