<template>
  <div class="test-content" style="height: 100%">
    <div
      v-for="(iframe, i) in iframes"
      :key="iframe.id"
      :style="{ height: i === currentMenuIndex ? '100%' : 0 }"
    >
      <iframe
        @load="loadandpostmessage($event, iframe)"
        :ref="'iframe' + i"
        v-show="i === currentMenuIndex"
        src="http://192.168.2.16:3000"
        frameborder="0"
        width="100%"
        height="100%"
      ></iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: "TestContent",
  computed: {
    iframes() {
      return this.$store.state.tagList;
    },
    currentMenuIndex() {
      return this.$store.state.currentMenuIndex;
    },
  },
  methods: {
    loadandpostmessage(event, iframe) {
      const { id, label } = iframe;
      event.target.contentWindow.postMessage(
        {
          type: "vue-iframe",
          id,
          label,
        },
        "*"
      );
    },

    isShow(i) {
      return i == this.currentMenuIndex;
    },
  },
};
</script>
