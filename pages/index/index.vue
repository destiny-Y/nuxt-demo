<template>
  <div>
    我是首页
  </div>
</template>
<script lang='ts' setup>
  import baseService from "@/service/baseService";

  // 通过useFetch获取自己模拟的数据
  const res = await useFetch("/api/channel");
  console.log(res);

  baseService.get("/view/wschannelView/channelList").then((res) => {
    console.log(res);
    
  })
</script>
<style scoped></style>