<template>
    <div class="tmp container-page">
        <div class="head">
            <div class="img btn" @click="userInfo">
                <img :src="imgUrl" alt="用户头像"/>
            </div>
            <div class="title">

            </div>
            <div class="btn plus iconfont">
                <div class="btnText">&#xe80c;</div>
            </div>
            <div class="btn menu iconfont">
                <div class="btnText">&#xe86b;</div>
            </div>
        </div>
        <div class="body">

        </div>
        <div class="foot">
            <div class="btn iconfont message" @click="$router.push({path:'/'})">
                <div class="btnText">&#xe7ea;</div>
            </div>
            <div class="btn iconfont friend" @click="$router.push({path:'/friends'})">
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
                imgUrl: require("../assets/img/head.jpeg")
            }
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
    .tmp {
        .head {
            .title {
                flex: 3.228;
            }

            .menu, .plus, .title, .img {
                margin: @headItemMargin;
            }
        }
    }
</style>