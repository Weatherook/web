<template>
    <!-- <v-app id="setApp"> -->
        <v-container row column wrap>
            <v-flex id="setLay" sm6 md6 lg6 pa-4>
                <form @submit.prevent="modifyMypage">
                    <v-flex>
                        <img v-if="modiInfos.showUserResult[0].user_img" id="profileface" :src="modiInfos.showUserResult[0].user_img">
                        <img v-else-if="modiInfos.showUserResult[0].user_img == null" id="profileface" src="../assets/profileface.png">
                        <img v-else-if="img" id="profileface" :src="img">
                        <input type="file" id="editPhoto" :multiple="false" @change="onFileChange" accept="image/*" value="사진 수정"/>
                    </v-flex>
                    

                    <v-flex row id="inputIDCon" sm8 md8 lg8 mt-2>
                        <span id="ID">아이디</span>
                        <input type="text" id="inputID" :value="modiInfos.showUserResult[0].user_id">
                    </v-flex>

                    <v-flex id="inputIntroCon" sm8 md8 lg8 mt-3>
                        <span id="Introduce">글</span>
                        <input type="text" id="inputIntro" v-model="user_desc">
                        <!-- v-model="user_desc" -->
                    </v-flex>

                    <v-flex subMenu mt-5 sm8 md8 lg8> 개인정보</v-flex>

                    <v-flex sm8 md8 lg8 id="inputAgeCon"> 
                        <v-layout row>
                            <span class="subtitle-text">연령</span>
                            <img src="../assets/top_divideline.png" class="divide-line-image">
                            <input type="text" id="inputAge" v-model="user_age">
                        </v-layout>
                    </v-flex>

                    <v-flex sm8 md8 lg8 id="inputBodyCon">
                        <v-layout row wrap>
                            <v-flex sm4 md4 lg4>
                                <v-layout row id="inputHeightCon">
                                    <span class="subtitle-text">키</span>
                                    <img src="../assets/top_divideline.png" class="divide-line-image">
                                    <input type="text" id="inputHeight" class="input_height_weight" v-model="user_height">
                                </v-layout>
                            </v-flex>
                            <v-spacer></v-spacer>
                            <v-flex sm5 md5 lg5 ml-5>
                                <v-layout row id="inputWeightCon">
                                    <span class="subtitle-text">몸무게</span>
                                    <img src="../assets/top_divideline.png" class="divide-line-image">
                                    <input type="text" id="inputWeight" class="input_height_weight" v-model="user_weight">
                                </v-layout>
                            </v-flex>
                        </v-layout>
                    </v-flex>

                    <v-flex sm8 md8 lg8 id="inputStyleCon">
                        <span class="subtitle-text">스타일</span>
                        <img src="../assets/top_divideline.png" class="divide-line-image"> 
                        
                        <v-layout row wrap mt-2>
                            <v-flex row wrap xs3 sm3 md3 lg3 class="style-btn" v-for= "style in styleArray" :key="style" v-on:click="switchFlag">
                                {{ style }}
                            </v-flex>
                        </v-layout>
                    </v-flex>

                    <v-flex  sm3 md3 lg3 complete-btn>
                        <button type = "submit">완료</button>
                    </v-flex>
                </form>
                    
            </v-flex>
        </v-container>
    <!-- </v-app>   -->
</template>

