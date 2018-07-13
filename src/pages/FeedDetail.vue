<template>
    <v-card v-cloak>
        <v-container grid-list-xs fluid>
          <v-layout row wrap>
            <v-flex xs6 sm6 md6 lg6>
                <img :src="propsdata.board_img" class="feed-image">
            </v-flex>

            <v-flex row wrap xs6 sm6 md6 lg6 pl-3 pt-3 pr-3>
                <v-layout row>
                    <span class="purple-text"> {{ convertDate() }}</span>
                    <span class="purple-text"> {{ convertWeather() }} </span>
                    <span class="purple-text">{{ propsdata.board_temp_min }}/{{ propsdata.board_temp_max }}</span>
                    <v-spacer></v-spacer>
                    <v-flex xs1 sm1 md1 lg1 mr-4>
                        <img src="../assets/photo_menu@2x.png" class="see_more" @click.stop="detail_flag = true">
                    </v-flex>

                    <v-dialog v-model="detail_flag" max-width="350px" max-height="60px">
                        <DetailMenu class="detail_menu"></DetailMenu>
                    </v-dialog>  

                </v-layout>
                <v-flex xs12 sm12 md12 lg12 mt-2 feed-content>
                {{ propsdata.board_desc }}
                </v-flex>
                <v-flex xs6 sm6 md6 lg6 mt-1 comment-count>
                  댓글 {{ propsdata.comment_cnt }}개
                </v-flex>

                <v-layout column comments-container v-cloak>
                    <!-- 댓글 -->
                    <v-layout row xs12 sm12 md12 lg12 comment v-for="comment in this.$store.state.feedComment" :key="comment">
                        <router-link to="/mypage/grid">
                            <v-flex row xs3 sm3 md3 lg3 comment-user>
                                {{ comment.comment_id }}
                            </v-flex>
                        </router-link>
                        <v-flex row wrap xs8 sm8 md8 lg8 ml-1>
                            {{ comment.comment_desc }}
                        </v-flex>
                    </v-layout>
                </v-layout>

                <v-layout row wrap align-center>
                    <img v-if="propsdata.user_img" :src="propsdata.user_img" alt="" class="user_image">
                    <img v-else src="../assets/top-profileface@2x.png" class="user_image">
                    <v-flex row wrap xs10 sm10 md10 lg10 pa-0>
                        <v-text-field pa-0 ma-0 placeholder="댓글..." color="none" v-model="input_comment" @keyup.enter="register_comment"></v-text-field>
                    </v-flex>
                </v-layout>

            </v-flex>

          </v-layout>
        </v-container>
    </v-card>
</template>

<script>
import DetailMenu from './Report'
import {mapGetters} from 'vuex'
export default {
    data () {
        return {
            detail_flag: false,
        }
    },
    props: ['propsdata'],
    computed: {
        ...mapGetters({
            commentItems: 'feedCommentInfo',
            token: 'tokenInfo'
        })
    },
    methods: {
        register_comment() {
            var payload = {
                board_idx: this.propsdata.board_idx,
                comment_desc: this.input_comment 
            }
            var object = {
                'token': this.token,
                'payload': payload
            }
            this.$store.dispatch('registerComment', object);
            this.input_comment='';
        },
        convertDate(){
          var originDate = this.propsdata.board_date
          var strArray = originDate.split('-')
          var month = strArray[0]
          var date = strArray[1]
          var convertDate = String(month) + "월 " + String(date) + "일"
          return convertDate
      },
       convertWeather(){
        var weather = this.propsdata.board_weather
        switch(weather){
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
    }
    },
    components: {
        'DetailMenu': DetailMenu
    },
    created() {
    },
}
</script>

<style>
/* * {
    text-align: start;
} */

[v-cloak] {
  display: none;
}

.feed-image {
    width: 450px;
    height: 450px;
}

.purple-text {
    color: #741DFF;
    margin-right: 15px;
}

.feed-content {
    color: #707070;
    text-align: start;
}

.comment-count {
    color: #AAAAAA;
    text-align: start;
}

.comment-user {
    font-weight: bold;
    color: #707070;
}

.comments-container {
    max-width: 450px;
    max-height: 320px;
    overflow-y: scroll;
    overflow-x: hidden;
    text-align: start;
}

.comment {
    max-height: 100px;
}

.user_image {
    width: 35px;
    height: 35px;
    border-radius: 35px;
    margin-right: 7px;
}

.see_more {
    width: 50px;
}

</style>
