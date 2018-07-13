<template>
     <v-app>
        <v-container grid-list-lg fluid>
            
            <v-layout row> 
                <v-flex btn-flex sm4 md4 lg4 pt-4>
                    <button id="grid-btn" v-on:click="switchGrid"><img src="/static/home/photo1@2x.png" class="style-feed-btn"></button>
                    <button id="list-btn" v-on:click="switchList"><img src="/static/home/photo2@2x.png" class="style-feed-btn"></button>
                </v-flex>

                <v-spacer></v-spacer>

                <v-flex order-flex sm4 md4 lg4 pt-5>
                    <button id="popular-order" class="style-order" v-on:click="switchPopular" style="color:#741dff">인기순</button>
                    <button id="new-order" class="style-order" v-on:click="switchNew">최신순</button>
                </v-flex>
            </v-layout>

            <v-flex row sm6 md6 lg6 offset-sm3 offset-md3>
                <template v-if="gridClicked===1">
                    <v-container grid-list-md > 
                        <v-layout row wrap>
                            <v-flex sm6 md6 lg6 xl6 v-for="feed in feeds" :key= "feed">
                                <img :src="feed.board_img" alt="" class="post-image">
                            </v-flex>
                        </v-layout>
                    </v-container>
                </template>
            </v-flex>

            <template v-if="listClicked===1">
                <v-container fluid grid-list-xs>
                    <v-layout row wrap v-for="(feed,index) in feeds" :key= "index">
                    <v-flex xs12 sm6 offset-sm3 feed-container>
                        <v-layout row wrap user-info align-center>
                            <img :src="feed.user_img" alt="" class="user_image">
                            <span class="user-nickname">{{feed.user_id}}</span>
                            <v-spacer></v-spacer>
                            <v-btn flat icon>
                                <img v-if="feed.flag===0" src="/static/home/heart@2x.png" alt="" class="likeimage">
                                <img v-else src="/static/home/heart2@2x.png" alt="" class="likeimage">
                            </v-btn>
                            <span class="likecount">{{ feed.like_cnt }}</span>
                        </v-layout>

                        <v-flex pa-0>
                        <img :src="feed.board_img" alt="" class="feed-image">
                        </v-flex>

                        <v-flex row xs12 sm6 md6 pa-0 ml-1>
                        <!-- date, weather, temperature!! -->
                        <span class="purple-text">{{convertDate(index)}}</span>
                        <span class="purple-text">{{convertNumtoWeather(feed.board_weather)}}</span>
                        <span class="purple-text">{{convertTemp(index)}}</span>
                        </v-flex>

                        <v-layout row wrap>
                        <v-flex column xs12 sm12 md12 fluid ml-1>
                            <div class="feed-content">{{ feed.board_desc }}</div>
                        </v-flex>

                        <v-flex xs12 sm12 md12 fluid ml-1>
                            <span class="comment-all" v-if="feed.comment_cnt != 0">{{convertCommentDesc(index)}}</span>
                            <div class="comment-container" v-for="(comment,index) in feed.comment_list" :key="index">
                                <span class="comment-nickname">{{comment.comment_id}}</span>
                                <span class="comment-content">{{comment.comment_desc}}</span>
                            </div>

                            <v-flex row wrap xs12 sm12 md12 pa-0>
                                <img :src="feed.user_img" alt="" class="user_image">
                                <span class="input-comment">댓글...</span>
                            </v-flex>

                        </v-flex>
                        </v-layout>

                    </v-flex>
                    </v-layout>
                </v-container>
            </template>


        <!-- 필터 배너 -->
        <v-layout>
            <v-flex row id="filter">
                <v-flex row id="filter_today_all">
                    <v-flex id="filter_today" class="style-tab" xs6 md6 lg6 xl6 v-on:click="switchTab" style="color:#741dff">오늘</v-flex>
                    <v-flex id="filter_all" class="style-tab" xs6 md6 lg6 xl6 v-on:click="switchTab">전체</v-flex>
                </v-flex>

                <v-flex row align-center justify-center id="filter_sex_height">
                    <v-flex id="filter_sex" style="display:block;float:left">
                        <v-flex style="display:block;color:#555555">성별</v-flex>
                        <v-flex v-for= "gender in genderArray" :key="gender" v-on:click="switchGender" style="display:inline-block;">
                            <button class="style-gender">{{ gender }}</button>
                        </v-flex>
                    </v-flex>

                    <v-flex row id="filter_height" style="display:block;">
                        <v-flex style="display:inline">키</v-flex>
                         <v-overflow-btn
                            id="style-height"
                            :items="dropHeights"
                            label="160"
                            target="#dropdown-example"
                            bottom
                            auto
                            dense
                            width="10px"
                        ></v-overflow-btn>
                    </v-flex>
                </v-flex>

                <v-flex row id="filter_size" style="border-bottom:1px solid #aaaaaa">
                    <v-flex id="filter_size_con">
                        <h3 style="color:#555555">신체사이즈</h3>
                        <v-slider
                            v-model='size_clicked'
                            :tick-labels="sizesLabels"
                            :color="ex1.color"
                            :max="3"
                            step="1"
                            ticks="always"
                            ticks-size="1"
                            fluid
                        ></v-slider>
                    </v-flex>
                </v-flex>

                <v-flex column id="filter_style">
                    <h3 style="color:#555555">스타일</h3>
                    <v-flex row mr-2 xs4 sm4 md4 lg4 v-for= "style in styleArray" :key="style" v-on:click="switchStyle" style="display:inline;font-size:15px">
                        <button class="style-style">{{ style }}</button>
                    </v-flex>
                </v-flex>

                <v-flex v-if="clickedTodayTab===0" id="filter_temp" style="border-bottom:1px solid #aaaaaa">
                    <v-flex id="filter_temp_con">
                        <h3 style="color:#555555">기온</h3>
                        <v-slider
                            v-model="temp_clicked"
                            always-dirty
                            :color="ex1.color"
                            :min="-30"
                            :max="40"
                            thumb-label="always"
                        ></v-slider>
                    </v-flex>
                </v-flex>

                <v-flex v-if="clickedTodayTab===0" id="filter_weather" style="border-bottom:1px solid #aaaaaa;padding-bottom:5%">
                    <h3 style="color:#555555;padding-bottom:2%">날씨</h3>
                    <v-flex row mr-2 xs4 sm4 md4 lg4 v-model="weather_clicked" v-for= "weather in weatherArray" :key="weather" v-on:click="switchWeather" style="display:inline;font-size:15px">
                        <button class="style-weather">{{ weather }}</button>
                    </v-flex>
                </v-flex>

                <v-flex id="filter_apply_btn" class="style-btn" v-on:click="switchBtn">
                    <button>필터적용</button>
                </v-flex>

            </v-flex>
               
        </v-layout>

        </v-container>
    </v-app>
