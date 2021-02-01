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
            window.pathBack = ()=>{
                this.$store.commit("backPath")
                const path = this.$store.state.last_request_path.pop()
                if (undefined !== path) {
                    this.$router.push({path: path})
                } else {
                    if (undefined !== window.sclab) {
                        window.sclab.backIndex()
                    }
                    this.$router.push({path: "/"})
                }
            }
            if (undefined !== window.sclab) {
                window.sclab.clickBack = window.pathBack
            }
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
        margin: @containerMargin;
        height: @containerHeight;
        width: @containerWidth;

        .container-page {
            display: flex;
            flex-direction: column;
            height: @containerHeight;
        }
    }

    @media screen and (orientation: portrait) {
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
