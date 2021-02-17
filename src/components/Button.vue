<template>
    <div class="button-block" ref="buttonBlock">
        <div class="button" ref="button" :style="styleVar">
            <div class="text">{{text}}</div>
        </div>
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
        },
        mounted() {
            const height = this.$refs.buttonBlock.clientHeight
            this.styleVar["--border-radius"] = height / 2 + 'px'
        },
        data() {
            return {
                styleVar: {
                    "--border-radius": "15px"
                }
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
    }

    .button-block {
        &[border] {
            .button {
                border-color: silver;
                border-style: solid;

                @borderWidth: 1px;
                border-width: @borderWidth;
                width: calc(100% - @borderWidth * 2);
                height: calc(100% - @borderWidth * 2);
                border-radius: var(--border-radius);

                &:hover {
                    border-color: #a5a3a3;
                }

                &:active {
                    border-color: silver;
                }
            }
        }
    }
</style>