<template>
     <v-app>
        <v-container grid-list-lg fluid>
            
            <v-layout row> 
                <v-flex btn-flex>
                    <button id="grid-btn" v-on:click="switchGrid"><img src="/static/home/photo1@2x.png" class="style-btn"></button>
                    <button id="list-btn" v-on:click="switchList"><img src="/static/home/photo2@2x.png" class="style-btn"></button>
                </v-flex>
               
                <v-spacer></v-spacer>
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
                    <v-layout row wrap v-for="i in 5" :key="i">
                    <v-flex xs12 sm6 offset-sm3 feed-container>
                        <v-layout row wrap user-info align-center>
                        <img src="../assets/zezudo.jpg" alt="" class="user_image">
                        <span class="user-nickname">lc.e_y</span>
                        <v-spacer></v-spacer>
                        <v-btn flat icon>
                            <img src="../assets/heart@2x.png" alt="" class="likeimage">
                        </v-btn>
                        <span class="likecount">382</span>
                        </v-layout>

                        <v-flex pa-0>
                        <img src="../assets/zezudo.jpg" alt="" class="feed-image">
                        </v-flex>

                        <v-flex row xs12 sm6 md6 pa-0 ml-1>
                        <!-- date, weather, temperature!! -->
                        <span class="purple-text">7월 25일</span>
                        <span class="purple-text">맑음</span>
                        <span class="purple-text">25/31</span>
                        </v-flex>

                        <v-layout row wrap>
                        <v-flex column xs12 sm12 md12 fluid ml-1>
                            <div class="feed-content">여기느 설명설명 설명부분</div>
                            <div class="hashtag">#해쉬태그 #해시태그</div>
                        </v-flex>

                        <v-flex xs12 sm12 md12 fluid ml-1>
                            <span class="comment-all">댓글 2개 모두보기</span>
                            <!-- for loop || 2개만? -->
                            <div class="comment-container">
                            <span class="comment-nickname">minkyoe</span>
                            <span class="comment-content">배아파바배아파아배아파</span>
                            </div>

                            <v-flex row wrap xs12 sm12 md12 pa-0>
                                <img src="../assets/zezudo.jpg" alt="" class="user_image">
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
      }
  }
    
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
  height: auto;
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
