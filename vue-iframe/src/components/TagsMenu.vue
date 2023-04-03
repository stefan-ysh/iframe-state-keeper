<template>
  <div class="tags-menu">
    <div
      class="tags-menu-item"
      :class="{ 'tag-menu-active': idx === currentMenuIndex }"
      v-for="(item, idx) in tagList"
      :key="item.id"
      @click="handleClick(idx)"
    >
      {{ item.label }}
      <button
        v-if="$store.state.tagList.length !== 1"
        style="del-icon"
        @click="handleDel($event, item)"
        title="关闭"
      >
        x
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "TagsMenu",
  computed: {
    tagList() {
      return this.$store.state.tagList;
    },
    currentMenuIndex() {
      return this.$store.state.currentMenuIndex;
    },
  },
  methods: {
    handleClick(i) {
      this.$store.commit("changeCurrentTagIndex", i);
    },
    handleDel(event, item) {
      // 禁止冒泡
      event.stopPropagation();
      this.$store.commit("removeIframe", item);
    },
  },
};
</script>

<style>
.tags-menu {
  width: 100%;
  text-align: center;
  background: rgb(135, 176, 224);
  color: #fff;
  display: flex;
  padding: 10px 0 0 0;
}
.tags-menu-item {
  min-width: 100px;
  height: 30px;
  line-height: 30px;
  cursor: pointer;
  position: relative;
  margin: 0 5px;
  background-color: #2aa5ce;
  font-size: 13px;
  font-weight: bold;
  border-radius: 10px 10px 0 0;
  transition: all 0.3s;
  opacity: 0.7;
}
button {
  width: 15px;
  height: 15px;
  background: red;
  border: none;
  border-radius: 50%;
  display: none;
  position: absolute;
  line-height: 15px;
  right: 0;
  top: 15px;
  transform: translateY(-90%);
  cursor: pointer;
  color: #fff;
  font-size: 10px;
}
.tags-menu-item:hover {
  background: rgb(58, 104, 156);
}
.tags-menu-item:hover button {
  display: block;
}
.tag-menu-active {
  background: rgb(58, 104, 156);
  line-height: 25px;
  font-size: 15px;
  opacity: 1;
}
</style>
