<template>
    <div class="body-content">
        <list-group>
            <search-item/>
            <list-item title="新朋友" :has-icon="false"/>
            <list-item title="群通知" :has-icon="false"/>
        </list-group>
    </div>
</template>

<script>
    import ListItem from "../../components/ListItem"
    import ListGroup from "../../components/ListGroup"
    import SearchItem from "../../components/SearchItem"

    export default {
        name: "friend-top-body",
        data() {
            return {}
        },
        activated() {
        },
        components: {
            "list-group": ListGroup,
            "list-item": ListItem,
            "search-item": SearchItem
        }
    }
</script>