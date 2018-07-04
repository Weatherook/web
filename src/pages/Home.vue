<template>
<v-app>
    <v-container grid-list-md text-xs-center id="todayLookCon" fluid>

        <!-- 오늘의 추천 코디 상단 탭 -->
        <v-layout row wrap id="todayLookTab">
            <v-flex>
                
                <h2>오늘의 추천 코디</h2>
                <v-content id="codiCon" flat="true">
                    <v-carousel hide-delimiters light prev-icon="chevron_left" next-icon="chevron_right" transition=fade :cycle=cycle flat="true">
                        <v-carousel-item v-for="(page,index) in cardPages" :key="index" flat="true">
                            <v-container fluid fill-height grid-list-sm flat="true">
                                <v-layout mt-2 row justify-center align-center flat="true">
                                    <v-flex xs3 v-for="(card,i) in page" :key="i" flat="true">
                                        <v-card flat="true">
                                            <v-card-media :src=card.src height="300px">
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
    
    <v-container grid-list-md text-xs-center id="todayFeedCon" fluid>
        <!-- public계정의 피드들 -->
        <v-layout id="feedTab" fluid flat="true">
            <v-toolbar id="feedTabToolBar" flat="true" pa-0>
                
                <v-container id="feedTabBar" fluid>
                    <!-- 여기 slider-color 어떻게 rgb값으로 바꾸는지 모르겠 -->
                    <v-tabs id="feedTabItem" color="transparent" slider-color="deep-purple">
                        <v-tab v-for="content in tabContents" :key="content" style="color:#7000ff" router :to="content.link">
                            {{content.title}}
                        </v-tab>
                    </v-tabs>

                    <router-view/>
                    
                </v-container>
                
            </v-toolbar>
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
      active: null,
      tabContents: [
        { title: '오늘', link: '/feed/today' },
        { title: '팔로잉', link: '/feed/following' }
      ],
      cycle: false,
      cards: [
        {
          src:  'http://efdreams.com/data_images/dreams/dog/dog-12.jpg',
          title: 'Kangaroo Valley Safari',
          text: 'Located two hours south of Sydney in the Southern Highlands of New South Wales, ...'
        },
        {
          src: 'https://vuetifyjs.com/static/doc-images/cards/desert.jpg',
          title: 'Kangaroo Valley Safari',
          text: 'Located two hours south of Sydney in the <br>Southern Highlands of New South Wales, ...'
        },
        {
          src: 'https://vuetifyjs.com/static/doc-images/cards/desert.jpg',
          title: 'Kangaroo Valley Safari',
          text: 'Located two hours south of Sydney in the <br>Southern Highlands of New South Wales, ...'
        },
        {
          src: 'https://vuetifyjs.com/static/doc-images/cards/desert.jpg',
          title: 'Kangaroo Valley Safari',
          text: 'Located two hours south of Sydney in the <br>Southern Highlands of New South Wales, ...'
        },
        {
          src: 'https://vuetifyjs.com/static/doc-images/cards/desert.jpg',
          title: 'Kangaroo Valley Safari',
          text: 'Located two hours south of Sydney in the <br>Southern Highlands of New South Wales, ...'
        },
        {
          src: 'https://vuetifyjs.com/static/doc-images/cards/desert.jpg',
          title: 'Kangaroo Valley Safari',
          text: 'Located two hours south of Sydney in the <br>Southern Highlands of New South Wales, ...'
        },
      ]
    }
    },
    computed : {
        cardPages (){
          // xl = 12, lg = 6, md = 4, sm = 3, xl = 2
          let pageSize = 3
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
          for (let i = 0; i < this.cards.length; i += 1) {
            pages.push(this.cards.slice(i, i + pageSize))
            // if (pageSize < 3) {
            //
            // }
          }
          return pages
        }
      }
  }

</script>

<style scoped>

#todayLookTab{
    max-width: 100%;
    border-top: 1px solid #cbcbcb;
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
    overflow:hidden;
    height:auto;
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

#codiCon{
    height: 30%;
}
</style>
