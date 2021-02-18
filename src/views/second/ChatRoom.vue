<template>
    <div class="container-page">
        <back-head-only :title="title">
            <template slot="head-right">
                <div class="iconfont">&#xe7e6;</div>
            </template>
        </back-head-only>
        <chat-body>

        </chat-body>
        <div class="container-foot">
            <div class="message-input">
                <div class="input-item">
                    <input type="text"/>
                </div>
                <div class="button-item">
                    <cr-button text="发送" border/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Body from "../../components/Body"
    import Foot from "../../components/Foot"
    import Button from "../../components/Button"
    import BackHeadOnly from "../../components/BackHeadOnly"

    export default {
        components: {
            "back-head-only": BackHeadOnly,
            "chat-foot": Foot,
            "cr-button": Button,
            "chat-body": Body
        },
        activated() {
            const param = this.$route.query
            this.title = param.title
            document.title = this.title
        },
        data() {
            return {
                title: ''
            }
        }
    }
</script>

<style lang="less" scoped>
    .message-input {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 1rem;

        .input-item {
            flex: 4;
        }

        .button-item {
            flex: 1;
        }
    }
</style>