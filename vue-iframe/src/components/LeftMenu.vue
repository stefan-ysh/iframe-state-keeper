<template>
  <div class="left-menu">
    <div
      class="left-menu-item"
      v-for="item in menuList"
      :class="{
        active: item.id === tagList[currentMenuIndex].id,
      }"
      :key="item.id"
      @click="handleClick(item)"
    >
      {{ item.label }}
    </div>
  </div>
</template>

<script>
export default {
  name: "LeftMenu",
  data() {
    return {
      menuList: [
        { id: 1, label: "首页" },
        { id: 2, label: "用户管理" },
        { id: 3, label: "角色管理" },
        { id: 4, label: "权限管理" },
        { id: 5, label: "商品管理" },
        { id: 6, label: "订单管理" },
        { id: 7, label: "数据统计" },
        { id: 8, label: "活动管理" },
        { id: 9, label: "广告管理" },
        { id: 10, label: "系统设置" },
      ],
    };
  },
  computed: {
    tagList() {
      return this.$store.state.tagList;
    },
    currentMenuIndex() {
      return this.$store.state.currentMenuIndex;
    },
  },
  created() {
    this.handleClick(this.menuList[0]);
  },
  methods: {
    handleClick(menu) {
      this.$store.commit("addTagMenu", menu);
    },
  },
};
</script>

<style>
.left-menu {
  width: 200px;
  height: 100vh;
  background: rgb(82, 151, 226);
}
.left-menu-item {
  height: 50px;
  line-height: 50px;
  margin: 5px 0;
  text-align: center;
  color: #fff;
  cursor: pointer;
}
.left-menu-item:hover {
  background: rgb(58, 104, 156);
}
.left-menu-item.active {
  background: rgb(58, 104, 156);
}
</style>
