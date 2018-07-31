<template>
    <div class="rich-text-test">
        <mt-header fixed title="富文本测试界面">
            <router-link to="/tool" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
        </mt-header>
        <vue-html5-editor :content="content" :height="400" @change="updateData"></vue-html5-editor>
    </div>
</template>

<script>
export default {
    data() {
        return {
            content: ""
        };
    },
    methods: {
        updateData(e = "") {
            let c1 = e.replace(/<img width="100%"/g, "<img");
            let c2 = c1.replace(/<img/g, '<img width="100%"');
            this.content = c2;
        }
    },
    created() {
        let _footer = this.$store.state.footerVisible;
        if (_footer) {
            this.$store.commit("TOGGLE_FOOTER");
        }
    }
};
</script>

<style lang='scss' scoped>
.rich-text-test{
    margin-top: 40px;
}
</style>