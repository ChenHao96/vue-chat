<template>
    <div class="container-body">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "chat-body"
    }
</script>

<style lang="less">
    @import "../assets/public";

    .container-body {
        flex: 1;
        overflow: hidden;
        overflow-y: auto;
        background-color: @bodyBackgroundColor;
    }
</style>