<template>
    <div class="button">
        <div class="text">{{text}}</div>
    </div>
</template>

<script>
    export default {
        name: "Button",
        props: {
            text: {
                type: String,
                require: true
            }
        }
    }
</script>

<style lang="less">
    .button {
        display: flex;
        cursor: pointer;
        user-select: none;
        align-items: center;
        justify-content: center;
        border: 1px silver solid;

        &:hover {
            border-color: #a5a3a3;
        }

        &:active {
            border-color: silver;
        }
    }
</style>