<template>
    <div class="logs-content">
        <list-group>
            <search-item/>
            <list-item title="好友动态" :item-icon="icon"/>
        </list-group>
        <list-group>
            <list-item title="附近" :item-icon="icon"/>
            <list-item title="小游戏" :item-icon="icon"/>
        </list-group>
    </div>
</template>

<script>
    import ListItem from "../../components/ListItem"
    import ListGroup from "../../components/ListGroup"
    import SearchItem from "../../components/SearchItem"

    export default {
        name: "logs-body",
        data() {
            return {
                icon: ''
            }
        },
        activated() {
            this.icon = require("../../assets/img/head.jpeg")
        },
        components: {
            "list-item": ListItem,
            "list-group": ListGroup,
            "search-item": SearchItem
        }
    }
</script>