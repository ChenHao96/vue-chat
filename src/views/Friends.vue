<template>
    <div class="container-page">
        <image-head>
            <div class="head-center">
                <div class="text">联系人</div>
            </div>
            <div class="head-right">
                <div class="iconfont">&#xe829;</div>
            </div>
        </image-head>
        <chat-body>
            <friend-top-body/>
        </chat-body>
        <chat-foot/>
    </div>
</template>

<script>
    import Body from "../components/Body"
    import Foot from "../components/Foot"
    import ImageHead from "../components/ImageHead"
    import FriendTopBody from "./component/FriendTopBody"

    export default {
        components: {
            "chat-body": Body,
            "chat-foot": Foot,
            "image-head": ImageHead,
            "friend-top-body": FriendTopBody
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