<template>
    <div class="container" @click="clickContainer">
        <keep-alive>
            <router-view/>
        </keep-alive>
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
                if (commons.deviceMobile()) {
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
        width: @containerWidth;

        .container-page {
            display: flex;
            flex-direction: column;
            height: @containerHeight;
        }
    }

    @media screen and (max-width: 415px) {
        .container {
            margin: 0;
            width: @bodyWidth;
            height: @bodyHeight;

            .container-page {
                height: @bodyHeight;
            }
        }
    }
</style>
