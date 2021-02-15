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
            <div class="message">
                <div class="text">{{message}}</div>
                <div class="count" v-if="count>0">{{count}}</div>
            </div>
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
            },
            count: {
                type: Number,
                default: 0
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

    @listHeight: 3.5rem;
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
                display: flex;
                color: #6a6a6a;
                justify-content: flex-end;

                .text {
                    flex: 1;
                    width: 100px;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                }
            }

            @rightMargin: 1rem;
            .title {
                font-size: 1.1rem;
                align-items: flex-end;

                .text {
                    color: black;
                }

                .time {
                    font-size: 1rem;
                    margin: 0 @rightMargin;
                }
            }

            .message {
                font-size: 0.9rem;
                align-items: center;

                .count {

                    @borderSize: 1.125rem;
                    width: @borderSize;
                    height: @borderSize;
                    border-radius: @borderSize/2;

                    display: flex;
                    align-items: center;
                    justify-content: center;

                    color: white;
                    margin: 0 @rightMargin;
                    background-color: bisque;
                }
            }
        }

        @imgWidth: @listHeight * 0.8;

        .item-left-icon {
            width: @imgWidth;
            margin-left: @listItemMarginSide;

            .img {
                flex: 1;
                display: flex;
                width: inherit;
                justify-content: center;

                img {
                    height: 100%;
                    width: inherit;
                    border-radius: @imgWidth/2;
                }
            }
        }
    }
</style>