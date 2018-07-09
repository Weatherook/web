<template>
  <v-app>
    <nav v-if="['Home', 'Mypage', 'MypageGrid'].indexOf($route.name) > -1">
      <v-layout row wrap>
        <img src="./assets/topimage@3x.png" class="nav-back">
        <v-flex row sm3 md3 lg3 logos>
          <img src="./assets/logo_white@2x.png" class="logo_image">
          <img src="./assets/mainlogo@2x.png" class="main_logo_image">
        </v-flex>

        <v-layout row wrap sm6 md6 lg6 icons>
          <v-flex column wrap date mt-2>
            {{ this.mm }} . {{ this.dd }} <br/>
            {{ this.day }}
          </v-flex>

          <v-flex ml-4 mt-1>
            <img :src="this.weatherImage[this.weatherIndex]" class="weather_image">
          </v-flex>

          <v-flex column wrap date mt-2>
            25℃ <br/>
            20 / 28
          </v-flex>

          <v-flex ml-4>
            <img src="./assets/topbar_line@2x.png" class="divider_image">
          </v-flex>

          <v-flex mt-1 ml-2>
            <v-btn flat icon @click="click_bell">
              <img src="./assets/bell1@2x.png" class="bell_image">
            </v-btn>
          </v-flex>

          <v-flex mt-1 ml-3>
            <img src="./assets/top-profileface@2x.png" class="profile_image">
            <v-flex v-if="this.bell_flag" bell-content>
              <ul>
                <li>ㅎ</li>
                <li>ㅅ</li>
                <li>ㅂ</li>
              </ul>
            </v-flex>
          </v-flex>

        </v-layout>
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
      ],
      dd : 0,
      mm : 0,
      day : '',
      week : ['일', '월', '화', '수', '목', '금', '토'],
      weatherImage : ['../static/weather/sunny@2x.png', '../static/weather/cloud@2x.png', '../static/weather/rainy@2x.png', '../static/weather/snow@2x.png'],
      weatherIndex : 1,
      bell_flag : false
    }
  },
  created() {
    var d = new Date();
    this.mm = d.getMonth() +1;
    this.dd = d.getDate();
    this.day = d.getDay();
    this.day = this.week[this.day] + "요일";
  },
  methods: {
    click_bell() {
      this.bell_flag = true;
      var bell_element = document.getElementsByClassName("bell_image")[0];
      bell_element.src="../static/home/bell2@2x.png";

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

.nav-back {
  width: 100%;
  height: 100%;
}

.logos {
  position: fixed;
  left: 13%;
  top: 3%;
}

.logo_image {
  width: 80px;
}

.main_logo_image {
  width: 100px;
  margin-bottom:5px;
}

.icons {
  position: fixed;
  right: 8%;
  top: 7%;
}

.date {
  text-align: center;
}

.weather_image {
  width: 80%;
}

.divider_image {
  width: 70%;
}

.bell_image {
  width: 80%;
}

.profile_image {
  width: 50px;
  height: 50px;
  border-radius: 50px;
}

.bell-content {
  background: white;
  z-index: 9999;
}
</style>
