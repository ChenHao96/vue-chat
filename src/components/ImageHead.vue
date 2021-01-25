<template>
    <chat-head>
        <div class="head-left" @click="clickHead">
            <img :src="imgUrl" alt="用户头像" class="user-img"/>
        </div>
        <slot></slot>
    </chat-head>
</template>

<script>
    import Head from "../components/Head"

    export default {
        name: "image-head",
        components: {
            "chat-head": Head
        },
        data() {
            return {
                imgUrl: ''
            }
        },
        activated() {
            this.imgUrl = require("../assets/img/head.jpeg")
        },
        methods: {
            clickHead() {
                this.$router.push({path: "/user-setting"})
            }
        }
    }
</script>