</template>


<script>
import { mapGetters } from 'vuex'

export default {
   data () {
    return {
        gridClicked: 1,
        listClicked: 0,
        popularClicked: 1,
        newClicked: 0,
        tempWeather: '',
        commentDesc: '',

        // 필터 배너
        clickedTodayTab: 1,
        tabArray: ['오늘', '전체'],
        tabFlagArray: [0,0],
        filterApply: 0,

        genderArray: ['여','남'],
        genderFlagArray: [0,0],
        gender_clicked: '여',

        weatherArray: ['맑음','구름','비','눈'],
        weatherFlagArray: [0,0,0,0],
        weather_clicked: 0,

        styleArray: ['빈티지','스트릿','클래식','캐쥬얼','유스','심플','모던','댄디','로맨틱','그 외'],
        styleFlagArray: [0,0,0,0,0,0,0,0,0,0],
        style_clicked: [],

        ex1: { label: 'color', val: 25, color: 'purple' },
        sizesLabels: ['마름','보통','통통','뚱뚱'],
        size_clicked: 1,

        temp_clicked: 26,

        dropHeights: this.autoHeightArray(),
        height_clicked: 160,
        active: null,
    }
  },
  computed: {
        ...mapGetters({
            feeds: 'getFeeds',
            token: 'tokenInfo'
        }),
  },
  methods: {
      autoHeightArray(){
          var array = new Array();
          for(var i=150; i<=180; i++){
              array.push(i)
          }
          return array;
      },
      switchGrid(){
        this.gridClicked = 1;
        this.listClicked = 0;
      },
      switchList(){
        this.gridClicked = 0;
        this.listClicked = 1;
      },
      switchPopular(){
          this.popularClicked = 1;
          this.newClicked = 0;
          this.$store.dispatch('getTodayPopular',this.token);
          document.getElementById('popular-order').style.color = "#741dff"
          document.getElementById('new-order').style.color = "#afafaf"
      },
      switchNew(){
          this.popularClicked = 0;
          this.newClicked = 1;
          this.$store.dispatch('getTodayNew',this.token);
          document.getElementById('new-order').style.color = "#741dff"
          document.getElementById('popular-order').style.color = "#afafaf"
      },
      
      convertNumtoWeather(i){
        switch(i){
          case 0: 
          return '맑음'
          break;
          case 1:
          return '구름 조금'
          break;
          case 2:
          return '구름 많음'
          break;
          case 3:
          return '흐림'
          break;
          case 4:
          return '비'
          break;
          case 5:
          return '비/눈'
          break;
          case 6:
          return '눈'
          break;
        }
      },
       convertNumtoSize(i){
        switch(i){
          case 0: 
          return '마름'
          break;
          case 1:
          return '보통'
          break;
          case 2:
          return '통통'
          break;
          case 3:
          return '뚱뚱'
          break;
          default:
          return null
          break;
        }
      },
      convertWeathertoNum(weather){
        switch(weather){
          case '맑음': 
          return 0;
          break;
          case '구름 조금':
          return 1;
          break;
          case '구름 많음':
          return 2;
          break;
          case '흐림':
          return 3;
          break;
          case '비':
          return 4;
          break;
          case '비/눈':
          return 5;
          break;
          case '눈':
          return 6;
          break;
        }
      },
      convertTemp(idx){
          var dataArray = this.feeds
          var tempMin = dataArray[idx].board_temp_min
          var tempMax = dataArray[idx].board_temp_max
          var temp = String(tempMin) + '/' + String(tempMax)
          return temp
      },
      convertCommentDesc(idx){
          var dataArray = this.feeds
          var commentCount = dataArray[idx].comment_cnt
          var commentDesc = '댓글 ' + String(commentCount) + "개 " + "모두 보기"
          return commentDesc 
      },
      convertDate(idx){
          var dataArray = this.feeds
          var originDate = dataArray[idx].board_date
          var strArray = originDate.split('-')
          var month = strArray[0]
          var date = strArray[1]
          var convertDate = String(month) + "월 " + String(date) + "일"
          return convertDate
      },
        switchStyle(e) {
            var clicked_btn = document.getElementsByClassName("style-style");
        
            if(this.styleFlagArray[this.styleArray.indexOf(e.toElement.innerText)] === 0) {
                this.styleFlagArray[this.styleArray.indexOf(e.toElement.innerText)] = 1;
                clicked_btn[this.styleArray.indexOf(e.toElement.innerText)].style.color = "#741dff";
                console.log(e.toElement.innerText)
                this.style_clicked.push(e.toElement.innerText)
            }else {
                this.styleFlagArray[this.styleArray.indexOf(e.toElement.innerText)] = 0;
                clicked_btn[this.styleArray.indexOf(e.toElement.innerText)].style.color = "#aaaaaa";
                this.style_clicked.splice(this.style_clicked.indexOf(e.toElement.innerText),1)
            }
          },
           switchGender(e) {
            var clicked_btn = document.getElementsByClassName("style-gender");
            var array = this.genderArray

            if(this.genderFlagArray[this.genderArray.indexOf(e.toElement.innerText)] === 0) {
                this.genderFlagArray[this.genderArray.indexOf(e.toElement.innerText)] = 1;
                clicked_btn[this.genderArray.indexOf(e.toElement.innerText)].style.color = "#741dff";
                this.gender_clicked = e.toElement.innerText;

                for(var i=0; i<array.length; i++){
                    if(array[i] != e.toElement.innerText ){
                        clicked_btn[this.genderArray.indexOf(array[i])].style.color = "#aaaaaa"
                        this.genderFlagArray[this.genderArray.indexOf(array[i])] = 0;
                    }
                }
            }else {
                this.genderFlagArray[this.genderArray.indexOf(e.toElement.innerText)] = 0;
                clicked_btn[this.genderArray.indexOf(e.toElement.innerText)].style.color = "#aaaaaa";
            }
          },
           switchWeather(e) {
            var clicked_btn = document.getElementsByClassName("style-weather");
            var array = this.weatherArray;

            if(this.weatherFlagArray[this.weatherArray.indexOf(e.toElement.innerText)] === 0) {
                this.weatherFlagArray[this.weatherArray.indexOf(e.toElement.innerText)] = 1;
                clicked_btn[this.weatherArray.indexOf(e.toElement.innerText)].style.color = "#741dff";
                this.weather_clicked = this.convertWeathertoNum(e.toElement.innerText)

                for(var i=0; i<array.length; i++){
                    if(array[i] != e.toElement.innerText ){
                        clicked_btn[this.weatherArray.indexOf(array[i])].style.color = "#aaaaaa"
                        this.weatherFlagArray[this.weatherArray.indexOf(array[i])] = 0;
                    }
                }
            }else {
                this.weatherFlagArray[this.weatherArray.indexOf(e.toElement.innerText)] = 0;
                clicked_btn[this.weatherArray.indexOf(e.toElement.innerText)].style.color = "#aaaaaa";
            }
          },
          switchHeight(height){
              this.height_clicked = height;
              return height;
          },
          switchBtn(e) {
              var clicked_btn = document.getElementsByClassName("style-btn");
            //   if(this.filterApply === 0){ // 필터 적용을 눌렀을 때
                  if(this.clickedTodayTab === 1){ // 오늘 탭 일 때
                    const object = {
                        gender: this.gender_clicked,
                        height: this.height_clicked,
                        size: this.convertNumtoSize(this.size_clicked),
                        stylelist: this.style_clicked
                    }
                    var payload = {
                        object: object,
                        token: this.token
                    }
                    this.$store.dispatch('getTodayFilter',payload)
                    console.log(object)
                    // this.filterApply = 0
                  }
                  else{ // 전체 탭 일 때
                    const object = {
                        gender: this.gender_clicked,
                        height: this.height_clicked,
                        size: this.convertNumtoSize(this.size_clicked),
                        temp: this.temp_clicked,
                        weather: this.weather_clicked,
                        stylelist: this.style_clicked
                    }
                    var payload = {
                        object: object,
                        token: this.token
                    }
                    this.$store.dispatch('getAllFilter',payload)
                    console.log(object)
                    // this.filterApply = 0
                  }
            //   }
          },
          switchTab(e) {
              var clicked_btn = document.getElementsByClassName("style-tab");

              if(this.tabArray.indexOf(e.toElement.innerText)===0){
                  clicked_btn[0].style.color = "#741dff";
                  clicked_btn[1].style.color = "#aaaaaa";
                  this.clickedTodayTab = 1;
              }else{
                  clicked_btn[1].style.color = "#741dff";
                  clicked_btn[0].style.color = "#aaaaaa";
                  this.clickedTodayTab = 0;
              }

          },
  },
   created () {
        this.$store.dispatch('getTodayPopular',this.token)
   },
   mounted: function(){
          $(document).ready(function() {

            // 기존 css에서 플로팅 배너 위치(top)값을 가져와 저장한다.
            var floatPosition = parseInt($("#filter").css('top'));
            // 250px 이런식으로 가져오므로 여기서 숫자만 가져온다. parseInt( 값 );
 
            $(window).scroll(function() {
                // 현재 스크롤 위치를 가져온다.
                // var scrollTop = $(window).scrollTop();
                // var newPosition = scrollTop + (floatPosition*0.00001) + "px";
                
                var scrollTop = $(window).scrollTop();
                if(scrollTop < 530) {
                    var newPosition = scrollTop + (floatPosition*0.00001) + "px";
                }else{
                    var newPosition = scrollTop-530 + (floatPosition*0.00001) + "px";
                }
 
                //  애니메이션 없이 바로 따라감
                // $("#filter").css('top', newPosition);
 
                $("#filter").stop().animate({
                    "top" : newPosition
                }, 500);
 
            }).scroll();
        });

    },
    
}
</script>

