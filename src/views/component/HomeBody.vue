<template>
    <div class="body-content">
        <list-group>
            <search-item :class="searchStyle()"/>
            <message-list v-for="item in messages" :class="item.top?'search-top':''" :title="item.title"
                          @click.native="clickMessageItem(item)"
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
            },
            clickMessageItem(item) {
                this.$router.push({
                    path: "/chatRoom", query: {
                        title: item.title,
                        group: item.group,
                        receiver: item.receiver
                    }
                })
            }
        },
        mounted() {
            const icon = require("../../assets/img/head.jpeg")
            this.messages.push({
                top: true,
                title: "1",
                count: 0,
                receiver: "",
                group: false,
                message: "qwertyuopasdghkzxcvbnmqwertyuopasdghkzxcdfasdfasdf",
                itemIcon: icon,
                time: 1613638960662
            })
            this.messages.push({
                count: 1,
                message: "2",
                itemIcon: icon,
                receiver: "",
                group: true,
                title: "qwertyuopasdghkzxcvbnmqwertyuopasdghkzxcdfasdfasdf",
                time: 1611416420000
            })
            this.messages.push({
                itemIcon: icon,
                title: "3",
                message: "3",
                count: 2,
                receiver: "",
                group: false,
                time: 1610006420000
            })
            this.messages.push({
                itemIcon: icon,
                title: "qwertyuopasdghkzxcvbnmqwertyuopasdghkzxcdfasdfasdf",
                message: "qwertyuopasdghkzxcvbnmqwertyuopasdghkzxcdfasdfasdf",
                count: 2,
                receiver: "",
                group: false,
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