<template>
    <v-app>
        <v-container grid-list-lg fluid>
        <v-layout column align-center>
          <img src="../assets/zezudo.jpg" alt="" class="user_image">
          <div class="user_id">lc.e_y</div>
          <div class="user_status">은영이 웨더룩룩룩</div>
        </v-layout>

        <v-layout row num-width>
          <v-flex column>
            <div class="num_text">35</div>
            게시물
          </v-flex>
          <v-flex column>
            <div class="num_text">35</div>
            팔로워
          </v-flex>
          <v-flex column>
            <div class="num_text">35</div>
            팔로잉
          </v-flex>
        </v-layout>


        <v-layout row btns>

            <router-link to="/mypage/grid">
                <img src="../assets/photo1@2x.png" alt="" class="view-icon grid">
            </router-link>

            <router-link to="/mypage/list">
                <img src="../assets/photo2@2x.png" alt="" class="view-icon list">
            </router-link>
            
        </v-layout>
        <router-view></router-view>

<!-- v-for="post in posts" :key="post.post_id" -->
        <!-- <v-layout row wrap>
          <v-flex sm6 md6 lg6 v-for = "i in 5" :key="i">
            <img src="../assets/zezudo.jpg" alt="" class="post_image">
          </v-flex>
        </v-layout> -->
    </v-container>
    </v-app>
</template>

<script>
export default {

}
</script>

<style scoped>
* {
    background-color : #EDEDED;
    text-align: center;
}
.user_image {
    width : 100px;
    height: 100px; 
    border-radius: 100px;
}

.user_id {
    color : gray;
    font-weight: bold;
}

.num_text {
    font-weight: bold;
    color : purple;
}

.num-width {
    padding : 5px 20vw;

}


.view-icon {
    width : 30px;
    height: 30px;
}

.grid {
    margin-left : 200px;
}

.list {
    margin-left : 8px;
}

.btns {
    padding-top: 20px;
    padding-bottom : 20px;
    border-top: solid 1px gray;
}
</style>
