<template>
<v-app id="homeApp">
    <v-container grid-list-md text-xs-center id="todayLookCon" fluid >

        <!-- 오늘의 추천 코디 상단 탭 -->
        <v-layout row wrap id="todayLookTab" fluid>
            <v-flex wrap>

                <h2>오늘의 추천 코디</h2>
                <v-content id="todayLookContent" flat="true" wrap>
                    <v-carousel hide-delimiters light prev-icon="chevron_left" next-icon="chevron_right" transition=fade :cycle=cycle flat="true" pa-0 wrap>
                        <v-carousel-item v-for="(page,index) in cardPages" :key="index" flat="true">

                            <v-container fluid fill-height grid-list-sm flat="true" pa-0 ma-0>
                                <v-layout mt-2 row justify-center align-center flat="true" ma-0>

                                    <v-flex sm3 v-for="(card,index) in page" :key="index" flat="true">
                                        <v-card flat="true">

                                            <a :href="card.commend_ref"><v-card-media :src="card.commend_img" height="420">
                                            </v-card-media></a>
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
                     <v-tabs id="feedTabItem" color="transparent" slider-color="deep-purple">
                        <v-tab v-on:click="todayFeedClick" id="todayFeed" style="color:#7000ff">오늘</v-tab>
                        <v-tab v-on:click="followingFeedClick" id="followingFeed" style="color:#7000ff">팔로잉</v-tab>
                    </v-tabs>

                    <!-- 오늘 탭이 눌렸을 때 -->
                    <template v-if="todayFeedClicked===1">
                        <TodayFeed></TodayFeed>
                    </template>

                    <!-- 팔로잉 탭이 눌렸을 때 -->
                    <template v-if="followingFeedClicked===1">
                        <FollowingFeed></FollowingFeed>
                    </template>
                    
                </v-container>
                
            </v-toolbar>
            </v-flex>
        </v-layout>
       
    </v-container>

</v-app>
</template>


<script>
import { mapGetters } from 'vuex'
import { Carousel, CarouselIndicators, CarouselIndicator, CarouselInner, CarouselItem, CarouselNavigation, CarouselCaption, Container, Row, Column, Card, CardImg, CardBody, CardTitle, CardText, Btn } from 'mdbvue';
import FeedDetail from './FeedDetail'
import FollowingFeed from './FollowingFeed'
import TodayFeed from './TodayFeed'

export default {
  data () {
    return {
      todayFeedClicked: 1,
      followingFeedClicked: 0,
      showFeed : false,

    //   temp: -1,
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
   
    }
    },
    computed : {
        ...mapGetters({
            cards: 'todayRecommends',
            token: 'tokenInfo'
        }),
        cardPages (){
          // xl = 12, lg = 6, md = 4, sm = 3, xl = 2
          let pageSize = 5
        //   if (this.$vuetify.breakpoint.xl) {
        //     pageSize = 4
        //   } else if (this.$vuetify.breakpoint.lg) {
        //     pageSize = 4
        //   } else if (this.$vuetify.breakpoint.md) {
        //     pageSize = 4
        //   } else if (this.$vuetify.breakpoint.sm) {
        //     pageSize = 1
        //   }

            console.log(this.cards)
        
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
      methods: {
           size (val) {
                return this.size[val]
           },
          todayFeedClick(){
              this.todayFeedClicked = 1;
              this.followingFeedClicked = 0;
          },
          followingFeedClick(){
              this.todayFeedClicked = 0;
              this.followingFeedClicked = 1;
              console.log(this.todayFeedClicked)
              console.log(this.followingFeedClicked)
          }
          
      },
      created () {
        const object = {
            x: 60,
            y: 126,
            date_type: 2,
            token: this.token
        }
        this.$store.dispatch('getTodayRec',object)
    
    },
    components: {
        'FeedDetail': FeedDetail,
        'TodayFeed' : TodayFeed,
        'FollowingFeed' : FollowingFeed
    }
  }

</script>

<style scoped>
 * {
     font-family: 'Noto Sans', sans-serif
     ;
 }
#homeApp{
    background: #f7f7f7;
}
/* #filter{
    width: 13%;
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
} */


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
    margin-left: 20%;

}

#todayLookContent{
    overflow:hidden;
    height:auto;    
}
.tab-title{
    color: #7000ff;
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
