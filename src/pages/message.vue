<template>
    <div class="main">
        <van-button type="default">默认按钮</van-button>
        <van-button type="warning">警告按钮</van-button>
        <van-button plain type="primary">朴素按钮</van-button>
        <!-- 底部导航栏条 -->
        <NavBar :activeNumber ="index"></NavBar>  
    </div>
    
</template>
<script>
import Vue from 'vue'
import NavBar from '@/components/navbar';
import { Button } from 'vant';
Vue.use(Button);
export default {
    name:"message",
    data () {
        return{
            index:1
        }
    },
    methods:{

    },
    components:{
      NavBar
    }
}
</script>
<style lang="less">

</style>