<template>
    <v-container grid-list-md v-cloak> 
        
        <v-layout row wrap ml-5>
          <v-flex sm6 md6 lg6 m v-for = "item in userInfos.data" :key= "item">
            <img :src="item.board_img" class="post_image" @click.stop="showFeed = true" @click="clickedFeed(item)">
          </v-flex>
        </v-layout>
        
        <v-dialog v-model="showFeed" max-width="1000" max-height="200">
            <FeedDetail :propsdata="propsItem" :propscommentdata="propsComment"></FeedDetail>
        </v-dialog>

    </v-container>
</template>

<script>
import {mapGetters} from 'vuex'
import FeedDetail from './FeedDetail'
export default {
    data() {
        return {
            showFeed : false,
            propsItem : null,
            propsComment : null
        }
    },
    components: {
        'FeedDetail': FeedDetail
    },
    computed: {
        ...mapGetters({
            userInfos: 'userInfo',
            commentItems: 'feedCommentInfo'
        })
    },
    created() {
        this.$store.dispatch('getUserInfo')
    },
    methods: {
        clickedFeed (item) {
            this.propsItem = item;
            this.$store.dispatch('getFeedComment', item.board_idx);
            this.propsComment = this.commentItems;
        }
    }
}

</script>

<style>
[v-cloak] {
  display: none;
}

.post_image {
    /* width : 380px; */
    width: 80%;
    height : 100%;
    cursor: pointer;
}


</style>
