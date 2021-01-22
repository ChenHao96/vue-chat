<template>
    <div class="container-head">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "chat-head",
    }
</script>

<style lang="less">
    @import "../assets/public";

    .container-head {

        @headMarginSide: 5px;
        @headLeftPadding: 3px;

        display: flex;
        height: @headHeight;
        background-color: @headBackgroundColor;

        .head-left {
            margin-left: @headMarginSide;

            img {
                width: inherit;
                cursor: pointer;
                border-radius: @headHeight/2;
            }
        }

        .head-right {
            display: flex;
            cursor: pointer;
            user-select: none;
            align-items: center;

            &:last-child {
                margin-right: @headMarginSide;
            }

            .iconfont {
                flex: 1;
                color: @iconColor;
                text-align: center;
                font-size: @iconFontSize;
            }
        }

        .head-left, .head-right {
            padding: @headLeftPadding;
            width: calc(@headHeight - @headLeftPadding * 2);
        }

        .head-center {
            flex: 1;
            display: flex;
            overflow: hidden;
            user-select: none;
            color: @iconColor;
            flex-direction: column;
            margin-left: @headMarginSide*2;
        }
    }
</style>