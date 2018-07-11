<template>
     <v-app>
        <v-container grid-list-lg fluid>
            
            <v-layout row> 
                <v-flex btn-flex>
                    <button id="grid-btn" v-on:click="switchGrid"><img src="/static/home/photo1@2x.png" class="style-btn"></button>
                    <button id="list-btn" v-on:click="switchList"><img src="/static/home/photo2@2x.png" class="style-btn"></button>
                </v-flex>
               
                <v-spacer></v-spacer>

                <v-flex order-flex sm3 md3 lg3 pt-4 ml-5>
                    <button id="popular-order" class="style-order" v-on:click="switchPopular">인기순</button>
                    <button id="new-order" class="style-order" v-on:click="switchNew">최신순</button>
                </v-flex>
            </v-layout>

            <v-flex row sm7 md7 lg7 offset-sm3 offset-md3>
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
                        <span class="purple-text">{{convertWeather(feed.board_weather)}}</span>
                        <span class="purple-text">{{convertTemp(index)}}</span>
                        </v-flex>

                        <v-layout row wrap>
                        <v-flex column xs12 sm12 md12 fluid ml-1>
                            <div class="feed-content">{{ feed.board_desc }}</div>
                        </v-flex>

                        <v-flex xs12 sm12 md12 fluid ml-1>
                            <span class="comment-all">{{convertCommentDesc(index)}}</span>
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
    }
  },
  computed: {
        ...mapGetters({
            feeds: 'todayFeeds'
        }),
  },
  methods: {
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
      },
      switchNew(){
          this.popularClicked = 0;
          this.newClicked = 1;
      },
      
      convertWeather(i){
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
      }

  },
   created () {
       console.log(this.feeds.length)
        // if(this.feeds.length === 0){
            console.log(11111111111)
            this.$store.dispatch('getTodayPopular')
        // }
   },
    
}
</script>

<style scoped>
.style-btn{
    width: 60px;
    height: 60px;
    padding: 10px 30px;
}

.style-order{
    color: #aaaaaa;
    font-size: 15px;
}

#popular_order{
    margin-right: 10%;
}

.order-flex{
    /* vertical-align: middle; */
}

.btn-flex{
    margin-left: 20%;
}

/* grid css */
.post-image {
    width : 380px;
    height : 380px;
}

* {
    text-align: start;
    padding: 0;
}

/* list css */
.user_image {
  width: 40px;
  height: 40px;
  border-radius: 40px;
  margin-right: 7px;
}

.user-nickname, .comment-nickname, .hashtag{
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
  color: purple;
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

</style>
