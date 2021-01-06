<template>
    <div class="friends container-page">
        <div class="head">
            <div class="img btn" @click="userInfo">
                <img :src="imgUrl" alt="用户头像"/>
            </div>
            <div class="title titleText">
                <div class="text">{{title}}</div>
            </div>
            <div class="btn plus iconfont">
                <div class="btnText">&#xe829;</div>
            </div>
        </div>
        <div class="body">

        </div>
        <div class="foot">
            <div class="btn iconfont message" @click="$router.push({path:'/'})">
                <div class="btnText">&#xe7ea;</div>
            </div>
            <div class="btn iconfont friend activity">
                <div class="btnText">&#xe815;</div>
            </div>
            <div class="btn iconfont logs" @click="$router.push({path:'/logs'})">
                <div class="btnText">&#xe771;</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                title:'',
                imgUrl: require("../assets/img/head.jpeg")
            }
        },
        activated() {
            this.title = document.title
        },
        methods: {
            userInfo() {
                this.$router.push({path: "/userInfoSetting"})
            }
        }
    }
</script>

<style lang="less" scoped>
    @import "../assets/public";

    .friends {
        .head {
            .title {
                flex: 4.208;
            }

            .plus, .title, .img {
                margin: @headItemMargin;
            }
        }
    }
</style>