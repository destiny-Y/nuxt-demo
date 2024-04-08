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

<script setup lang="ts">
  /**
   * 网站配置(主要是利于SEO)
   *  title:网站的标题
   *  description:网站的描述
   *  keywords:网站关键字
   */
  useSeoMeta({
    title:"重庆市红十字会",
    description:"重庆市红十字会官网",
    keywords:"重庆市,红十字会,政府,救护"

  })
</script>
<style>

</style>

