<template>
    <div class="body-content">
        <list-group>
            <search-item class="search-top"/>
            <message-list class="search-top" title="1" :item-icon="icon"/>
            <message-list title="2" :item-icon="icon"/>
        </list-group>
    </div>
</template>

<script>
    import ListGroup from "../../components/ListGroup"
    import SearchItem from "../../components/SearchItem"
    import MessageList from "../../components/MessageList"

    export default {
        name: "home-body",
        data() {
            return {
                icon: ''
            }
        },
        activated() {
            this.icon = require("../../assets/img/head.jpeg")
        },
        components: {
            "list-group": ListGroup,
            "message-list": MessageList,
            "search-item": SearchItem
        }
    }
</script>

<style lang="less">
    @import "../../assets/public";

    .search-top {
        background-color: @bodyBackgroundColor;

        .input {
            background-color: white;
        }
    }
</style>