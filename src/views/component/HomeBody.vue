<template>
    <div class="body-content">
        <list-group>
            <search-item :class="searchStyle()"/>
            <message-list v-for="item in messages" :class="item.top?'search-top':''" :title="item.title"
                          :message="item.message" :time="item.time" :item-icon="item.itemIcon" :count="item.count"/>
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
                messages: [],
                icon: ''
            }
        },
        methods: {
            searchStyle() {
                for (let i in this.messages) {
                    const top = this.messages[i].top
                    if (undefined !== top && top) {
                        return "search-top"
                    }
                }
                return ""
            }
        },
        activated() {
            const icon = require("../../assets/img/head.jpeg")
            this.messages.push({
                count: 1,
                top: false,
                title: "1",
                message: "1",
                itemIcon: icon,
                time: 1611426420000
            })
            this.messages.push({
                itemIcon: icon,
                title: "2asdfasdffffasdffffasdffffasdffffasdffffffffffffffffffffffffffffffffffffffffffffffffff",
                message: "2",
                time: 1611416420000
            })
            this.messages.push({
                itemIcon: icon,
                title: "3",
                message: "3",
                time: 1610006420000
            })
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