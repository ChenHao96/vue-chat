<template>
    <div class="user-info-setting container-page">
        <div class="head">
            <div class="btn back iconfont" @click="back">
                <div class="btnText">&#xe84f;</div>
            </div>
            <div class="title titleText">
                <div class="text">动态页设置</div>
            </div>
            <div class="btn">
                <div class="btnText"></div>
            </div>
        </div>
        <div class="body">

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
    @import "../../assets/public";

    .user-info-setting {
        .head {
            .title {
                text-align: center;
                flex: 4.208;
            }

            .btn, .title {
                margin: @headItemMargin;
            }
        }

        .body {
            flex: 11;
        }
    }
</style>