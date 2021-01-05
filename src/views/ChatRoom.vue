<template>
    <div class="chat-room ">
        <div class="head">
            <div class="back iconfont">
                <div class="btn">&#xe84f;</div>
            </div>
            <div class="title">

            </div>
            <div class="plus">

            </div>
            <div class="menu">

            </div>
        </div>
        <div class="body">

        </div>
        <div class="foot">

        </div>
    </div>
</template>

<script>
    export default {}
</script>

<style lang="less" scoped>
    .chat-room {
        width: inherit;
        height: inherit;
        display: flex;
        flex-direction: column;

        .head {
            flex: 1;
            display: flex;

            background-color: antiquewhite;

            .plus, .menu {
                flex: 1;
                background-color: rebeccapurple;
            }

            .back {
                flex: 1;
                cursor: pointer;
                background-color: rebeccapurple;
                .btn {
                    color: white;
                    text-align: center;
                    font-size: 50%;
                }
            }

            .title {
                text-align: center;
                flex: 3.75;
            }
        }

        .foot {
            flex: 1;
            background-color: cornsilk;
        }

        .body {
            flex: 10;
            background-color: bisque;
        }
    }
</style>