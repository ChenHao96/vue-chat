<template>
    <div class="chat-room container-page">
        <div class="head">
            <div class="btn back iconfont" @click="back">
                <div class="btnText">&#xe84f;</div>
            </div>
            <div class="title">

            </div>
            <div class="btn plus iconfont">
                <div class="btnText">&#xe80c;</div>
            </div>
            <div class="btn menu iconfont">
                <div class="btnText">&#xe86b;</div>
            </div>
        </div>
        <div class="body">

        </div>
        <div class="foot">

        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            back() {
                this.$router.go(-1)
            }
        }
    }
</script>

<style lang="less" scoped>
    .chat-room {
        .head {
            .title {
                text-align: center;
                flex: 3.75;
            }
        }
    }
</style>