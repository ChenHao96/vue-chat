<template>
    <div class="login">
        <div>
            <div>
                <label for="username">账号</label>
                <div><input type="text" placeholder="账号/手机号" id="username"></div>
            </div>
            <div>
                <label for="password">密码</label>
                <div><input type="password" id="password"></div>
            </div>
            <div>
                <div>忘记密码?</div>
                <div>注册</div>
            </div>
            <div>
                <Button text="登录" style="width: 100px;"/>
            </div>
        </div>
    </div>
</template>

<script>

    import Button from "../components/Button"

    export default {
        components: {
            "Button": Button
        },
        name: "Login"
    }
</script>

<style lang="less">
    .login {
        height: 100%;
        width: 100%;
        background-color: cornsilk;
    }
</style>