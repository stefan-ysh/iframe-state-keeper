import Vuex from "vuex";

const state = {
  currentMenuIndex: 0,
  tagList: [
    { id: 1, label: "首页" },
    { id: 2, label: "用户管理" },
    { id: 3, label: "角色管理" },
    { id: 4, label: "权限管理" },
    { id: 5, label: "商品管理" },
    { id: 6, label: "订单管理" },
    { id: 7, label: "数据统计" },
    { id: 8, label: "活动管理" },
  ],
};

const mutations = {
  // 增加 tag menu
  addTagMenu(state, menu) {
    // 如果当前menu种存在，就不添加，但是将 currentMenuIndex 改为当前的 menu
    // 如果能查找到当前menu 的 id，就返回当前 menu 在 tagList 中的下标，否则返回 -1
    const isExist = state.tagList.findIndex((item) => item.id === menu.id);
    if (isExist >= 0) {
      state.currentMenuIndex = isExist;
    } else {
      state.tagList.push(menu);
      state.currentMenuIndex = state.tagList.length - 1;
    }
  },

  // 删除 iframe,同时删除 tag menu
  removeIframe(state, tagMenu) {
    // 设置删除项在 tagList 中的下标
    const delIndex = state.tagList.findIndex((item) => {
      return item.id === tagMenu.id;
    });
    const oldCurIndex = state.currentMenuIndex;
    let newCurIndex = oldCurIndex;
    state.tagList.splice(delIndex, 1);
    if (delIndex < oldCurIndex) {
      newCurIndex--;
    } else if (oldCurIndex >= state.tagList.length) {
      newCurIndex = state.tagList.length - 1;
    }
    this.commit("changeCurrentTagIndex", newCurIndex);
  },

  // 更改当前标签下标
  changeCurrentTagIndex(state, i) {
    state.currentMenuIndex = i;
  },
};

export default new Vuex.Store({
  state,
  mutations,
});
