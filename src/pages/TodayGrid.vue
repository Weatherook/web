<template>
    <v-container grid-list-md > 
    <!-- v-for="post in posts" :key="post.post_id" -->
        <v-layout row wrap>
          <v-flex sm6 md6 lg6 v-for = "i in 5" :key= "i">
            <img src="../assets/zezudo.jpg" alt="" class="post_image">
          </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {

}
</script>

<style>
.post_image {
    width : 380px;
    height : auto;
}

</style>
