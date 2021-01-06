<template>
    <div class="container" @click="clickContainer">
        <router-view/>
    </div>
</template>

<script>
    import commons from "./commons"

    export default {
        mounted() {
            document.getElementById("firstLoading").style.display = "none"
        },
        methods: {
            clickContainer() {
                if (commons.deviceAndroid() || commons.deviceIOS()) {
                    commons.fullScreen()
                }
            }
        }
    }
</script>

<style lang="less">

    @import "assets/public";

    .container {
        height: @containerHeight;
        margin: @containerMargin;
        width: calc(@containerHeight * (9 / 16));
    }

    .container-page {
        display: flex;
        width: inherit;
        height: inherit;
        flex-direction: column;

        .head {
            flex: 1;
            display: flex;
            background-color: bisque;

            .img {
                flex: 1;

                img {
                    width: @headImgPCWidth;
                    height: @headImgPCWidth;
                    border-radius: @headImgPCWidth/2;
                }
            }

            .title, .titleText {
                user-select: none;
            }

            .titleText {
                display: flex;
                align-items: center;
                justify-content: center;

                .text {
                    color: @textColor;
                    font-size: @titleFontSize;
                }
            }
        }

        .foot {
            flex: 1;
            display: flex;
            background-color: bisque;

            .activity {
                background-color: antiquewhite;
            }
        }

        .btn {
            flex: 1;
            display: flex;
            cursor: pointer;
            align-items: center;
            justify-content: center;
        }

        .btnText {
            flex: 1;
            user-select: none;
            text-align: center;
            color: @textColor;
            font-size: @iconSize;
        }

        .body {
            flex: 10;
            background-color: cornsilk;
        }
    }

    @media screen and (max-width: 415px) {
        .container {
            margin: 0;
            width: 100vw;
            height: 100vh;
        }

        .container-page {
            .head {
                .img {
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
