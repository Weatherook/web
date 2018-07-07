<template>
    <v-container grid-list-sm back fluid>
        <v-flex column wrap mr-5 sm5 md5 lg5 offset-lg6 offset-md6 offset-sm6 login-container>
            <v-flex xs2 sm2 md2 lg1 offset-lg6 offset-sm4>
              <img src="../assets/logo_korea@2x.png" alt="" class="logo">
            </v-flex>

            <v-layout column wrap v-if="this.signUpPageFlag == 0">
                <v-flex offset-lg5 offset-sm3>
                    <form>
                        <v-flex>
                            <v-text-field placeholder="아이디" color="none"></v-text-field>
                            <v-text-field placeholder="비밀번호" color="none"></v-text-field>
                        </v-flex>
                    
                        <v-flex login mb-3>
                            로그인
                        </v-flex>
                    </form>
                </v-flex>

            
                <v-flex offset-lg5 offset-sm3 join v-on:click="signUpPage">
                    회원가입
                </v-flex>
            </v-layout>

            <v-layout column wrap v-else>
              <v-flex offset-lg5 offset-sm3>
                    <form>
                        <v-flex>
                            <v-text-field placeholder="아이디" color="none"></v-text-field>
                            <v-text-field placeholder="비밀번호" color="none"></v-text-field>
                            <v-text-field placeholder="비밀번호 확인" color="none"></v-text-field>
                        </v-flex>

                        <a href="#select-part">
                            <v-flex sm3 md3 lg3 offset-sm4 offset-md4 purple-btn>다음</v-flex>
                        </a>

                        <v-layout column wrap user-additional-info>
                            <a name="select-part"></a>
                          <v-flex reco-text>
                            나에게 맞는 코디 추천을 
                          <br>
                            정보를 제공해주세요
                          </v-flex>

                          <v-flex mt-5 reco-text>
                            성별
                          </v-flex>

                          <v-flex row wrap sex-info>
                            <img src="../assets/join_woman_no@2x.png" alt="">
                            
                            <img src="../assets/join_man_no@2x.png" alt="">
                          </v-flex>

                          <v-flex column offset-sm4 offset-md4 hw-info>
                              <v-flex sm12 md12 lg12>
                                <v-text-field placeholder="키" color="none"></v-text-field>
                                <v-text-field placeholder="몸무게" color="none"></v-text-field>
                              </v-flex>
                          </v-flex>


                          <v-flex reco-text age-info>
                              나이
                          </v-flex>
                          <v-layout row wrap align-center>
                            <v-flex sm2 md2 lg2 offset-sm5 offset-md5>
                                <v-text-field color="none"></v-text-field>
                              </v-flex>
                              <span class="age-text">세</span>
                          </v-layout>

                          <v-flex row reco-text style-text>
                              스타일
                          </v-flex>

                          <v-layout row wrap style-info>
                                <v-flex row sm3 md3 lg3 style-btn v-for= "i in 10" :key="i">
                                    엘레강스
                                </v-flex>
                          </v-layout>

                        <v-flex offset-sm4 offset-md4>
                            <v-flex sm6 md6 lg6 purple-btn>가입완료</v-flex>
                        </v-flex>
                    
                        </v-layout>
                    </form>
                </v-flex>
            </v-layout>
            
        </v-flex>
    </v-container>
</template>

<script>
export default {
    data () {
        return {
            signUpPageFlag : 0
        }
    },
    methods: {
        signUpPage() {
            this.signUpPageFlag = 1;
        }
    }
}
</script>

<style scoped>
.login-container {
    margin-top : 310px;
}

.back {
    width: 100%;
    height: 100%;
    background-image:url('../assets/signup_back.png');
    background-size: cover;
    /* background-attachment:fixed; */
}

.logo {
    width: 200px;
}

.login {
    height: 40px;
    background-color: #741DFF;
    color: white;
    text-align: center;
    line-height: 40px;
}

.join {
    height: 40px;
    color: #741DFF;
    border: 1px solid #741DFF;
    text-align: center;
    line-height: 40px;
}

.purple-btn {
  -webkit-border-radius: 36;
  -moz-border-radius: 36;
  border-radius: 36px;
  height: 40px;
  font-family: Arial;
  color: #741DFF;
  font-size: px;
  background: #ffffff;
  border: solid #741DFF 1px;
  text-decoration: none;
  text-align: center;
  line-height: 37px;
  margin-top: 40px;
}

.user-additional-info {
    padding-top: 100px;
    text-align: center;
}

.reco-text {
    font-weight: bold;
    color: #741DFF;
    line-height: 25px;
}

.sex-info {
    margin : 20px 0;
}

.hw-info {
    width: 120px;
}

.age-info {
    margin-top: 80px;
}

.age-text {
    color: #AAAAAA;
}

.style-btn {
  -webkit-border-radius: 36;
  -moz-border-radius: 36;
  border-radius: 36px;
  font-family: Arial;
  color: #AAAAAA;
  padding: 10px 20px 10px 20px;
  border: solid #AAAAAA 1px;
  text-decoration: none;
  margin: 5px 8px;
}

.style-text {
    margin-top: 80px;
    margin-bottom: 20px;
}

.style-info {
    padding-left: 50px;
    text-align: center;
}
</style>
