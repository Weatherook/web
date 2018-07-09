<template>
  <v-app>
    <nav v-if="['Home', 'Mypage'].indexOf($route.name) > -1">
      <v-layout row wrap>
        <v-flex row wrap sm6 md5 lg6>
          <img src="" alt="">
        </v-flex>
      </v-layout>
    </nav>
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
