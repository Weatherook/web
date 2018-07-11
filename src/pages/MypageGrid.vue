<template>
    <v-container grid-list-md > 
        
        <v-layout row wrap>
          <v-flex sm6 md6 lg6 m v-for = "item in userInfos.data" :key= "item">
            <img :src="item.board_img" class="post_image" @click.stop="showFeed = true">
          </v-flex>
        </v-layout>
        
        <v-dialog v-model="showFeed" max-width="1000" max-height="200">
            <FeedDetail></FeedDetail>
        </v-dialog>

    </v-container>
</template>

<script>
import {mapGetters} from 'vuex'
import FeedDetail from './FeedDetail'
export default {
    data() {
        return {
            showFeed : false
        }
    },
    components: {
        'FeedDetail': FeedDetail
    },
    computed: {
        ...mapGetters({
            userInfos: 'userInfo'
        })
    },
    created() {
        if(this.userInfos === null) {
            this.$store.dispatch('getUserInfo')
        }
    }
}

</script>

<style>
.post_image {
    /* width : 380px; */
    width: 80%;
    height : 100%;
    cursor: pointer;
}

</style>
