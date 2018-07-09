<template>
    <v-container grid-list-md > 
        
        <v-layout row wrap>
          <v-flex sm6 md6 lg6 m v-for = "i in 5" :key= "i">
            <img src="../assets/zezudo.jpg" alt="" class="post_image" @click.stop="showFeed = true">
          </v-flex>
        </v-layout>
        
        <v-dialog v-model="showFeed" max-width="1000" max-height="200" color="white">
            <FeedDetail></FeedDetail>
        </v-dialog>

    </v-container>
</template>

<script>
import FeedDetail from './FeedDetail'
export default {
    data() {
        return {
            showFeed : false
        }
    },
    components: {
        'FeedDetail': FeedDetail
    }
}

</script>

<style>
.post_image {
    /* width : 380px; */
    width: 80%;
    height : auto;
    cursor: pointer;
}

</style>
