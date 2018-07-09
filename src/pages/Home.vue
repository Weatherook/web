<template>
<v-app id="homeApp">
    <v-container grid-list-md text-xs-center id="todayLookCon" fluid >

        <!-- 오늘의 추천 코디 상단 탭 -->
        <v-layout row wrap id="todayLookTab">
            <v-flex wrap>

                <h2>오늘의 추천 코디</h2>
                <v-content id="todayLookContent" flat="true" wrap>
                    <v-carousel hide-delimiters light prev-icon="chevron_left" next-icon="chevron_right" transition=fade :cycle=cycle flat="true" pa-0 wrap>
                        <v-carousel-item v-for="(page,index) in cardPages" :key="index" flat="true">

                            <v-container fluid fill-height grid-list-sm flat="true" pa-0 ma-0>
                                <v-layout mt-2 row justify-center align-center flat="true" ma-0>

                                    <v-flex xs3 v-for="(card,index) in page" :key="index" flat="true">
                                        <v-card flat="true">
                                            <v-card-media :src=card.src height="300px" width="200px">
                                            </v-card-media>
                                        </v-card>
                                    </v-flex>
                                    
                                </v-layout>
                            </v-container>

                        </v-carousel-item>
                    </v-carousel>
                </v-content>

            </v-flex>
        </v-layout>
    </v-container>

    <v-spacer></v-spacer>
    
    <v-container grid-list-md text-xs-center id="todayFeedCon" fluid pa-0>
        <!-- public계정의 피드들 -->
        <v-layout id="feedTab" fluid flat="true" pa-0>
            <v-flex px-0 >
            <v-toolbar id="feedTabToolBar" flat="true">
                <v-container id="feedTabBar" fluid text-xs-center>
                    <!-- 여기 slider-color 어떻게 rgb값으로 바꾸는지 모르겠 -->
                    <v-tabs id="feedTabItem" color="transparent" slider-color="deep-purple" centered>
                        <v-tab v-for="content in tabContents" :key="content" style="color:#7000ff" router :to="content.link">
                            {{content.title}}
                        </v-tab>
                    </v-tabs>

                    <router-view/>
                    
                </v-container>
                
            </v-toolbar>
            </v-flex>
        </v-layout>

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
                        <v-menu style="display:inline" offset-y>
                            <v-flex slot="activator" color="transparent" style="color:#741dff;display:inline" light>163</v-flex>
                            <v-list>
                                <v-list-tile v-for="(height, index) in dropHeights" :key="index">
                                    <v-list-tile-title>{{ height }}</v-list-tile-title>
                                </v-list-tile>
                            </v-list>
                        </v-menu>
                    </v-flex>
                </v-flex>

                <v-flex row id="filter_size" style="border-bottom:1px solid #aaaaaa">
                    <v-flex id="filter_size_con">
                        <h3 style="color:#555555">신체사이즈</h3>
                        <v-slider
                            v-model="fruits"
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

                <v-flex column id="filter_style" style="border-bottom:1px solid #aaaaaa">
                    <h3 style="color:#555555">스타일</h3>
                    <v-flex row mr-2 xs4 sm4 md4 lg4 v-for= "style in styleArray" :key="style" v-on:click="switchStyle" style="display:inline;font-size:15px">
                        <button class="style-style">{{ style }}</button>
                    </v-flex>
                </v-flex>

                <v-flex v-if="clickedTodayTab===0" id="filter_temp" style="border-bottom:1px solid #aaaaaa">
                    <v-flex id="filter_temp_con">
                        <h3 style="color:#555555">기온</h3>
                        <v-slider
                            v-model="slider"
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
                    <v-flex row mr-2 xs4 sm4 md4 lg4 v-for= "weather in weatherArray" :key="weather" v-on:click="switchWeather" style="display:inline;font-size:15px">
                        <button class="style-weather">{{ weather }}</button>
                    </v-flex>
                </v-flex>

                <v-flex id="filter_apply_btn" class="style-btn" v-on:click="switchBtn">필터 적용</v-flex>

            </v-flex>
               
        </v-layout>
       
    </v-container>

  

</v-app>
</template>


