<template>
    <div class="container-page">
        <image-head>
            <div class="head-center">
                <div class="text">动态</div>
            </div>
            <div class="head-right" @click="clickSetting">
                <div class="iconfont">&#xe7e6;</div>
            </div>
        </image-head>
        <chat-body>
            <logs-body/>
        </chat-body>
        <chat-foot/>
    </div>
</template>

<script>
    import Body from "../components/Body"
    import Foot from "../components/Foot"
    import LogsBody from "./component/LogsBody"
    import ImageHead from "../components/ImageHead"

    export default {
        components: {
            "chat-body": Body,
            "chat-foot": Foot,
            "logs-body": LogsBody,
            "image-head": ImageHead
        },
        methods: {
            clickSetting() {
                this.$router.push({path: "/logsSetting"})
            }
        }
    }
</script>

<style lang="less" scoped>
    @import "../assets/public";

    .head-center {
        align-items: center;

        .text {
            flex: 1;
            display: flex;
            align-items: center;
            font-size: 1.3rem;
        }
    }
</style>