<template>
  <v-container fluid grid-list-xs>
    <v-layout row wrap v-for="i in 5" :key="i">
      <v-flex xs12 sm6 offset-sm3 feed-container>
        <v-layout row wrap user-info align-center>
          <img src="../assets/zezudo.jpg" class="user_image">
          <span class="user-nickname">lc.e_y</span>
          <v-spacer></v-spacer>
          <v-flex xs1 sm1 md1>
            <img src="../assets/heart@2x.png" class="heart-image" @click="heart_click(i)">
          </v-flex>
          <span class="likecount">382</span>
        </v-layout>

        <v-flex pa-0>
          <img src="../assets/zezudo.jpg" alt="" class="feed-image">
        </v-flex>

        <v-layout row xs12 sm6 md6 pa-0 ml-1>
          <!-- date, weather, temperature!! -->
          <span class="purple-text">7월 25일</span>
          <span class="purple-text">맑음</span>
          <span class="purple-text">25/31</span>
          <v-spacer></v-spacer>
          <v-flex row xs1 sm1 md1 lg1 pa-0 mr-1>
            <img src="../assets/photo_menu@2x.png" class="see-more" @click.stop="detail_flag = true">
          </v-flex>

          <v-dialog v-model="detail_flag" max-width="350px" max-height="60px">
            <DetailMenu></DetailMenu>
          </v-dialog>            

        </v-layout>

        <v-layout row wrap>
          <v-flex column xs12 sm12 md12 fluid ml-1>
            <div class="feed-content">여기느 설명설명 설명부분</div>
            <div class="hashtag">#해쉬태그 #해시태그</div>
          </v-flex>

          <v-flex xs12 sm12 md12 fluid ml-1>
            <v-flex pa-0 @click.stop="comment_flag = true" class="all-comment">
              <span>댓글 2개 모두보기</span>
            </v-flex>

            <v-dialog v-model="comment_flag" max-width="1000" max-height="200">
              <FeedDetail></FeedDetail>
            </v-dialog>

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

<script>
import DetailMenu from './Report'
import FeedDetail from './FeedDetail'
export default {
  data () {
    return {
      detail_flag : false,
      heart_flag : false,
      comment_flag : false
    }
  },
  components: {
        'DetailMenu': DetailMenu
    },
    methods: {
      heart_click (index) {
        var heart_image = document.getElementsByClassName("heart-image")[index-1];
        
        if(this.heart_flag == false) {
          this.heart_flag = true;
          heart_image.src = "../../static/home/heart2@2x.png";
        } else {
          this.heart_flag = false;
          heart_image.src="../../static/home/heart@2x.png";
        }
      }
    },
    components : {
      'FeedDetail' : FeedDetail
    }
    
}
</script>

<style scoped>
* {
    text-align: start;
    padding: 0;
}

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
  color: #741DFF;
  font-weight: bold;
  margin-right: 10px;
}

.feed-container {
  background-color: white;
  margin-bottom: 20px;
}

.user-info {
  height: 60px;
  padding: 0 20px;
}

.heart-image {
  width: 110%;
  height: auto;
  cursor: pointer;
}

.comment-container {
    margin-bottom: 10px;
}

.input-comment {
    color: lightgrey;
}

.see-more {
  width: 80%;
  cursor: pointer;
}

.all-comment {
  cursor: pointer;
  color : lightgray;
}

</style>