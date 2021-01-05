<template>
    <div class="tmp container-page">
        <div class="head">
            <div class="img btn" @click="userInfo">
                <img :src="imgUrl" alt="用户头像"/>
            </div>
            <div class="title">
                <div>联系人</div>
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
                imgUrl: require("../assets/img/head.jpeg")
            }
        },
        methods: {
            userInfo() {
                this.$router.push({path: "/userInfo"})
            }
        }
    }
</script>

<style lang="less" scoped>
    .tmp {
        .head {
            .title {
                flex: 4.75;
            }
        }
    }
</style>