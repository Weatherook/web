<template>
    <v-app>
        <v-container grid-list-lg fluid>
         <v-layout row btns>

            <router-link to="/feed/following/grid">
                <img src="../assets/photo1@2x.png" alt="" class="view-icon grid">
            </router-link>

            <router-link to="/feed/following/list">
                <img src="../assets/photo2@2x.png" alt="" class="view-icon list">
            </router-link>
            
        </v-layout>
        <router-view/>

       </v-container>
    </v-app>
</template>


<script>
import { mapGetters } from 'vuex'

export default {
   
}
</script>

<style scoped>

#followingFeed{
    background-color: #FFFFFF;
    padding: 0%;
}

</style>
