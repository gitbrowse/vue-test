<template>
  <div>
    <h2>Container</h2>
<!--    <p>route: {{ $route.params.type }}</p>-->
<!--    <router-link class="link" to="cunter1">cunter1</router-link>-->
<!--    <router-link class="link" to="cunter2">cunter2</router-link>-->
<!--    <router-view></router-view>-->
    <counter1 ref="counter1A" :base-counter="baseCounter"></counter1>
    <counter1 ref="counter1B" :base-counter="baseCounter"></counter1>
    <counter2
        :base-counter="baseCounter"
        :count-obj="countObj"
        class="testClass"
        style="{display: block}"
        other="testOther"
        @click="() => {}"
        @test="()=>{}"
    >
      slot from container
      <template #header>slot header from container</template>
      <template v-slot:body>slot body from container</template>
    </counter2>
  </div>
</template>

<script>
import  Counter1 from './Counter1';
import  Counter2 from './Counter2';

export default {
  name: 'Container',
  components: {
    Counter1,
    Counter2,
  },
  data() {
    return {
      baseCounter: 100,
      countObj: {
        count: 100,
      }
    }
  },
  beforeRouteUpdate(to, from,
                    // next
  ) {
    console.log('to-from', to, from)
    // next()
  },
  mounted() {

    // console.log('counter1A', this.$refs.counter1A);
    // console.log('counter1B', this.$refs.counter1B);
    console.log('this.$route', this.$route);
    setInterval(() => {
      // this.baseCounter++;
    }, 1000)
  },
}
</script>
