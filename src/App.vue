<template>
  <v-app>
    <nav>
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

nav {
   margin-top: 1.5%;
   margin-bottom: 1.5%;
}

#rightNav{
  display: flex;
  align-items: center;
  justify-content: right;
  float: right;
  margin: 0%;
}

#leftNav{
  display: flex;
  align-items: center;
  justify-content: center;
  float: left;
}

#logo{
    display: inline;
    margin-left: 10%;
}

.searchBox {
  display: inline;
  align-items: left;
  width: 100%;
  border: 1px solid #741DFF;
  border-radius: 25px;
}

/* input form */
#search{
  color: #741DFF;
  width: 70%;
  height: 100%;
  vertical-align: middle;
}

.icon{
  color: #741DFF;
  padding: 2.5%;
  float: right;
}

#weather, #topLine, #temp, #heart, #mypage{
    /* margin-left: 10%; */
}

#weather, #temp{
  color: #cbcbcb;
  font-size: 120%;
}

/* #weather, #temp{
  vertical-align: middle;
}  */



</style>
