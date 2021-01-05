<template>
    <div class="container">
        <keep-alive>
            <router-view/>
        </keep-alive>
    </div>
</template>

<script>
    export default {
        mounted() {
            document.getElementById("firstLoading").remove()
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
</style>
