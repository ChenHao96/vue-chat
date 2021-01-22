<template>
    <div class="container-page">
        <image-head>
            <div class="head-center">
                <div class="nickname">{{nickname}}</div>
                <div class="status">
                    <div :class="'ball ' + formatStatusClass(status)">&nbsp;</div>
                    <div class="text iconfont">{{formatStatus(status)}}&#xe84e;</div>
                </div>
            </div>
            <div class="head-right">
                <div class="iconfont">&#xe853;</div>
            </div>
            <div class="head-right">
                <div class="iconfont">&#xe829;</div>
            </div>
        </image-head>
        <chat-body>
            <home-body/>
        </chat-body>
        <chat-foot/>
    </div>
</template>

<script>
    import Body from "../components/Body"
    import Foot from "../components/Foot"
    import HomeBody from "./component/HomeBody"
    import ImageHead from "../components/ImageHead"

    export default {
        data() {
            return {
                status: 0,
                nickname: ''
            }
        },
        activated() {
            this.status = 1
            this.nickname = 'abc123'
        },
        methods: {
            formatStatus(value) {
                switch (value) {
                    case 2:
                        return "游戏中..."
                    case 1:
                        return "在线"
                    default:
                        return "离线"
                }
            },
            formatStatusClass(value) {
                switch (value) {
                    case 2:
                        return "playGame"
                    case 1:
                        return "online"
                    default:
                        return "offline"
                }
            }
        },
        components: {
            "chat-body": Body,
            "chat-foot": Foot,
            "home-body": HomeBody,
            "image-head": ImageHead
        }
    }
</script>

<style lang="less" scoped>

    .head-center {

        .nickname {
            flex: 2;
            display: flex;
            font-size: 1.5rem;
            align-items: flex-end;
        }

        .status {
            flex: 1;
            display: flex;
            align-items: center;
            @headMarginSide: 5px;

            .text {
                cursor: pointer;
                margin-left: @headMarginSide;
            }

            @ballWidth: 12px;

            .ball {
                height: @ballWidth;
                width: @ballWidth;
                border-radius: @ballWidth/2;

                &.online {
                    color: #67C23A;
                    background-color: #67C23A;
                }

                &.offline {
                    color: #909399;
                    background-color: #909399;
                }

                &.playGame {
                    color: #E6A23C;
                    background-color: #E6A23C;
                }
            }
        }
    }
</style>