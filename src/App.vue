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
            window.sclab.clickBack = () => {
                this.$store.commit("backPath")
                const path = this.$store.state.last_request_path.pop()
                if (undefined !== path) {
                    this.$router.push({path: path})
                } else {
                    window.sclab.backToIndex()
                    if (this.$route.path !== "/") {
                        this.$router.push({path: "/"})
                    }
                }
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

        input{
            outline: none;
        }

        label {
            display: none;
        }

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
