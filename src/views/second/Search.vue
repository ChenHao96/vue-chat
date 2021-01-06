<template>
    <div class="searchPage container-page">
        <div class="head">
            <div class="input">
                <label for="search"></label>
                <input class="search-input" id="search" placeholder="搜索" type="text"/>
            </div>
            <div class="btn" @click="back">
                <div class="btnText">取消</div>
            </div>
        </div>
        <div class="head">

        </div>
        <div class="body">

        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            back() {
                this.$router.back()
            }
        }
    }
</script>

<style lang="less" scoped>
    @import "../../assets/public";

    .searchPage {
        .head {
            .input {
                flex: 5;
                padding: 5px;
                display: flex;
                margin: @headItemMargin;
                .search-input{
                    flex: 1;
                    padding: 0 25px;
                    border-radius: 15px;
                    font-size: @textFontSize;
                    border: 1px silver solid;
                }
            }
        }

        .body {
            flex: 14;
        }
    }
</style>