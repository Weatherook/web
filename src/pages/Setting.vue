<template>
    <v-app id="setApp">
        <v-container row column wrap id="setCon">
            <v-layout id="setLay">
                <v-flex>

                    <v-flex style="margin-top:5%;margin-bottom:2%;" >
                        <img id="profileface" src="../assets/profileface.png" style="margin-bottom:2%">
                        <button id="editPhoto">사진 수정</button>
                    </v-flex>
                    

                    <v-flex row wrap id="inputIDCon" style="margin-bottom:2%;padding-bottom:1%">
                        <h3 id="ID">아이디</h3>
                        <input type="text" id="inputID">
                    </v-flex>

                    <v-content id="inputIntroCon" style="margin-bottom:2%;padding-bottom:1%">
                        <h3 id="Introduce">글</h3>
                        <input type="text" id="inputIntro">
                    </v-content>

                    <h3 style="color:#555555;font-weight:bold;margin-left:15%;margin-bottom:3%">개인정보</h3>

                    <v-layout row wrap id="inputAgeCon" style="width:50%;margin-left:15%;margin-bottom:2%">
                        <div class="middle" style=" display: flex; align-items: center; width:23%;padding-bottom:1%"> 
                            <h3 style="color:#555555;display:inline;margin-right:10%;">연령</h3>
                            <img src="../assets/top_divideline.png" width="5px" height="30px">
                        </div>
                       
                        <input type="text" id="inputAge" style="width:50%;">
                    </v-layout>

                    <v-flex id="inputBodyCon" style="margin-bottom:2%">
                        <v-layout row wrap id="inputHeightCon" style="width:35%;margin-right:5%;margin-left:15%;float:left;">
                            <div class="middle" style=" display: flex; align-items: center; width:20%;padding-bottom:1%">
                                <h3 style="color:#555555;display:inline;margin-right:10%">키</h3>
                                <img src="../assets/top_divideline.png" width="5px" height="30px">
                            </div>
                            
                            <input type="text" id="inputHeight" style="width:50%;padding-bottom:1%">
                        </v-layout>

                        <v-layout row wrap id="inputWeightCon" style="width:35%;margin-right:15%">
                            <div class="middle" style=" display: flex; align-items: center; width:37%;padding-bottom:1%">
                                <h3 style="color:#555555;display:inline;margin-right:10%">몸무게</h3>
                                <img src="../assets/top_divideline.png" width="5px" height="30px">
                            </div>
                            
                            <input type="text" id="inputWeight" style="width:50%;">
                        </v-layout>
                    </v-flex>
                  

                    <v-content id="clickStyleCon" ma-0 style="margin-left:15%;margin-right:10%">
                        <div class="middle" style=" display: flex; align-items: center; width:50%; margin-bottom:2%;">
                            <h3 style="color:#555555;display:inline;margin-right:3%">스타일</h3>
                            <img src="../assets/top_divideline.png" width="5px" height="30px"> 
                        </div>
                        

                        <v-layout row wrap text-xs-center>
                            <v-flex row wrap xs3 sm3 md3 lg3 class="style-btn" v-for= "style in styleArray" :key="style" v-on:click="switchFlag" style="text-align:center;">
                                    {{ style }}
                            </v-flex>
                           

                        </v-layout>
                    </v-content>

                </v-flex>


            </v-layout>
        </v-container>
    </v-app>
    
</template>

<script>
export default {
      data () {
        return {
            styleArray: [
               "빈티지", "스트릿", "클래식", "모던", "캐쥬얼", "유스", "엘레강스", "댄디", "로맨틱", "그 외"
            ],
            styleFlagArray: [
                { title: "빈티지", flag: false },
                { title: "스트릿", flag: true },
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
            }
            else {
                this.styleFlagArray[this.styleArray.indexOf(e.toElement.innerText)] = false;
                clicked_btn[this.styleArray.indexOf(e.toElement.innerText)].style.background = "#FFFFFF";
                clicked_btn[this.styleArray.indexOf(e.toElement.innerText)].style.borderColor = "#aaaaaa";
                clicked_btn[this.styleArray.indexOf(e.toElement.innerText)].style.color = "#aaaaaa";
            }
        }
    }

}
</script>

<style scoped>
#setApp {
    background: #f7f7f7;
}
#setLay{
    width: 40%;
    height: 80%;
    border: 1px solid #cbcbcb;
    background: white;
    display:block;
    margin: 0 auto;
}
#profileface, #editPhoto{
    display:block;
    margin: 0 auto;    
}
#inputIDCon, #inputIntroCon{
    display:block;
    margin: 0 auto;
    width:70%;
    border-bottom:1px solid #cbcbcb;
}
#inputAgeCon, #inputHeightCon, #inputWeightCon{
    width:20%;
    border-bottom:1px solid #cbcbcb;
}

#inputID, #inputIntro{
    margin-right: 10%;
}
#ID, #Introduce{
    display: inline;
    margin-left: 10%;
    margin-bottom: 5%;
    color: #707070;
}
#ID{
    margin-right: 2%;
}
#Introduce{
    margin-right: 10%;
}

#profileface{
    
}
#editPhoto{
    color: #741dff;
}

.style-btn {
  -webkit-border-radius: 36;
  -moz-border-radius: 36;
  border-radius: 36px;
  font-family: Arial;
  color: #aaaaaa;
  background: #ffffff;
  padding: 10px 20px 10px 20px;
  border: solid #aaaaaa 0.8px;
  margin-bottom: 1%;
  text-decoration: none;
  height: 30px;
  margin-right: 5%;
}


.middle{
    /* display: flex;
    align-items: center;
    width#ffffff/
    /* margin: 0%; */
}
</style>
