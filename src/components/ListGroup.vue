<template>
    <div class="list-group">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "list-group"
    }
</script>

<style lang="less">
    .list-group{
        background-color: white;
        margin-bottom: 1rem;
        &:last-child{
            margin-bottom: 0;
        }
    }
</style>