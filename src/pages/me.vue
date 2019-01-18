<template>
    <div class="main">
        <van-button type="primary">主要按钮</van-button>
        <van-button type="warning">警告按钮</van-button>

        <!-- 底部导航栏条 -->
        <NavBar :activeNumber ="index"></NavBar>  
    </div>
    
</template>
<script>
import Vue from 'vue';
import { Button } from 'vant';
import NavBar from '@/components/navbar';
Vue.use(Button);
export default {
    name:"me",
    data () {
        return{
            index:3
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