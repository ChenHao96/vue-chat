<template>
    <div class="container-foot">
        <div :class="'tabs'+(item.activated?' activate':'')"
             v-for="item in tabs" @click="clickTab($event,item.path)">
            <div class="iconfont" v-html="item.icon"/>
            <div class="text">{{item.name}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "chat-foot",
        data() {
            return {
                tabs: [
                    {
                        path: "/",
                        name: "消息",
                        icon: "&#xe7ea;",
                        activated: false
                    }, {
                        path: "/friends",
                        name: "联系人",
                        icon: "&#xe815;",
                        activated: false
                    }, {
                        path: "/logs",
                        name: "动态",
                        icon: "&#xe771;",
                        activated: false
                    }
                ]
            }
        },
        activated() {
            this.selectByPath(this.$route.path)
        },
        methods: {
            clickTab(event, path) {
                this.selectByPath(path)
                if (this.$route.path !== path) {
                    this.$router.push({path: path})
                }
            },
            selectByPath(path) {
                for (let i = 0; i < this.tabs.length; i++) {
                    const item = this.tabs[i]
                    item.activated = item.path === path
                }
            }
        }
    }
</script>

<style lang="less">
    @import "../assets/public";

    .container-foot {
        display: flex;
        height: 4rem;
        background-color: @footBackgroundColor;

        .tabs {
            flex: 1;
            cursor: pointer;
            user-select: none;
            align-items: center;

            &.activate {
                background-color: @footActivityBackgroundColor;
            }

            .iconfont, .text {
                color: @iconColor;
                text-align: center;
            }

            .iconfont {
                margin-top: 5px;
                font-size: @footIconFontSize;
            }
        }
    }
</style>