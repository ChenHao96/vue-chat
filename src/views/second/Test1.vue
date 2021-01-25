<template>
    <back-head title="测试1">
        <chat-body>
            <list-group>
                <list-item title="新朋友" :has-icon="false" @click.native="clickItem"/>
            </list-group>
        </chat-body>
    </back-head>
</template>

<script>
    import Body from "../../components/Body"
    import BackHead from "../../components/BackHead"
    import ListGroup from "../../components/ListGroup"
    import ListItem from "../../components/ListItem"

    export default {
        methods: {
            clickItem() {
                this.$router.push({path: "/friends/test/test"})
            }
        },
        components: {
            "list-group": ListGroup,
            "list-item": ListItem,
            "back-head": BackHead,
            "chat-body": Body
        }
    }
</script>