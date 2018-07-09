<template>
  <v-app>
    <nav v-if="['Home', 'Mypage'].indexOf($route.name) > -1">
      <div class="nav" align="center">

        <div id="leftNav">
          <!-- 로고 -->
          <img src="./assets/logo.png" id="logo" width="50px" height="50px"/>
          <!-- 검색창 -->
          <div class="searchBox">
            <div class="container-1">
               <input type="search" id="search" placeholder=" " />
                <span class="icon"><i class="fa fa-search"></i></span>
            </div>
          </div>
        </div>
        


        <!-- 날씨 -->
        <div id="rightNav">
          <img src="./assets/sunny.png" id="weatherIcon" width="40px" height="40px" />
          <h2 id="weather">맑음</h2>
          <img src="./assets/topline.png" id="topLine" height="30px" />
          <h2 id="temp">28</h2>
          <img src="./assets/heart.png" id="heart" width="30px" height="30px" />
          <img src="./assets/mypage.png" id="mypage" width="40px" height="40px" />
        </div>
      </div>
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
