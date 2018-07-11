<template>
    <v-app>
        <v-container grid-list-lg fluid back-color>
        <v-layout column align-center>
            
          <img v-if="userInfos.showUserPageResult[0].user_img == null" src="../assets/profileface@2x.png" class="user_image">
          <img v-else :src="userInfos.showUserPageResult[0].user_img" class="user_image">
          <v-flex class="user_id">{{ userInfos.showUserPageResult[0].user_id }}</v-flex>
          <v-flex>{{ userInfos.showUserPageResult[0].user_desc }}</v-flex>
        </v-layout>

        <v-layout row num-width>
          <v-flex column>
            <div class="num_text"> {{ userInfos.showBoardNumResult[0].board_num }} </div>
            게시물
          </v-flex>
          <v-flex column>
            <div class="num_text"> {{ userInfos.showFollowerNumResult[0].follower }} </div>
            팔로워
          </v-flex>
          <v-flex column following-container @click="showFollowing = true">
            <div class="num_text"> {{ userInfos.showFollowingNumResult[0].following }} </div>
            팔로잉
          </v-flex>
        </v-layout>


            <v-dialog v-model="showFollowing" max-width="800" >
               <FollowingDetail></FollowingDetail>
            </v-dialog>    

        <v-layout row btns>

            <router-link to="/mypage/grid">
                <img src="../assets/photo1@2x.png" alt="" class="view-icon grid">
            </router-link>

            <router-link to="/mypage/list">
                <img src="../assets/photo2@2x.png" alt="" class="view-icon list">
            </router-link>

            <v-flex order-btn>
                <button>인기순</button>
            </v-flex>

              <v-flex order-btn>
                <button>최신순</button>
            </v-flex>
            
        </v-layout>
        <router-view></router-view>
       
    </v-container>
    
    </v-app>
</template>

<script>
import {mapGetters} from 'vuex'
import FollowingDetail from './FollowingDetail'
export default {
    data() {
        return{
            showFollowing: false
        }
    },
    components: {
        'FollowingDetail': FollowingDetail
    },
    computed: {
        ...mapGetters({
            userInfos: 'userInfo',
            token: 'tokenInfo'
        })
    },
    created() {
        this.$store.dispatch('getUserInfo',this.token)
    }

}



</script>

<style scoped>
* {
    text-align: center;
}

.back-color {
    background-color : #F7F7F7;
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
    color : #741DFF;
    font-size: 20px;
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

.following-container {
    cursor: pointer;
}

.order-btn {
    color: #000000;
}
</style>