<script>
import { mapGetters } from 'vuex'
import { Carousel, CarouselIndicators, CarouselIndicator, CarouselInner, CarouselItem, CarouselNavigation, CarouselCaption, Container, Row, Column, Card, CardImg, CardBody, CardTitle, CardText, Btn } from 'mdbvue';

export default {
  data () {
    return {
      temp: -1,
      clickedTodayTab: 1,
      tabArray: ['오늘', '전체'],
      tabFlagArray: [0,0],
      filterApply: 0,

      genderArray: ['여','남'],
      genderFlagArray: [0,0],

      weatherArray: ['맑음','구름','비','눈'],
      weatherFlagArray: [0,0,0,0],

      styleArray: ['빈티지','스트릿','클래식','캐쥬얼','유스','심플','모던','댄디','로맨틱','그 외'],
      styleFlagArray: [0,0,0,0,0,0,0,0,0,0],

      ex1: { label: 'color', val: 25, color: 'purple' },
      sizesLabels: ['마름','보통','통통','뚱뚱'],
      dropHeights: [150,151,152,153],
      active: null,
      tabContents: [
        { title: '오늘', link: '/feed/today' },
        { title: '팔로잉', link: '/feed/following' }
      ],
      cycle: false,
      cards: [
        { src: 'https://st2.depositphotos.com/5723466/8465/i/950/depositphotos_84652408-stock-photo-3d-red-number-1.jpg',},
        { src: 'https://st3.depositphotos.com/1561359/12975/i/950/depositphotos_129757262-stock-photo-3d-red-number-2.jpg',},
        { src: 'https://static4.depositphotos.com/1011728/281/i/950/depositphotos_2810742-stock-photo-3d-render-of-red-number.jpg',},
        { src: 'https://st.depositphotos.com/1561359/3755/v/950/depositphotos_37559667-stock-illustration-3d-shiny-red-number-4.jpg',},
        { src: 'https://st.depositphotos.com/1561359/4118/v/950/depositphotos_41184901-stock-illustration-3d-shiny-red-number-5.jpg',}
      ]
    }
    },
    computed : {
        cardPages (){
          // xl = 12, lg = 6, md = 4, sm = 3, xl = 2
          let pageSize = 4
        //   if (this.$vuetify.breakpoint.xl) {
        //     pageSize = 4
        //   } else if (this.$vuetify.breakpoint.lg) {
        //     pageSize = 4
        //   } else if (this.$vuetify.breakpoint.md) {
        //     pageSize = 4
        //   } else if (this.$vuetify.breakpoint.sm) {
        //     pageSize = 1
        //   }

          const pages = []
          for (let i=0; i<10; i++) {
	
        	let a = [...this.cards.slice(i * pageSize %this.cards.length, i* pageSize %this.cards.length + pageSize)]
	
	        if (a.length != pageSize) {
		        a = [...a, ...this.cards.slice(0, pageSize - a.length)]
            }
            pages.push(a)
        }
          return pages
        }
      },
      mounted: function(){
          $(document).ready(function() {
 
            // 기존 css에서 플로팅 배너 위치(top)값을 가져와 저장한다.
            var floatPosition = parseInt($("#filter").css('top'));
            // 250px 이런식으로 가져오므로 여기서 숫자만 가져온다. parseInt( 값 );
 
            $(window).scroll(function() {
                // 현재 스크롤 위치를 가져온다.
                var scrollTop = $(window).scrollTop();
                var newPosition = scrollTop + (floatPosition*0.5) + "px";
 
                //  애니메이션 없이 바로 따라감
                // $("#filter").css('top', newPosition);
 
                $("#filter").stop().animate({
                    "top" : newPosition
                }, 500);
 
            }).scroll();
        });

      },
      methods: {
           size (val) {
                return this.size[val]
           },
           switchStyle(e) {
            var clicked_btn = document.getElementsByClassName("style-style");
        
            if(this.styleFlagArray[this.styleArray.indexOf(e.toElement.innerText)] === 0) {
                this.styleFlagArray[this.styleArray.indexOf(e.toElement.innerText)] = 1;
                clicked_btn[this.styleArray.indexOf(e.toElement.innerText)].style.color = "#741dff";
            }else {
                this.styleFlagArray[this.styleArray.indexOf(e.toElement.innerText)] = 0;
                clicked_btn[this.styleArray.indexOf(e.toElement.innerText)].style.color = "#aaaaaa";
            }
          },
           switchGender(e) {
            var clicked_btn = document.getElementsByClassName("style-gender");
            console.log(e.toElement.innerText)

            if(this.genderFlagArray[this.genderArray.indexOf(e.toElement.innerText)] === 0) {
                this.genderFlagArray[this.genderArray.indexOf(e.toElement.innerText)] = 1;
                clicked_btn[this.genderArray.indexOf(e.toElement.innerText)].style.color = "#741dff";
            }else {
                this.genderFlagArray[this.genderArray.indexOf(e.toElement.innerText)] = 0;
                clicked_btn[this.genderArray.indexOf(e.toElement.innerText)].style.color = "#aaaaaa";
            }
          },
           switchWeather(e) {
            var clicked_btn = document.getElementsByClassName("style-weather");
        
            if(this.weatherFlagArray[this.weatherArray.indexOf(e.toElement.innerText)] === 0) {
                this.weatherFlagArray[this.weatherArray.indexOf(e.toElement.innerText)] = 1;
                clicked_btn[this.weatherArray.indexOf(e.toElement.innerText)].style.color = "#741dff";
            }else {
                this.weatherFlagArray[this.weatherArray.indexOf(e.toElement.innerText)] = 0;
                clicked_btn[this.weatherArray.indexOf(e.toElement.innerText)].style.color = "#aaaaaa";
            }
          },
          switchBtn(e) {
              var clicked_btn = document.getElementsByClassName("style-btn");
              if(this.filterApply === 0){
                  clicked_btn.style.color = "#ffffff"
                  clicked_btn.style.background = "#741dff"
                  clicked_btn.style.borderColor = "#741dff"
              }else{
                  clicked_btn.style.color = "#aaaaaa"
                  clicked_btn.style.background = "#ffffff"
                  clicked_btn.style.borderColor = "#aaaaaa"
              }
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

          }
      }
  }

