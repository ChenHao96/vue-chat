<template>
    <div class="home container-page">
        <div class="head">
            <div class="img btn" @click="userInfo">
                <img :src="imgUrl" alt="用户头像"/>
            </div>
            <div class="title">
                <div class="nickname">{{nickname}}</div>
                <div class="status" @click="clickStatus">
                    {{formatStatus(status)}}
                </div>
            </div>
            <div class="btn camera iconfont" @click="clickCamera">
                <div class="btnText">&#xe853;</div>
            </div>
            <div class="btn plus iconfont">
                <div class="btnText">&#xe829;</div>
            </div>
        </div>
        <div class="body">

        </div>
        <div class="foot">
            <div class="btn iconfont message activity">
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
                imgUrl: require("../assets/img/head.jpeg"),
                nickname: 'abc123',
                status: 0
            }
        },
        methods: {
            userInfo() {
                this.$router.push({path: "/userInfoSetting"})
            },
            clickStatus() {
                console.log(this.status)
            },
            clickCamera() {

            },
            formatStatus(value) {
                switch (value) {
                    case 1:
                        return "游戏中..."
                    default:
                        return "在线"
                }
            }
        }
    }
</script>

<style lang="less" scoped>
    @import "../assets/public";

    .home {
        .head {
            .title {
                flex: 3.228;
                display: flex;
                flex-direction: column;

                .status {
                    cursor: pointer;
                }

                .nickname, .status {
                    flex: 1;
                    display: flex;
                    color: @textColor;
                    align-items: center;
                    font-size: @textFontSize;
                }
            }

            .camera, .plus, .title, .img {
                margin: @headItemMargin;
            }
        }
    }
</style>