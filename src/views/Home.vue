<template>
    <div class="home container-page">
        <div class="head">
            <div class="img btn" @click="userInfo">
                <img :src="imgUrl" alt="用户头像"/>
            </div>
            <div class="title">
                <div class="nickname">{{nickname}}</div>
                <div class="status">
                    <span @click="clickStatus">
                        {{formatStatus(status)}}&nbsp;&gt;&gt;
                    </span>
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
            <div :class="'list-group'+(topItems.length>0?' top-message-list':'')">
                <div class="list" @click="clickSearch">
                    <div class="search">
                        <div class="iconfont">
                            <div class="icon">&#xe82e;</div>
                            &nbsp;
                            <div class="test">搜索</div>
                        </div>
                    </div>
                </div>
                <div class="list" v-for="item in topItems" @click="clickItem">
                    <div class="img item"><img :src="item.src" alt="图标"/></div>
                    <div class="text item">{{item.text}}</div>
                    <div class="iconfont item">
                        <div class="icon">&#xe84e;</div>
                    </div>
                </div>
            </div>
            <div class="list-group">
                <div class="list" v-for="item in items" @click="clickItem">
                    <div class="img item"><img :src="item.src" alt="图标"/></div>
                    <div class="text item">{{item.text}}</div>
                    <div class="iconfont item">
                        <div class="icon">&#xe84e;</div>
                    </div>
                </div>
            </div>
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
                imgUrl: '',
                nickname: '',
                status: 0,
                topItems: [],
                items: []
            }
        },
        activated() {
            // TODO:
            const img = this.imgUrl = require("../assets/img/head.jpeg")
            this.nickname = 'abc123'
            this.status = 0
            this.topItems = [
                {
                    src: img,
                    text: '134123412341234'
                }
            ]
            this.items = [
                {
                    src: img,
                    text: 'abc123'
                }
            ]
        },
        methods: {
            userInfo() {
                this.$router.push({path: "/userInfoSetting"})
            },
            clickSearch() {
                this.$router.push({path: "/search"})
            },
            clickItem(){
                this.$router.push({path: "/chatRoom"})
            },
            clickStatus() {
                // TODO:
                console.log(this.status)
            },
            clickCamera() {
                // TODO:
                console.log("click camera...")
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
                flex: 3.02;
                display: flex;
                flex-direction: column;

                .status {
                    span {
                        cursor: pointer;
                    }
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

        .body{
            .list-group{
                margin-bottom: 0;
            }
        }

        .top-message-list {
            &:first-child {
                background-color: @bodyBackgroundColor;

                .list {
                    background-color: @bodyBackgroundColor;

                    .search {
                        background-color: @listBackgroundColor;
                    }
                }
            }
        }
    }
</style>