import Container from "./components/Container";
import Counter1 from "./components/Counter1";
import Counter2 from "./components/Counter2";
import TestComponent from "./components/TestComponent";
import NotFound from "./components/NotFound";
import {createRouter, createWebHashHistory} from "vue-router";

const routes = [
  {
    name: 'container',
    path: '/container/:type',
    component: Container,
    children: [
      { name: 'cunter1', path: 'cunter1', component: Counter1 },
      { name: 'cunter2', path: 'cunter2', component: Counter2 },
    ]
  }, // A嵌套路由
  { name: 'test3', path: '/test1/test2/test3', component: TestComponent }, // B非嵌套路由（普通路由）
  { name: '404', path: '/404', component: NotFound }, // C普通路由
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router;