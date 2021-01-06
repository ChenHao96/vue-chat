<template>
    <div class="searchPage container-page">
        <div class="head">
            <form class="input" @submit.prevent="submitSearch">
                <label for="search"></label>
                <input class="search-input" id="search" v-model="formData.content" placeholder="搜索"/>
            </form>
            <div class="btn" @click="back">
                <div class="btnText">取消</div>
            </div>
        </div>
        <div class="body"></div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                formData: {
                    content: ''
                }
            }
        },
        activated() {
            this.formData.content = ''
        },
        methods: {
            back() {
                this.$router.back()
            },
            submitSearch() {
                console.log(this.formData)
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
                display: flex;
                padding: 10px 5px;
                margin: @headItemMargin;

                .search-input {
                    flex: 1;
                    padding: 12px 25px;
                    border-radius: 15px;
                    font-size: @textFontSize;
                    border: 1px silver solid;
                }
            }
        }

        .body {
            flex: 11;
        }
    }
</style>