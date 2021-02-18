<template>
    <div class="container-page">
        <back-head-only :title="title"/>
        <slot></slot>
    </div>
</template>

<script>
    import BackHeadOnly from "./BackHeadOnly"

    export default {
        name: "back-head",
        props: {
            title: {
                type: String,
                require: true
            }
        },
        components: {
            "back-head-only": BackHeadOnly
        }
    }
</script>