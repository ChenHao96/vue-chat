<template>
    <back-head title="用户设置">
        <chat-body class="user-setting">
            <list-group>
                <div class="list-item">
                    <div class="item-title">
                        <div class="title">手机号码</div>
                    </div>
                    <div class="item-right phone-number">
                        <div class="text">132******34</div>
                    </div>
                    <div class="item-right-icon item-icon iconfont">
                        <div class="icon">&#xe84e;</div>
                    </div>
                </div>
                <list-item title="账号安全" :has-icon="false"/>
            </list-group>
            <list-group>
                <div class="list-item">
                    <div class="item-title">
                        <div class="title">消息通知</div>
                    </div>
                    <div class="item-right-icon item-icon iconfont">
                        <div class="icon">&#xe84e;</div>
                    </div>
                </div>
                <list-item title="隐私" :has-icon="false"/>
            </list-group>
            <list-group>
                <div class="list-item" @click="logout">
                    <div class="item-title">
                        <div class="title">注销</div>
                    </div>
                    <div class="item-right-icon item-icon iconfont">
                        <div class="icon">&#xe84e;</div>
                    </div>
                </div>
                <list-item title="退出" :has-icon="false" @click.native="exit"/>
            </list-group>
        </chat-body>
    </back-head>
</template>

<script>
    import Body from "../../components/Body"
    import BackHead from "../../components/BackHead"
    import ListItem from "../../components/ListItem"
    import ListGroup from "../../components/ListGroup"

    export default {
        components: {
            "chat-body": Body,
            "back-head": BackHead,
            "list-item": ListItem,
            "list-group": ListGroup
        },
        methods: {
            logout() {
                window.sclab.logout()
                this.$router.push({path: "/login"})
            },
            exit() {
                this.logout()
                window.sclab.exit()
            }
        }
    }
</script>

<style lang="less" scoped>
    @import "../../assets/public";

    .phone-number {
        color: gray;
    }

    .list-item {
        border-bottom: 1px @headBackgroundColor solid;

        &:last-child {
            border-bottom: none;
        }
    }
</style>