<style scoped>
.style-feed-btn{
    width: 45px;
    height: 45px;
    /* padding: 10px 30px; */
}

#grid-btn{
    margin-right: 3%;
}

.style-order{
    color: #aaaaaa;
    font-size: 15px;
}

#popular-order{
    margin-right: 1%;
    /* margin-bottom: 1%; */
}

.order-flex{
    margin-right: 12%;
}

.btn-flex{
    width: 10%;
    margin-left: 6%;
}

/* grid css */
.post-image {
    width : 380px;
    height : 380px;
}

/* list css */
.user_image {
  width: 40px;
  height: 40px;
  border-radius: 40px;
  margin-right: 7px;
}

.user-nickname, .comment-nickname{
  font-weight: bold;
  color: gray;
  margin-right: 10px;
}

.likecount {
  color: gray;
}

.feed-image {
  width: 100%;
  height: 100%;
}

.purple-text {
  color: #741DFF;
  font-weight: bold;
  padding-right: 5px;
}

.feed-container {
  background-color: white;
  margin-bottom: 20px;
}

.user-info {
  height: 60px;
  padding: 0 20px;
}

.likeimage {
  width: 80%;
  height: auto;
}

.comment-all {
    color : lightgray;
}

.comment-container {
    margin-bottom: 10px;
}

