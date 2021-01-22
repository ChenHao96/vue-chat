<template>
    <div class="search" @click="clickSearch">
        <div class="input">
            <div class="iconfont icon">&#xe82e;</div>
            &nbsp;
            <div class="test">搜索</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "search-item",
        methods: {
            clickSearch() {
                this.$router.push({path: "/search"})
            }
        }
    }
</script>

<style lang="less">
    @import "../assets/public";

    @borderRadius: 15px;
    @borderMargin: 10px;
    .search {

        display: flex;
        user-select: none;
        height: @listHeight;
        background-color: white;

        .input {
            flex: 1;
            display: flex;
            cursor: pointer;
            align-items: center;
            justify-content: center;
            border-radius: @borderRadius;
            margin: @borderMargin/2 @borderMargin;
            background-color: @bodyBackgroundColor;
        }
    }
</style>