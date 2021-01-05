<template>
    <div class="home container-page">
        <div class="head">
            <div class="img">

            </div>
            <div class="title">

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
            <div class="btn iconfont message">
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
                imgUrl: '',
                nickname: '',
                status: 0
            }
        }
    }
</script>

<style lang="less" scoped>
    .home {
        .head {
            .img {
                flex: 1;
            }

            .title {
                text-align: center;
                flex: 3.75;
            }
        }
    }
</style>