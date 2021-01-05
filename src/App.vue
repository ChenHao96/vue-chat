<template>
    <div class="container" @click="clickContainer">
        <router-view/>
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
                commons.fullScreen()
            }
        }
    }
</script>

<style lang="less">

    @containerMarginTopBottom: 1vh;
    @containerHeight: 100vh - @containerMarginTopBottom * 2;

    .container {
        margin: 1vh auto;
        height: @containerHeight;
        width: calc(@containerHeight * (9 / 16));
    }

    @media screen and (max-width: 415px) {
        .container {
            margin: 0;
            width: 100vw;
            height: 100vh;
        }
    }

    .container-page {
        width: inherit;
        height: inherit;
        display: flex;
        flex-direction: column;

        .head {
            flex: 1;
            display: flex;
            background-color: bisque;
        }

        .foot {
            flex: 1;
            display: flex;
            background-color: bisque;

            .activity {
                background-color: antiquewhite;
            }
        }

        .btn {
            flex: 1;
            display: flex;
            cursor: pointer;
            align-items: center;
            justify-content: center;
        }

        .btnText {
            flex: 1;
            color: white;
            font-size: 1.5rem;
            user-select: none;
            text-align: center;
        }

        .body {
            flex: 10;
            background-color: cornsilk;
        }
    }
</style>
