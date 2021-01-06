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
                <div class="list">
                    <div class="search">
                        <div class="iconfont">
                            <div class="icon">&#xe82e;</div>
                            &nbsp;
                            <div class="test">搜索</div>
                        </div>
                    </div>
                </div>
                <div class="list">
                    <div class="img item"><img :src="imgUrl" alt="图标"/></div>
                    <div class="text item">好友动态</div>
                    <div class="iconfont item">
                        <div class="icon">&#xe84e;</div>
                    </div>
                </div>
            </div>
            <div class="list-group" v-for="item in items">
                <div class="list" v-for="ii in item">
                    <div class="img item"><img :src="ii.src" alt="图标"/></div>
                    <div class="text item">{{ii.text}}</div>
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
                title: '',
                imgUrl: require("../assets/img/head.jpeg"),
                items: {
                    "group1": [
                        {
                            src: require("../assets/img/head.jpeg"),
                            text: '134123412341234'
                        }, {
                            src: require("../assets/img/head.jpeg"),
                            text: '134123412341234'
                        }, {
                            src: require("../assets/img/head.jpeg"),
                            text: '134123412341234'
                        }
                    ],
                    "group2": [
                        {
                            src: require("../assets/img/head.jpeg"),
                            text: '134123412341234'
                        }
                    ]
                }
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