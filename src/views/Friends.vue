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
            <div class="list-group">
                <div class="list" @click="clickSearch">
                    <div class="search">
                        <div class="iconfont">
                            <div class="icon">&#xe82e;</div>
                            &nbsp;
                            <div class="test">搜索</div>
                        </div>
                    </div>
                </div>
                <div class="list">
                    <div class="text item">新朋友</div>
                    <div class="iconfont item">
                        <div class="icon">&#xe84e;</div>
                    </div>
                </div>
                <div class="list">
                    <div class="text item">群通知</div>
                    <div class="iconfont item">
                        <div class="icon">&#xe84e;</div>
                    </div>
                </div>
            </div>
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
                title: '',
                imgUrl: ''
            }
        },
        activated() {
            this.title = document.title
            // TODO:
            this.imgUrl = require("../assets/img/head.jpeg")
        },
        methods: {
            userInfo() {
                this.$router.push({path: "/userInfoSetting"})
            },
            clickSearch() {
                this.$router.push({path: "/search"})
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