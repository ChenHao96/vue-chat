<template>
    <div class="logs container-page">
        <div class="head">
            <div class="img btn" @click="userInfo">
                <img :src="imgUrl" alt="用户头像"/>
            </div>
            <div class="title titleText">
                <div class="text">{{title}}</div>
            </div>
            <div class="btn setting iconfont" @click="clickSetting">
                <div class="btnText">&#xe7e6;</div>
            </div>
        </div>
        <div class="body">
            <div class="list-group">
                <div class="list">1</div>
                <div class="list">2</div>
                <div class="list">3</div>
                <div class="list">4</div>
            </div>
        </div>
        <div class="foot">
            <div class="btn iconfont message" @click="$router.push({path:'/'})">
                <div class="btnText">&#xe7ea;</div>
            </div>
            <div class="btn iconfont friend" @click="$router.push({path:'/friends'})">
                <div class="btnText">&#xe815;</div>
            </div>
            <div class="btn iconfont logs activity">
                <div class="btnText">&#xe771;</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                title: '动态',
                imgUrl: require("../assets/img/head.jpeg")
            }
        },
        activated() {
            this.title = document.title
        },
        methods: {
            userInfo() {
                this.$router.push({path: "/userInfoSetting"})
            },
            clickSetting() {
                this.$router.push({path: "/logsSetting"})
            }
        }
    }
</script>

<style lang="less" scoped>
    @import "../assets/public";

    .logs {
        .head {
            .title {
                flex: 4.208;
            }

            .setting, .title, .img {
                margin: @headItemMargin;
            }
        }
    }
</style>