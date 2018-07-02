<template>
  <v-app>
    <v-toolbar color="purple" dark flat="false" height="100px">
      <v-spacer></v-spacer>
      <v-icon>fa-lock</v-icon>
      <v-spacer></v-spacer>
      <v-text-field
          append-icon="fa-search"
          class="mx-2"
          flat
          label=""
          prepend-inner-icon=""
          solo-inverted
        ></v-text-field>

      <v-toolbar-items class="hidden-xs-only">
        <v-btn flat v-for="item in toolbarItems" :key="item.title" router :to="item.link">
          <v-icon left>{{item.icon}}</v-icon>
          {{item.title}}
        </v-btn>
      </v-toolbar-items>
     
    </v-toolbar>
   <router-view/>
  </v-app>

</template>

<script>
export default {
  name: 'App',
   data () {
    return {
      toolbarItems: [
        { icon: '', title: '로그인/회원가입', link: '/sign' },
        { icon: 'face', title: '마이페이지', link: '/myPage' }
      ]
    }
  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
}

</style>
