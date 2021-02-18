<template>
    <div class="login">
        <div>
            <div>
                <div><input type="text" placeholder="账号/手机号"></div>
            </div>
            <div>
                <div><input type="password"></div>
            </div>
            <div>
                <cr-button text="忘记密码?"/>
                <cr-button text="注册账号"/>
            </div>
            <div>
                <cr-button text="登录" border/>
            </div>
        </div>
    </div>
</template>

<script>

    import Button from "../components/Button"

    export default {
        components: {
            "cr-button": Button
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