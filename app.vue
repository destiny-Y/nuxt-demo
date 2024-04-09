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
<style scoped lang="less">
/**
  头部logo start
 */
 .logo-bar {
  box-sizing: border-box;
  height: 170px;
  display: flex;
  align-items: center;
  overflow: hidden;
}
.logo-bar > div {
  flex: 1;
}
.logo-left {
  display: flex;
  align-items: center;
  overflow: hidden;
}
.logo-center {
  height: 80px;
}
.logo-center img {
  width: 100%;
  height: 100%;
}
.logo-right {
  box-sizing: border-box;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  overflow: hidden;
}
:deep(.logo-right) .el-input {
  width: 260px;
  height: 40px;
}
:deep(.logo-right) .el-input__wrapper {
  border-radius: 20px 0 0 20px;
}
.logo-right .btn {
  width: 60px;
  height: 40px;
  text-align: center;
  background: #bb2b32;
  border-radius: 0 20px 20px 0;
}
.logo-right .btn img {
  width: 24px;
  height: 24px;
  margin: 8px 0;
}
/**
  头部logo end
 */
/**
  头部导航条 start
 */
.nav-box {
  background: #bb2b32;
  height: 48px;
  position: relative;
}
.nav-bar {
  box-sizing: border-box;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  /* overflow: hidden; */
}
.nav-bar > div {
  flex: 1;
  color: #fff;
  font-size: 20px;
  font-weight: 700;
  padding: 3px 0;
  border-right: 1px solid #bbbbbb;
  cursor: pointer;
}
.nav-bar > div:last-child {
  border-right: none;
}
.nav-bar .nav-item {
  /**
    这里的定位暂时先注释掉否则会导致下拉菜单的样式错乱，但是白色小三角的样式会出错，后续再修改
  */
  // position: relative;
  .drop-down-box{
    width: 100%;
    // height: 70px;
    height: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 0;
    top:48px;
    background-color: rgba(255, 255, 255, 0.5);
    z-index: 999;
    overflow: hidden;
    transition: all .5s;
    .drop-down-item{
      padding: 20px 15px;
      font-size: 16px;
      font-weight: 600;
      cursor: pointer;
      // z-index: 999;
    }
  }
  &:hover .drop-down-box{
    cursor: pointer;
    // min-height: 70px;
    // height: auto;
    height: 70px;
    // transition: height .5s;
  }
}
/* 头部导航栏被点击后下方出现的白色小三角，使用伪元素来实现 */
.nav-bar .nav-item.active::after {
  position: absolute;
  display: block;
  content: "";
  left: 50%;
  width: 0;
  height: 0;
  line-height: 0;
  font-size: 0;
  padding-top: 8px;
  border-color: transparent transparent #fff;
  border-style: solid;
  border-width: 0 5px 5px;
  transform: translateX(-50%);
  z-index: 999;
}
/**
  头部导航条 end
 */
 /* 头部下拉框 */
/* .header{
  .drop-down-box{
    width: 100%;
    position: absolute;
    z-index: 999;
    background-color: rgba(255, 255, 255, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    height: 0px;
    overflow: hidden;
    transition: height 0.5s;
    .drop-down-item{
      padding: 20px 15px;
      font-size: 16px;
      font-weight: 600;
      cursor: pointer;
      &:hover{
        color: #bb2b32;
      }
    }
  }
} */
/**
  底部 start
*/
.footer{
  position: relative;
  // 底部下拉框
  .footer-drop-box{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 0px;
    position: absolute;
    bottom: 308px;
    z-index: 999;
    background-color: #e5e5e5;
    overflow: hidden;
    // 过渡动画添加
    transition: all 0.5s;
    .box-container{
      width: 1200px;
      display: flex;
      align-items: center;
      justify-content: start; 
      flex-wrap:wrap;
      .drop-down-item{
        white-space: nowrap;
        padding: 20px;
        font-size: 16px;
        font-weight: 600;
        a{
         color: #000;
         &:hover{
          cursor: pointer;
          color: #bb2b32;
          }
        }  
      }   
    }
  }
}
/* .bottom-nav .parent {
  // position: relative;
  // width: 100%;
  .nav-child{
    // position: absolute;
    // left: 0;
  }
  .child {

  }
} */
.bottom-nav {
  position: relative;
}
.bottom-nav > div {
  flex: none;
}
.bottom-nav .nav-item {
  padding-left: 30px;
  padding-right: 30px;
  // width: 100%;
  box-sizing: content-box;
}
.bottom-nav .nav-item > p {
  color: #fff;
}
.bottom-nav .nav-child {
  width: 1200px;
  position: absolute;
  display: flex;
  top: -10px;
  justify-content: center;
  align-items: center;
  background-color: #e5e5e5;
  z-index: 999;
}
/* .bottom-nav .nav-child > div {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 15px auto;
  padding: 10px 0;
} */
.all-box {
  height: 200px;
}
.all-bar {
  box-sizing: border-box;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
.all-bar .left,
.all-bar .right {
  flex: 1;
}
.small-nav {
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
.small-nav .item {
  flex: 1;
}
.small-nav .item > p {
  width: 100%;
  text-align: center;
  border-right: 1px solid #efefef;
  cursor: pointer;
}
.small-nav .item > p:hover {
  text-decoration: underline;
  color: #bb2b32;
}
.padding15 {
  padding: 15px 0;
}
.footer-box {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  padding-left: 18px;
  overflow: hidden;
}
.footer-box .inline-block {
  margin-right: 40px;
}
.all-bar .right {
  text-align: right;
}
.right img {
  display: inline-block;
  width: 100px;
  height: 100px;
}
.icp-bar {
  height: 60px;
  line-height: 60px;
  text-align: center;
  font-size: 14px;
  background: #2c2c2c;
}
.icp-bar p {
  color: #999;
}
/**
  底部 end
*/
</style>

