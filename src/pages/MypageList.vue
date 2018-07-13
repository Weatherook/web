<template>
  <v-container fluid grid-list-xs v-cloak>
    <v-layout row wrap v-for="(item, i) in userInfos.data" :key="i">
      <v-flex xs12 sm6 offset-sm3 feed-container>
        <v-layout row wrap user-info align-center>
          <img v-if="item.user_img == null" src="../assets/top-profileface@2x.png" class="user_image">
          <img v-else :src="item.user_img" class="user_image">
          <span class="user-nickname"> {{ item.user_id }} </span>
          <v-spacer></v-spacer>
          <v-flex xs1 sm1 md1 pa-0 ma-0 pt-1 heart-container>
            <img v-if="item.like_flag == 1" src="../assets/heart2@2x.png" class="heart-image" @click="heart_click(i, item)">
            <img v-else src="../assets/heart@2x.png" class="heart-image" @click="heart_click(i, item)">
          </v-flex>
          <span class="likecount">{{ item.like_cnt }}</span>
        </v-layout>

        <v-flex pa-0>
          <img :src="item.board_img" class="feed-image">
        </v-flex>

        <v-layout row xs12 sm6 md6 pa-0 ml-1>
          <!-- date, weather, temperature!! -->
          <span class="purple-text">{{ convertDate(item.board_date) }}</span>
          <span class="purple-text"> {{ weather_convert(item.board_weather) }} </span>
          <span class="purple-text">{{item.board_temp_min}}/{{item.board_temp_max}}</span>
          <v-spacer></v-spacer>
          <v-flex row xs1 sm1 md1 lg1 pa-0 mr-1>
            <img src="../assets/photo_menu@2x.png" class="see-more" @click.stop="detail_flag = true">
          </v-flex>

          <v-dialog v-model="detail_flag" max-width="350px" max-height="60px">
            <DetailMenu class="detail_menu"></DetailMenu>
          </v-dialog>            

        </v-layout>

        <v-layout row wrap>
          <v-flex column xs12 sm12 md12 fluid ml-1 pa-0 pt-1 pl-2>
            <div class="feed-content"> {{item.board_desc}} </div>
          </v-flex>

          <v-flex xs12 sm12 md12 fluid ml-1>
            <v-flex pa-0 @click.stop="comment_flag = true" class="all-comment" @click="clickedFeed(item)">
              <span>댓글 {{ item.comment_cnt }}개 모두보기</span>
            </v-flex>

            <v-dialog v-model="comment_flag" max-width="1000" max-height="200">
              <FeedDetail :propsdata="propsItem" :propscommentdata="propsComment"></FeedDetail>
            </v-dialog>

            <!-- for loop || 2개만? -->
            <v-flex class="comment-container" pa-0 mt-1 v-for="comment in item.comment_list" :key="comment">
              <span class="comment-nickname"> {{comment.comment_id}} </span>
              <span class="comment-content"> {{comment.comment_desc}} </span>
            </v-flex>

            <v-layout row wrap ma-1>
                <img v-if="item.user_img == null" src="../assets/top-profileface@2x.png" class="user_image">
                <img v-else :src="item.user_img" class="user_image">
                <v-flex row class="input-comment" @click.stop="comment_flag = true" @click="clickedFeed(item)">댓글...</v-flex>
            </v-layout>
            
          </v-flex>
        </v-layout>

      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import {mapGetters} from 'vuex'
import DetailMenu from './Report'
import FeedDetail from './FeedDetail'
export default {
  data () {
    return {
      detail_flag : false,
      heart_flag : [],
      comment_flag : false,
      propsItem : null,
      propsComment : null
    }
  },
  components: {
        'DetailMenu': DetailMenu,
        'FeedDetail' : FeedDetail,
    },
    methods: {
      heart_click (index, board) {
        var heart_image = document.getElementsByClassName("heart-image")[index];
        var heart_cnt = document.getElementsByClassName("likecount")[index];
      
        var object = {
          board_idx: board.board_idx,
          token: this.token
        }
        
        if(this.heart_flag[index] == 0) {
          this.heart_flag[index] = true;
          heart_image.src = "../../static/home/heart2@2x.png";
          this.$store.dispatch('changeLike', object)
          heart_cnt.innerText = Number(heart_cnt.innerText)+1;
        } else {
          this.heart_flag[index] = false;
          heart_image.src="../../static/home/heart@2x.png";
          this.$store.dispatch('changeLike', object)
          heart_cnt.innerText = Number(heart_cnt.innerText)-1;
        }
      },
      convertDate(dateString){
          var originDate = dateString
          var strArray = originDate.split('-')
          var month = strArray[0]
          var date = strArray[1]
          var convertDate = String(month) + "월 " + String(date) + "일"
          return convertDate
      },
      weather_convert (weather_num) {
        switch (weather_num) {
          // 0:맑음, 1:구름 조금 2:구름 많음, 3:흐림 4:비 5:비/눈 6:눈
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
      clickedFeed (item) {
        this.propsItem = item;
        var payload = {
          board_idx: item.board_idx,
          token: this.token
        }
        this.$store.dispatch('getFeedComment', payload);
        this.propsComment = this.commentItems;
      }
    },
    computed: {
        ...mapGetters({
            userInfos: 'userInfo',
            commentItems: 'feedCommentInfo',
            token: 'tokenInfo'
        })
    },
    created() {
        if(this.userInfos === null) {
            this.$store.dispatch('getUserInfo')
        }
        for(var i = 0; i<this.userInfos.data.length; i++) {
          this.heart_flag.push(this.userInfos.data[i].like_flag)
        }
    }
    
}
</script>

<style scoped>
* {
    text-align: start;
    padding: 0;
}

[v-cloak] {
  display: none;
}


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

.heart-container {
  text-align: center;
}

.heart-image {
  width: 2.3vw;
  height: auto;
  cursor: pointer;
}

.comment-container {
    margin-bottom: 10px;
}

.input-comment {
    color: lightgrey;
    vertical-align: middle;
}

.see-more {
  width: 80%;
  cursor: pointer;
}

.all-comment {
  cursor: pointer;
  color : lightgray;
}

.detail_menu {
  text-align: center;
}

</style>