<template>
    <v-container fluid grid-list-lg >
        <v-layout column align-center>
          <img src="../assets/zezudo.jpg" alt="" class="user_image">
          <div class="user_id">lc.e_y</div>
          <div class="user_status">은영이 웨더룩룩룩</div>
        </v-layout>

        <v-layout row wrap>
          <v-flex column wrap>
            <div class="num_text">35</div>
            게시물
          </v-flex>
          <v-flex column wrap>
            <div class="num_text">35</div>
            팔로워
          </v-flex>
          <v-flex column wrap>
            <div class="num_text">35</div>
            팔로잉
          </v-flex>
        </v-layout>

<!-- v-for="post in posts" :key="post.post_id" -->
        <v-layout row wrap>
          <v-flex sm6 md6 lg6 offset-lg-6 v-for = "i in 5" :key="i">
            
                <img src="../assets/zezudo.jpg" alt="" class="post_image">
            
          </v-flex>
        </v-layout>
    </v-container>

</template>

<script>
export default {

}
</script>

<style scoped>
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

.post_image {
    width : 50%;
    height : auto;
}

</style>