.input-comment {
    color: lightgrey;
}

/* filter css */
#filter{
    width: 12%; 
    height: auto;
    border: 1px solid #cbcbcb;
    border-radius: 28px 28px 28px 28px;
    background: white;
    padding: 0%;
    position: absolute;
    margin-left: 84%;
}
#filter_today_all{
    border-bottom: 1px solid #aaaaaa;
}

#filter_today{
    display: inline;
    height:6%;
    font-size: 23px;
    color: #aaaaaa; 
    padding-right: 13%;
    margin: 0 auto;
    border-right: 1px solid #aaaaaa;
}

#filter_all{
    display: inline;
    font-size: 23px;
    color: #aaaaaa;
    padding-left: 13%;
    margin: 0 auto;
}

#filter_sex_height{
    border-bottom: 1px solid #aaaaaa;
    text-align: center;
    margin: 0 auto;
}
#filter_style{
    border-bottom: 1px solid #aaaaaa;
    padding-bottom: 5%;
}
#filter_height{
    padding-top: 8%;
}

#dropHeight{
    size: 10%;
}

#filter_size_con, #filter_temp_con{
    width: 80%;
    margin: 0 auto;
}

#filter_apply_btn{
    margin: 5% auto;
}

.style-tab{
    color:#aaaaaa;
    font-weight: bold;
    cursor: pointer;
}
.style-gender {
    color:#aaaaaa;
    cursor: pointer;
}

.style-style {
    color:#aaaaaa;
}

.style-weather {
    color:#aaaaaa;
}

#style-height{
    color: #741dff;
    width: 1px;
}

.style-btn {
  -webkit-border-radius: 36;
  -moz-border-radius: 36;
  border-radius: 36px;
  font-family: Arial;
  color: #aaaaaa;
  background: #ffffff;
  padding: 10px 20px 10px 20px;
  border: solid #aaaaaa 0.8px;
  margin-bottom: 1%;
  text-decoration: none;
  width: 50%;
  cursor: pointer;
}
</style>
