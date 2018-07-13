<template>
    <v-container grid-list-md v-cloak> 
        
        <v-layout row wrap ml-5>
          <v-flex sm6 md6 lg6 m v-for = "item in userInfos.data" :key= "item">
            <img :src="item.board_img" class="post_image" @click="clickedFeed(item)">
          </v-flex>
        </v-layout>
        
        <v-dialog v-model="showFeed" max-width="1000" max-height="200">
            <FeedDetail :propsdata="propsItem"></FeedDetail>
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
            other_id: ""
        }
    },
    components: {
        'FeedDetail': FeedDetail
    },
    computed: {
        ...mapGetters({
            userInfos: 'userInfo',
            commentItems: 'feedCommentInfo',
            token: 'tokenInfo'
        })
    },
    created() {
        var object = {
            other_id : this.otherId,
            token: this.token
        }
        this.$store.dispatch('getUserInfo', object)
    },
    methods: {
        clickedFeed (item) {
            this.propsItem = item;
            var payload = {
                board_idx: item.board_idx,
                token: this.token
            }
            
            this.$store.dispatch('getFeedComment', payload);
            this.showFeed = true;
            
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
    width: 450px;
    height : 450px;
    cursor: pointer;
}


</style>
