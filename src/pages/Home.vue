<template>
<v-app>
    <v-container grid-list-md text-xs-center id="todayLookCon">

        <!-- 오늘의 추천 코디 상단 탭 -->
        <v-layout row wrap id="todayLookTab">
            <v-flex>
                <h2>오늘의 추천 코디</h2>
            </v-flex>

           <br>
           <br>
           <br>
           <br>
           <br>
           <br>
           <br>
           <br>
           <br>
           <br>

               

        </v-layout>

        <!-- public계정의 피드들 -->
        <v-layout id="feedTab" flex align-center justify-center>
            <div id="feedTabDiv">
                <v-toolbar id="feedTabToolBar" flat="true" fluid>
                
                <v-container id="feedTabBar">
                    <!-- 여기 slider-color 어떻게 rgb값으로 바꾸는지 모르겠어 -->
                    <v-tabs v-model="tabs" color="transparent" slider-color="deep-purple">
                        <v-tab id="feedTabItem" v-for="item in tabItems" :key="item" style="color:#7000ff;align:center" >
                            {{item}}
                        </v-tab>
                    </v-tabs>
                </v-container>
                
            </v-toolbar>
  
            <v-tabs-items v-model="tabs">
                <v-tab-item v-for="content in tabContents" :key="content.title" router :to="content.link">
                <!-- <v-container> -->
                    <router-view/>
                <!-- </v-container> -->
                </v-tab-item>
            </v-tabs-items>
        </div>
        </v-layout>
    </v-container>
</v-app>
</template>


<script>
import { mapGetters } from 'vuex'

export default {
    data () {
    return {
      active: null,
      tabItems: [
         '오늘', '팔로잉'
      ],
      tabContents: [
        { title: '오늘', link: '/feed/today' },
        { title: '팔로잉', link: '/feed/following' }
      ]
    }
  }
}
</script>

<style scoped>

#todayLookTab{
    max-width: 100%;
    border-top: 1px solid #CBCBCB;
    background-color: #f7f7f7;
}

#todayLookCon{
    max-width: 100%;
    margin: 0%;
    padding: 0%;
}

h2 {
   color: #7000FF; 
}

#feedTabDiv{
    width: 100%;
    padding: 0%;
}

#feedTab{
    max-width: 100%;
    background-color: #f7f7f7;
}

#feedTabToolBar{
    max-width: 100%;
}

#feedTabBar{
    width: 100%;
    border-bottom: 1px solid #CBCBCB;
    padding: 0%;
    align-content: center;
}

#feedTabItem{
    max-width: 100%;
}



</style>
