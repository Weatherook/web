<template>
    <v-card>
        <v-container grid-list-xs fluid>
          <v-layout row wrap>
            <v-flex xs6 sm6 md6 lg6>
                <img src="../assets/zezudo.jpg" class="feed-image">
            </v-flex>

            <v-flex row wrap xs6 sm6 md6 lg6 pl-3 pt-3 pr-3>
                <v-layout row>
                    <span class="purple-text">7월 25일</span>
                    <span class="purple-text">맑음</span>
                    <span class="purple-text">25/31</span>
                    <v-spacer></v-spacer>
                    <v-flex xs1 sm1 md1 lg1 mr-4>
                        <img src="../assets/photo_menu@2x.png" class="see_more">
                    </v-flex>

                </v-layout>
                <v-flex xs12 sm12 md12 lg12 mt-2 feed-content>
                게시글 내용내용내욘내용
                </v-flex>
                <v-flex xs6 sm6 md6 lg6 mt-1 comment-count>
                  댓글 5200개
                </v-flex>

                <v-layout row wrap xs12 sm12 md12 lg12 comments-container>
                    <!-- 댓글 -->
                    <v-layout row wrap comment v-for="i in 10" :key="i" >
                        <v-flex xs2 sm2 md2 lg2 comment-user>
                            minkyoe
                        </v-flex>
                        <v-flex row wrap xs9 sm9 md9 lg9 ml-2>
                            은영아 제주도야? 나는 마우스 샀어~많이 길게 길게길게
                        </v-flex>
                    </v-layout>
                </v-layout>

                <v-layout row wrap align-center>
                    <img src="../assets/zezudo.jpg" alt="" class="user_image">
                    <v-flex row wrap xs10 sm10 md10 lg10 pa-0>
                        <v-text-field pa-0 ma-0 placeholder="댓글..." color="none"></v-text-field>
                    </v-flex>
                </v-layout>

            </v-flex>

          </v-layout>
        </v-container>
    </v-card>
</template>

<script>
export default {

}
</script>

<style>

.feed-image {
    width: 100%;
}

.purple-text {
    color: #741DFF;
    margin-right: 15px;
}

.feed-content {
    color: #707070;
}

.comment-count {
    color: #AAAAAA;
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
