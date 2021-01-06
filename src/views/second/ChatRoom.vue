<template>
    <div class="chat-room container-page">
        <div class="head">
            <div class="btn back iconfont" @click="back">
                <div class="btnText">&#xe84f;</div>
            </div>
            <div class="title titleText">
                <div class="text">{{title}}</div>
            </div>
            <div class="btn plus iconfont">
                <div class="btnText">&#xe80c;</div>
            </div>
            <div class="btn menu iconfont">
                <div class="btnText">&#xe86b;</div>
            </div>
        </div>
        <div class="body">
            <div class="message-item">
                <div class="message-img">
                    <img :src="imgUrl" alt="用户头像"/>
                </div>
                <div class="message"></div>
            </div>
        </div>
        <div class="foot">

        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                imgUrl: '',
                nickname: '',
                deviceId: 'abcd1234',

                title: '',

                messages: []
            }
        },
        activated() {
            // TODO:
            this.title = 'asdfasdfasdf'

            const img = this.imgUrl = require("../../assets/img/head.jpeg")
            this.nickname = 'abc123'
            this.messages = [
                {
                    imgUrl: img,
                    nickname: 'asdfasdfasdf',
                    deviceId: '',
                    messageType: 0,
                    messageContent: 'asdfv34rvf'
                }, {
                    imgUrl: img,
                    nickname: 'abc123',
                    deviceId: 'abcd1234',
                    messageType: 0,
                    messageContent: '1112312'
                }
            ]
        },
        methods: {
            back() {
                this.$router.back()
            }
        }
    }
</script>

<style lang="less" scoped>
    @import "../../assets/public";
    .chat-room {
        .head {
            .back {
                flex: 1;
            }

            .plus, .menu {
                flex: 1;
            }

            .title {
                flex: 5;
                text-align: center;
            }
        }

        .body {
            flex-direction: column;
            .message-item {
                background-color: rebeccapurple;
            }
        }
    }
</style>