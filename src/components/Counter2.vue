<template>
  <div>
    <div>
      <p>count: {{ counter }}</p>
      <button @click="add">add</button>
      <button @click="reduce">reduce</button>
      <p>result: {{ result }}</p>
    </div>
    <div>
      <p>react: {{ react }} </p>
      <button @click="add2">add2</button>
      <p>read: {{ typeof read }}</p>
    </div>
    <p>countObj.count: {{ baseCounter }}</p>
    <p>countObj.count: {{ countObj2 }}</p>
    <p><slot></slot></p>
    <p><slot name="header"></slot></p>
    <p><slot name="body"></slot></p>
  </div>
</template>

<script>
import {
  ref,
  onMounted,
  // watch,
  computed,
  watchEffect,
  // reactive,
  // isReactive,
  readonly,
  shallowReactive,
  // markRaw,
  // isProxy,
  toRefs
  // toRef,
} from 'vue';

export default {
  name: 'Counter2',
  props: {
    baseCounter: Number,
    countObj: Object,
    other: String,
    class: String,
  },
  setup(props) {
    // eslint-disable-next-line
    const { baseCounter } = toRefs(props);
    // const { countObj } = props;
    const countObj2 = baseCounter;

    // const a = {a: {aa: 1}}
    const counter = ref(1);
    const counter2 = ref(1);
    const result = computed(() => Math.pow(counter.value, 2));
    let react = shallowReactive(1);
    let read = readonly(counter);
    const add = () => {
      counter.value += 2;
      Promise.resolve().then(() => {
        console.log('Promise.resolve');
        counter2.value += 2;
      })
    }
    const add2 = () => {
      react++;
    }

    onMounted(function() {
      // console.log('counter2 onMounted');
      // counter.value = Math.floor(Math.random() * 10);
    })

    // Promise.resolve().then(() => {
    //   console.log('promise1');
    // })

    watchEffect(() => {
      // console.log('from watchEffect: counter', counter.value)
      // console.log('from watchEffect: counter2', counter2.value)
    })

    // Promise.resolve().then(() => {
    //   console.log('promise2');
    // })

    // watch(counter, (newVal, oldVal) => {
      // console.log('newVal:', newVal);
      // console.log('oldVal:', oldVal);
    // })

    // Promise.resolve().then(() => {
    //   console.log('promise3');
    // })

    // counter.value += 2;
    // counter2.value += 3;



    return {
      counter,
      react,
      result,
      read,
      add,
      add2,
      countObj2,
    }
  },
  mounted() {
  },
  methods: {
    reduce() {
      this.counter--;
    }
  }
}
</script>

<style scoped>

</style>