</script>

<style scoped>
#homeApp{
    background: #f7f7f7;
}
#filter{
    width: 15%;
    height: auto;
    border: 1px solid #cbcbcb;
    border-radius: 28px 28px 28px 28px;
    background: white;
    padding: 0%;
    position: absolute;
    left: 84%;
}
#filter_today_all{
    
    border-bottom: 1px solid #aaaaaa;
}

#filter_today{
    display: inline;
    height:6%;
    font-size: 23px;
    color: #aaaaaa;
    padding-right: 10%;
    margin: 0 auto;
    border-right: 1px solid #aaaaaa;
}

#filter_all{
    display: inline;
    font-size: 23px;
    color: #aaaaaa;
    padding-left: 10%;
    margin: 0 auto;
}

#filter_sex_height{
    border-bottom: 1px solid #aaaaaa;
    text-align: center;
}

#filter_height{
    
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


#todayLookTab{
    max-width: 100%;
    border-top: 1px solid #cbcbcb;
    background: #f7f7f7;
}

#todayLookCon{
    display: inline;
    height: 30%;
    margin: 0%;
    padding: 0%;
    background-color: #f7f7f7;
}

#todayFeedCon{
    display: inline;
    /* overflow: hidden; */
    height: 100%;
    margin: 0%;
    padding: 0%;
    background-color: #f7f7f7;
}


h2 {
   color: #7000FF; 
}

#feedTabDiv{
    width: 100%;
    padding: 0;
}

#feedTab{
    max-width: 100%;
    max-height: 100%;
}

#feedTabToolBar{
    width: 100%;
    padding: 0%;
    background-color: #f7f7f7;


}

#feedTabBar{
    padding: 0%;
    text-align: center;

}

#feedTabItem{
    /* width: 100%; */
    border-bottom: 1px solid #CBCBCB;
    padding: 0%;

}

#todayLookContent{
    overflow:hidden;
    height:auto;    
}
.style-tab{
    color:#aaaaaa;
    font-weight: bold;
}
.style-gender {
    color:#aaaaaa;
}

.style-style {
    color:#aaaaaa;
}

.style-weather {
    color:#aaaaaa;
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
}
</style>
