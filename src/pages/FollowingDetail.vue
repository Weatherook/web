<template>
    <v-card>
        <v-container grid-list-xs fluid>
          <v-layout row wrap>
            <v-flex>
               <v-carousel>
                    <v-carousel-item v-for="(page,index) in followingPages" :key="index">
                        <v-flex v-for="(following,i) in followings" :key="i" style="display:inline;">
                                <img :src="following.img" class="user_image">
                                <h4 style="display:inline;">{{following.name}}</h4>
                        </v-flex>
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
                        { name:"aaaaaaa", img: "/static/profileface.png" },
                        { name:"aaaaaaa", img: "/static/profileface.png" },
                        { name:"aaaaaaa", img: "/static/profileface.png" },
                        { name:"aaaaaaa", img: "/static/profileface.png" },
                        { name:"aaaaaaa", img: "/static/profileface.png" },
                        { name:"aaaaaaa", img: "/static/profileface.png" }, ] 
        }
    },
    computed: {
        followingPages (){
            console.log(1111111111111111111)
            pages = this.followings.length % 24
            return pages
        }
    }

}
</script>

<style>

.user_image{
    width: 100px;
    height: 100px;
    border-radius: 100px;
    display: inline;
}


</style>
