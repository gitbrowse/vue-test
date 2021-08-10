<template>
  <div>
    <h1>APP</h1>
    <h2>
      route:
      <router-link class="link" to="/container/1">Container</router-link>
      <router-link class="link" to="/404">404</router-link>
    </h2>
    <h2>dynamic route:
      <span @click="jumpToContainer">Container</span>
      <span>404</span>
    </h2>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {},
  data() {
    return {
    }
  },
  mounted() {
  },
  methods: {
    jumpToContainer() {
      this.$router.push({
        name: 'container',
        query: {
          type: 3,
        }
      })
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.link {
  margin: 0 20px;
}
</style>
