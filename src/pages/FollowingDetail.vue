<template>
    <v-card>
        <v-container grid-list-xs fluid>
          <v-layout row wrap>
            <v-flex>
               <v-carousel :cycle="false"> 
                    <v-carousel-item v-for="(pages,index) in followingPages" :key="index">
                        <v-layout row wrap following-container>
                        <v-flex sm2 md2 lg2 column user-item v-for="(following, i) in followings.slice(index*24, index*24+24)" :key="i">
                                <img :src="following.img" class="user_image">
                                <v-flex>{{following.name}}</v-flex>
                        </v-flex>

                        </v-layout>
                    </v-carousel-item>
                </v-carousel>
            </v-flex>

          </v-layout>
        </v-container>
    </v-card>
</template>

<script>
export default {
    data() {
        return {
            aIndex: 0,
            // pages: this.followings.length,
            followings: [ { name:"aaaaaaa", img: "https://pbs.twimg.com/profile_images/895654109700775938/MuR13dsu_400x400.jpg" }, 
                        { name:"aaaaaaa", img: "/static/profileface.png" }, 
                        { name:"aaaaaaa", img: "/static/profileface.png" }, 
                        { name:"aaaaaaa", img: "/static/profileface.png" },
                        { name:"aaaaaaa", img: "/static/profileface.png" },
                        { name:"aaaaaaa", img: "/static/profileface.png" },
                        { name:"aaaaaaa", img: "/static/profileface.png" },
                        { name:"aaaaaaa", img: "/static/profileface.png" }, 
                        { name:"aaaaaaa", img: "/static/profileface.png" }, 
                        { name:"aaaaaaa", img: "/static/profileface.png" }, 
                        { name:"aaaaaaa", img: "/static/profileface.png" },
                        { name:"aaaaaaa", img: "/static/profileface.png" },
                        { name:"aaaaaaa", img: "/static/profileface.png" },
                        { name:"aaaaaaa", img: "/static/profileface.png" },
                        { name:"aaaaaaa", img: "/static/profileface.png" }, 
                        { name:"aaaaaaa", img: "/static/profileface.png" }, 
                        { name:"aaaaaaa", img: "/static/profileface.png" }, 
                        { name:"aaaaaaa", img: "/static/profileface.png" },
                        { name:"aaaaaaa", img: "/static/profileface.png" },
                        { name:"aaaaaaa", img: "/static/profileface.png" },
                        { name:"aaaaaaa", img: "/static/profileface.png" },
                        { name:"aaaaaaa", img: "/static/profileface.png" }, 
                        { name:"aaaaaaa", img: "/static/profileface.png" }, 
                        { name:"aaaaaaa", img: "/static/profileface.png" }, 
                        { name:"ㅎㅇ", img: "../../static/home/bell1@2x.png" },
                        { name:"ㅂㅇ", img: "/static/profileface.png" },
                        { name:"ㅎ", img: "/static/profileface.png" },
                        { name:"ㅅ", img: "/static/profileface.png" },
                        { name:"ㅂㅇ", img: "/static/profileface.png" },
                        { name:"ㅋㅎ", img: "/static/profileface.png" },
                        { name:"ㅋㅎㅗ", img: "/static/profileface.png" } ] 
        }
    },
    computed: {
        followingPages (){
            var pages = Math.ceil(this.followings.length / 24)
            console.log(pages)
            return pages
        },
       
    },

}
</script>

<style>

.user_image{
    width: 80px;
    height: 80px;
    border-radius: 80px;
    display: inline;
}

.user-item {
    text-align: center;
    font-weight: bold;
    /* margin: 20px 10px; */
}

.following-container {
    text-align: center;
}
</style>
