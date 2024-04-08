<template>
  <div>
    <!-- <NuxtWelcome /> -->
    <!-- Nuxt基于文件的路由系统 -->

    <!-- 首页 index/index.vue -->
    <NuxtLink to="/">点我去首页</NuxtLink>
    <!-- about页  about/index.vue -->
    <NuxtLink to="/about">点我去about页</NuxtLink>
    
    <!-- Nuxt 页面路由，相当于RouterView -->
    <NuxtPage/>
    
  </div>
</template>
