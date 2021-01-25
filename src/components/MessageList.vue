<template>
    <div class="message-list">
        <div class="item-icon item-left-icon" v-if="hasIcon">
            <div class="img">
                <img :src="itemIcon" alt="图标"/>
            </div>
        </div>
        <div class="item-title">
            <div class="title">
                <div class="text">{{title}}</div>
                <div class="time">{{timeFormat(time)}}</div>
            </div>
            <div class="message">{{message}}</div>
        </div>
    </div>
</template>

<script>
    import timeFormat from "../timeFormat"

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
            },
            message: {
                type: String,
                default: ""
            },
            time: {
                type: Number,
                require: true
            }
        },
        methods: {
            timeFormat(value) {
                return timeFormat.formatBetweenTime(value)
            }
        }
    }
</script>

<style lang="less">
    @import "../assets/public";

    @listHeight: 4rem;
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
        }

        .item-icon {
            text-align: center;
            width: @listHeight;
            align-items: center;
            justify-content: center;
        }

        .item-title {
            flex: 1;
            display: flex;
            flex-direction: column;
            margin-left: @listItemMarginSide;

            .title, .message {
                flex: 1;
                font-size: 1.2rem;
            }

            .title {
                display: flex;
                align-items: flex-end;
                justify-content: flex-end;

                .text {
                    flex: 1;
                    width: 300px;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                }

                .time {
                    margin: 0 15px;
                }
            }
        }

        @imgWidth: @listHeight * 0.8;

        .item-left-icon {
            margin-left: @listItemMarginSide;

            .img {
                flex: 1;
                display: flex;
                width: @imgWidth;
                justify-content: center;

                img {
                    width: inherit;
                    border-radius: @imgWidth/2;
                }
            }
        }
    }
</style>