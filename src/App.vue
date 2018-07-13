<template>
  <v-app>
    <nav v-if="['/setting','/mypage/grid', '/mypage/list', '/grid', '/list', '/feed/today/grid', '/feed/today/list', '/feed/following/grid', '/feed/following/list'].indexOf($route.path) > -1">
      <v-layout row wrap>
        <img src="./assets/topimage@3x.png" class="nav-back">  
        
        <v-flex row sm3 md3 lg3 logos>
          <router-link to="/feed/today/grid">
            <img src="./assets/logo_white@2x.png" class="logo_image">
            <img src="./assets/mainlogo@2x.png" class="main_logo_image">
          </router-link>
        </v-flex>

        <!-- <v-flex row sm5 md5 lg5 pa-0> -->
          <v-layout row icons hidden-sm-and-down>
              <v-flex column wrap date mt-2>
              {{ this.mm }} . {{ this.dd }} <br/>
              {{ this.day }}
            </v-flex>

            <v-flex ml-4 mt-1>
              <img :src="this.weatherImage[this.weatherIndex]" class="weather_image">
            </v-flex>

            <v-flex column wrap date mt-2 ml-2> 
              {{ navInfos.current_temp }} ℃ <br/>
              {{ navInfos.temp_am }} / {{ navInfos.temp_af }}
            </v-flex>

            <v-flex ml-4>
              <img src="./assets/topbar_line@2x.png" class="divider_image">
            </v-flex>

            <v-flex mt-2 ml-2>
               <v-menu offset-y>
                 <v-btn slot="activator" flat icon @click="click_bell">
                  <img src="./assets/bell1@2x.png" class="bell_image">
                </v-btn>
      <!-- @click="" -->
                <v-list three-line>
                  <v-list-tile v-for="(item, index) in alarms.slice(0,5)" :key="index" avatar>
                    <v-list-tile-avatar>
                      <img v-if="item.comment_img" :src="item.comment_img">
                      <img v-else src="./assets/top-profileface@2x.png">
                    </v-list-tile-avatar>
 
                    <v-list-tile-content>
                      <v-list-tile-title v-if="item.flag == 0">{{ item.comment_id }} {{ item.comment_str }}</v-list-tile-title>
                      <v-list-tile-sub-title v-if="item.flag == 0">{{ item.comment_desc }}</v-list-tile-sub-title>
                      <v-list-tile-sub-title v-if="item.flag == 0">{{ convertDate(item.date_modify) }}</v-list-tile-sub-title>
                    </v-list-tile-content>
                    
                    <v-list-tile-content>
                      <v-list-tile-title v-if="item.flag == 0">
                        <img :src="item.board_img" class="board_image_style">
                      </v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                </v-list>
               </v-menu>    
            </v-flex>

            <v-flex mt-2 ml-4>
              <v-menu offset-y v-if="$route.path == '/mypage/grid' || $route.path == '/mypage/list'|| $route.path == '/setting'">
                 <v-btn slot="activator" flat icon>
                  <img src="./assets/setting@2x.png" class="setting_image">
                </v-btn>

                <v-list subheader>
                  <v-subheader>계정</v-subheader>
                  <v-list-tile  v-for="(item, index) in this.settingItems" :key="index" @click="$router.push('/setting')">
                    <v-list-tile-content>
                      <v-list-tile-title>{{ item }}</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-subheader>공개범위 및 보안</v-subheader>
                  <v-list-tile>
                    <v-list-tile-content>
                      <v-list-tile-title>계정 공개 범위</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-flex logout-btn>
                      로그아웃
                    </v-flex>
                  </v-list-tile>
                </v-list>
               </v-menu>

              <router-link v-else to="/mypage/grid">
                <img v-if="navInfos.user_img === null" src="./assets/top-profileface@2x.png" class="profile_image">
                <img v-else :src="navInfos.user_img" class="profile_image">
              </router-link>
            </v-flex>

          </v-layout>
      
        <!-- </v-flex> -->

      </v-layout>
    </nav>
    <router-view/>
  </v-app>

  
</template>

<script scoped>
import {mapGetters} from 'vuex'
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
      weatherImage : ['/static/weather/sunny@2x.png', '/static/weather/cloud@2x.png', '/static/weather/rainy@2x.png', '/static/weather/snow@2x.png'],
      weatherIndex : 2,
      bell_flag : false,
      settingItems: [
        '회원정보 수정','비밀번호', '회원님이 좋아한 게시물', '언어'
      ]
    }
  },
  computed: {
    ...mapGetters({
        navInfos: 'navInfo',
        token: 'tokenInfo',
        alarms: 'alarmInfo'
    })
  },
    created() {
    this.$store.dispatch('getNavInfo', this.token)
    
    var d = new Date();
    this.mm = d.getMonth() +1;
    this.dd = d.getDate();
    this.day = d.getDay();
    this.day = this.week[this.day] + "요일";

    this.$store.dispatch('getAlarmInfo', this.token)
  },
  methods: {
    click_bell() {
      var bell_element = document.getElementsByClassName("bell_image")[0];

      if(this.bell_flag === false) {
        this.bell_flag = true;
        bell_element.src="/static/home/bell2@2x.png";
      } else {
        this.bell_flag = false;
        bell_element.src="/static/home/bell1@2x.png";
      }
    },
    convertDate(dateString){
          var originDate = dateString
          var strArray = originDate.split('-')
          var month = strArray[0]
          var date = strArray[1]
          var convertDate = String(month) + "월 " + String(date) + "일"
          return convertDate
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Nanum+Gothic|Noto+Sans');

#app {
  font-family: 'Noto Sans', sans-serif;
  font-size: 15px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; 
}

.nav-back {
  width: 100%;
  height: 100%;
}

.logos {
  position: fixed;
  left: 13vw;
  top: 1.5vw;
}

.logo_image {
  /* width: 30%; */
  width: 7vw;
}

.main_logo_image {
  /* width: 35%; */
  margin-bottom:1vw;
  width: 7vw;
}

.icons {
  position: fixed;
  right: 8vw;
  top: 4vw;
}

.date {
  text-align: center;
  line-height: 30px;
}

.weather_image {
  width: 90%;
}

.divider_image {
  width: 70%;
}

.bell_image {
  width: 100%;
}

.profile_image {
  width: 65px;
  height: 65px;
  border-radius: 65px;
}

.bell-content {
  background: white;
  z-index: 9999;
}

.board_image_style {
  width: 60px;
  height: 60px;
}

.setting_image {
  width: 150%;
  height: 150%;
}

.logout-btn {
  border: 1px #AAAAAA solid;
  color: #AAAAAA;
  height: 40px;
  line-height: 40px;
  text-align: center;
}
</style>