<script>
import {mapGetters} from 'vuex'
export default {
      data () {
        return {
            img: null,
            file: null,
            user_stylelist: [],
            styleArray: [
               "빈티지", "스트릿", "클래식", "모던", "캐쥬얼", "유스", "엘레강스", "댄디", "로맨틱", "그 외"
            ],
            styleFlagArray: [
                { title: "빈티지", flag: false },
                { title: "스트릿", flag: false },
                { title: "클래식", flag: false },
                { title: "모던", flag: false },
                { title: "캐쥬얼", flag: false },
                { title: "유스", flag: false },
                { title: "엘레강스", flag: false },
                { title: "댄디", flag: false },
                { title: "로맨틱", flag: false },
                { title: "그 외", flag: false },
            ]
        }
    },
    methods: {
        switchFlag(e) {
            var clicked_btn = document.getElementsByClassName("style-btn");
            console.log(this.styleArray.indexOf(e.toElement.innerText))
        
            if(this.styleFlagArray[this.styleArray.indexOf(e.toElement.innerText)].flag === false) {
                this.styleFlagArray[this.styleArray.indexOf(e.toElement.innerText)].flag = true;
                clicked_btn[this.styleArray.indexOf(e.toElement.innerText)].style.background = "#aaaaaa";
                clicked_btn[this.styleArray.indexOf(e.toElement.innerText)].style.borderColor = "#aaaaaa";
                clicked_btn[this.styleArray.indexOf(e.toElement.innerText)].style.color = "#ffffff";
                this.user_stylelist.push(e.toElement.innerText)
            }
            else {
                this.styleFlagArray[this.styleArray.indexOf(e.toElement.innerText)] = false;
                clicked_btn[this.styleArray.indexOf(e.toElement.innerText)].style.background = "#FFFFFF";
                clicked_btn[this.styleArray.indexOf(e.toElement.innerText)].style.borderColor = "#aaaaaa";
                clicked_btn[this.styleArray.indexOf(e.toElement.innerText)].style.color = "#aaaaaa";
                this.user_stylelist.splice(this.user_stylelist.indexOf(e.toElement.innerText),1)
            }
        },
        onFileChange(event) {
            if(event.target.files[0]['type'].split('/')[0] === "image"){
                this.file = event.target.files[0]
                this.getImage(this.file)
            }
            
        },
        modifyMypage(){
            var data = new FormData()
        
            data.append('user_desc', this.user_desc);
            data.append('user_age', this.user_age);
            data.append('user_gender', this.user_gender);
            data.append('user_img', this.file);
            data.append('user_height', this.user_height);
            data.append('user_weight', this.user_weight);

            for(var i = 0; i < this.user_stylelist.length; i++) {
                data.append('user_stylelist[]', this.user_stylelist[i]);
            }
            
            var payload = {
                data : data,
                token : this.token
            }

            this.$store.dispatch('modifyMypage', payload);
        },
        getImage(file) {
            const fileReader = new FileReader()
            fileReader.onload = () => {
                this.img = fileReader.result
            }
            fileReader.readAsDataURL(file)
        }
    },
    computed: {
        ...mapGetters({
            modiInfos : 'modifyInfo',
            token: 'tokenInfo'
        })
    },
    created() {
        this.$store.dispatch('modiInfo', this.token);
        this.user_desc = this.modiInfos.showUserResult[0].user_desc;
        this.user_age = this.modiInfos.showUserResult[0].user_age;
        this.user_gender = this.modiInfos.showUserResult[0].user_gender;
        this.user_height = this.modiInfos.showUserResult[0].user_height;
        this.user_weight = this.modiInfos.showUserResult[0].user_weight;

    },
    mounted() {
        var clicked_btn = document.getElementsByClassName("style-btn");
    
        for(var i=0; i < this.modiInfos.style.length; i++){
            this.user_stylelist.push(this.modiInfos.style[i]);
            for(var j = 0; j < this.styleFlagArray.length; j++){
                if(this.styleFlagArray[j].title == this.modiInfos.style[i]){
                    this.styleFlagArray[j].flag = true;
                    clicked_btn[j].style.background = "#aaaaaa";
                    clicked_btn[j].style.borderColor = "#aaaaaa";
                    clicked_btn[j].style.color = "#ffffff";
                }
            }
        }
    },

}
</script>

<style scoped>
#setApp {
    background: #f7f7f7;
}
#setLay{
    height: 100%;
    border: 1px solid #cbcbcb;
    background: white;
    display:block;
    margin: 0 auto;
}
#profileface {
    width: 150px;
    height: 150px;
    border-radius: 150px;
}

#editPhoto {
    padding-left: 10%;
}

#profileface, #editPhoto{
    display:block;
    margin: 0 auto;    
}
#inputIDCon, #inputIntroCon{
    margin: 0 auto;
    border-bottom:1px solid #cbcbcb;
}

#inputBodyCon {
    margin: 0 auto;
}

#inputAgeCon, #inputHeightCon, #inputWeightCon {
    font-weight: bold;
    border-bottom:1px solid #cbcbcb;
    color:#555555;
    margin: 10px auto;
    text-align: center;
}

#inputStyleCon {
    color:#555555;
    margin: 10px auto;
}

#inputID, #inputIntro{
    width: 50%;
}
#ID, #Introduce{
    margin-left: 2%;
    color: #707070;
}
#ID{
    margin-right: 2%;
}
#inputIntro {
    margin-left: -3%;
}

#Introduce{
    margin-right: 10%;
}


#editPhoto{
    color: #741dff;
    font-weight: bold;
    margin-top: 10px;
}

.style-btn {
  -webkit-border-radius: 36;
  -moz-border-radius: 36;
  border-radius: 36px;
  color: #aaaaaa;
  background: #ffffff;
  border: solid #aaaaaa 0.8px;
  margin-bottom: 1%;
  text-decoration: none;
  height: 35px;
  margin-right: 5%;
  margin-bottom: 5px;
  text-align:center;
  line-height: 30px;
}

.subMenu {
    color:#555555;
    margin: 0 auto;
}

.divide-line-image {
    width: 5px;
    height: 20px;
    margin-top: 5px;
}

.subtitle-text {
    margin-top: 5px;
    font-weight: bold;
}

.input_height_weight {
    width: 30px
}

.complete-btn {
    text-align: center;
  -webkit-border-radius: 36;
  -moz-border-radius: 36;
  border-radius: 36px;
  color: #741DFF;
  padding: 10px 20px 10px 20px;
  border: solid #741DFF 1px;
  text-decoration: none;
  margin: 0 auto;
}
</style>
