<template>
  <v-card :height="size + 50" :width="size">
    <v-tabs v-model="tab" grow>
      <v-tab>登录</v-tab>
      <v-tab>注册</v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab">
      <v-tab-item :style="{ padding: size / 10 + 'px', height: (size + 50) * 0.8 + 'px' }">
        <v-text-field label="用户名"></v-text-field>
        <v-text-field label="密码" type="password"></v-text-field>
        <v-btn color="primary" elevation="2" large>登录</v-btn>
      </v-tab-item>
      <v-tab-item :style="{ padding: size / 10 + 'px', height: (size + 50) * 0.8 + 'px' }">
        <v-text-field label="用户名"></v-text-field>
        <v-text-field label="密码" type="password"></v-text-field>
        <v-text-field label="重复密码" type="password"></v-text-field>
        <v-btn color="primary" elevation="2" large>注册</v-btn>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: "Home",
  components: {
    // HelloWorld
  },
  data() {
    return {
      tab: null,
    };
  },
  computed: {
    size() {
      return { xs: 300, sm: 400, md: 400, lg: 400, xl: 400 }[this.$vuetify.breakpoint.name] || 200;
    },
  },
};
</script>

<style lang="scss">
.v-main__wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  .v-window-item--active {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
}
</style>
