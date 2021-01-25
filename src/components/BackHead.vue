<template>
    <div class="container-page">
        <chat-head>
            <div class="head-left" @click="clickBack">
                <div class="iconfont">&#xe84f;</div>
            </div>
            <div class="head-center">
                <div class="text">{{title}}</div>
            </div>
            <div class="head-right">
                <slot name="head-right"></slot>
            </div>
        </chat-head>
        <slot></slot>
    </div>
</template>

<script>
    import Head from "../components/Head"

    export default {
        name: "back-head",
        props: {
            title: {
                type: String,
                require: true
            }
        },
        methods: {
            clickBack() {
                this.$store.commit("backPath")
                const path = this.$store.state.last_request_path.pop()
                if (undefined !== path) {
                    this.$router.push({path: path})
                } else {
                    this.$router.push({path: "/"})
                }
            }
        },
        components: {
            "chat-head": Head
        }
    }
</script>

<style lang="less" scoped>
    @import "../assets/public";

    .head-left {
        display: flex;
        cursor: pointer;
        user-select: none;
        align-items: center;

        .iconfont {
            flex: 1;
            color: @iconColor;
            text-align: center;
            font-size: @iconFontSize;
        }
    }

    .head-center {
        align-items: center;

        .text {
            flex: 1;
            display: flex;
            align-items: center;
            font-size: 1.3rem;
        }
    }
</style>