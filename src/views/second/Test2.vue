<template>
    <back-head title="测试2">
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