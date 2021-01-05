<template>
    <div class="home container-page">
        <div class="head">
            <div class="img btn" @click="userInfo">
                <img :src="imgUrl" alt="用户头像"/>
            </div>
            <div class="title">
                <div class="nickname">{{nickname}}</div>
                <div class="status">{{status}}</div>
            </div>
            <div class="btn camera iconfont">
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
            <div class="btn iconfont friend">
                <div class="btnText">&#xe815;</div>
            </div>
            <div class="btn iconfont my">
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
                this.$router.push({path: "/userInfo"})
            }
        }
    }
</script>

<style lang="less" scoped>
    .home {
        .head {
            .title {
                flex: 3.75;
                display: flex;
                flex-direction: column;
                .nickname, .status {
                    flex: 1;
                    display: flex;
                    user-select: none;
                    align-items: center;
                }
            }

            .img {
                flex: 1;
                @headImgWidth: 4rem;
                img {
                    width: @headImgWidth;
                    height: @headImgWidth;
                    border-radius: @headImgWidth/2;
                }
            }
        }
    }

    @media screen and (max-width: 415px) {
        .home {
            .head {
                .img {
                    @headImgWidth: 2.9rem;
                    img {
                        width: @headImgWidth;
                        height: @headImgWidth;
                        border-radius: @headImgWidth/2;
                    }
                }
            }
        }
    }
</style>