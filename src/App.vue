<template>
  <v-app>
    <nav>
      <div class="nav" align="center">
        <!-- 로고 -->
        <img src="./assets/logo.png" id="logo" width="50px" height="50px"/>
        <!-- 검색창 -->
        <div class="searchBox">
          <div class="container-1">
              <input type="search" id="search" placeholder=" " />
              <span class="icon"><i class="fa fa-search"></i></span>
          </div>
        </div>

        <!-- 날씨 -->
        <img src="./assets/weather_sunny.png" id="weatherIcon" width="50px" height="50px" />
        <h2 id="weather">맑음</h2>
        <h2 id="temp">28</h2>
        <img src="./assets/heart.png" id="heart" width="50px" height="50px" />
        <img src="./assets/mypage.png" id="mypage" width="50px" height="50px" />
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

nav {
   margin-top: 1.5%;
   margin-bottom: 1.5%;
}

#logo{
    display: inline;
    float: left;
    margin-left: 10%
}

.searchBox {
  display: inline;
  float: left;
  align-items: center;
  margin-top: 1%;
  margin-left: 2%;
  width: 25%; 
  border: 0.3px solid #741DFF;
}

#search{
  color: #741DFF;
  align-items: center;
}

.icon{
  color: #741DFF;
  padding: 2.5%;
  border: 1px solid #741DFF;
  float: right;
}

#weatherIcon, #weather, #temp, #heart, #mypage{
    display: inline;
    float: right;
}



</style>
