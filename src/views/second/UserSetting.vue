<template>
    <back-head title="用户设置">
        <chat-body/>
    </back-head>
</template>

<script>
    import Body from "../../components/Body"
    import BackHead from "../../components/BackHead"

    export default {
        components: {
            "back-head": BackHead,
            "chat-body": Body
        }
    }
</script>