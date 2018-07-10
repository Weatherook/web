<template>
    <v-card>
        <v-container grid-list-xs fluid>
          <v-layout row wrap>
            <v-flex>
               <v-carousel>
                    <v-carousel-item v-for="(pages,index) in followingPages" :key="index">
                        {{ pages }}
                        <v-layout row wrap>
                        <v-flex column user-item v-for="(following,i) in followings" :key="i" style="display:inline;">
                                <img :src="followings[index*24+i].img" class="user_image">
                                <!-- {{ (pages-1)*24+(following -((pages-1)*24)) }} -->
                                {{ i }}
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
            var pages = Math.ceil(this.followings.length / 24)
            console.log(pages)
            // this.pages = pages;
            // var start = pages 
            // console.log(start);
            return pages
        },
       
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

.user-item {
    text-align: center;
    font-weight: bold;
    width: 200px;
}

</style>
