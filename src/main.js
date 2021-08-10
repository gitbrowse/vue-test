import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
import store from "./store";

const app = createApp(App);

app.mixin({
  created() {
    // console.log('componentName', this.$options.name)
  }
})

app.use(store);
app.use(router);

app.mount('#app');