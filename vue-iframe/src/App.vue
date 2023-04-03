<template>
  <div id="app">
    <LeftMenu class="left" />
    <div class="right">
      <TagsMenu />
      <Content />
    </div>
  </div>
</template>

<script>
import LeftMenu from "./components/LeftMenu.vue";
import TagsMenu from "./components/TagsMenu.vue";
import Content from "./components/Content.vue";

export default {
  name: "App",
  components: {
    TagsMenu,
    LeftMenu,
    Content,
  },
};
</script>

<style>
#app {
  display: flex;
  padding: 0;
  margin: 0;
}
#app .left {
  width: 200px;
  height: 100vh;
  color: aqua;
}
#app .right {
  width: 100%;
  height: 100vh;
}
</style>
