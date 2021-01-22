<template>
    <div class="message-list">
        <div class="item-icon item-left-icon" v-if="hasIcon">
            <div class="img">
                <img :src="itemIcon" alt="图标"/>
            </div>
        </div>
        <div class="item-title">
            <div class="title">{{title}}</div>
        </div>
        <div class="item-right-icon item-icon iconfont">
            <div class="icon">&#xe84e;</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "message-list",
        props: {
            hasIcon: {
                type: Boolean,
                default: true
            },
            itemIcon: {
                type: String
            },
            title: {
                type: String,
                require: true
            }
        }
    }
</script>

<style lang="less">
    @import "../assets/public";

    @listItemMarginSide: .6rem;
    .message-list {

        display: flex;
        cursor: pointer;
        user-select: none;
        height: @listHeight;
        align-items: center;

        .item-icon, .item-title {
            display: flex;
            height: @listHeight;
            align-items: center;
        }

        .item-icon {
            text-align: center;
            width: @listHeight;
            justify-content: center;
        }

        .item-right-icon {
            margin-right: @listItemMarginSide;
        }

        .item-title {
            flex: 1;
            margin-left: @listItemMarginSide*1.5;
        }

        @imgWidth: @listHeight * 0.7;

        .item-left-icon {
            margin-left: @listItemMarginSide;

            .img {
                flex: 1;
                display: flex;
                width: @imgWidth;
                justify-content: center;

                img {
                    width: inherit;
                    border-radius: @imgWidth/4;
                }
            }
        }
    }
</style>