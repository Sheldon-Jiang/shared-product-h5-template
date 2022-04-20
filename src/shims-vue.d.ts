/*
 * @Author: sheldonJiang
 * @Date: 2022-04-20 19:15:13
 * @Last Modified by: sheldonJiang
 * @Last Modified time: 2022-04-20 19:51:14
 */
/* eslint-disable */

/**
 * shims-vue.d.ts的作用
 * 为了 typescript 做的适配定义文件，因为.vue 文件不是一个常规的文件类型，ts 是不能理解 vue 文件是干嘛的，
 * 加这一段是是告诉 ts，vue 文件是这种类型的。
 * 可以把这一段删除，会发现 import 的所有 vue 类型的文件都会报错。
 */
 declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
