<template>
    <div class="container-page">
        <div class="container-head search-head">
            <div class="head-center">
                <label for="search-input"/>
                <input type="text" id="search-input" v-model="content"
                       placeholder="搜索" @keyup.enter="searchContent"/>
            </div>
            <div class="head-right" @click="clickBack">
                <div>取消</div>
            </div>
        </div>
        <chat-body>

        </chat-body>
    </div>
</template>

<script>
    import Body from "../../components/Body"

    export default {
        data() {
            return {
                content: ''
            }
        },
        components: {
            "chat-body": Body
        },
        activated() {
            this.content = ''
        },
        methods: {
            searchContent() {
                console.log(this.content)
            },
            clickBack() {
                this.$store.commit("backPath")
                const path = this.$store.state.last_request_path.pop()
                if (undefined !== path) {
                    this.$router.push({path: path})
                } else {
                    this.$router.push({path: "/"})
                }
            }
        }
    }
</script>

<style lang="less" scoped>
    .search-head {
        color: white;
        font-size: 1.5rem;
        align-items: center;
        justify-content: center;

        label {
            display: none;
        }

        .head-center {
            margin-right: 10px;
        }

        #search-input {
            border: hidden;
            height: 2.8rem;
            padding: 0 15px;
            font-size: 1.5rem;
            border-radius: 15px;
        }
    }
</style>