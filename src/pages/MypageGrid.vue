<template>
    <v-container grid-list-md > 
    <!-- v-for="post in posts" :key="post.post_id" -->
        <v-layout row wrap>
          <v-flex sm6 md6 lg6 v-for = "i in 5" :key= "i"  @click.stop="showFeed = true">
            <img src="../assets/zezudo.jpg" alt="" class="post_image">
          </v-flex>
        </v-layout>

        <!-- <FeedDetail v-if="this.showFeed" @close="showFeed = false">
            <h3 slot="header">custom header</h3>
        </FeedDetail> -->

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
    width : 380px;
    height : auto;
    cursor: pointer;
}

</style>
