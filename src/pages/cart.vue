<template>
    <div class="main">
        <van-button type="default">默认按钮</van-button>
        <van-button type="primary">主要按钮</van-button>

        <!-- 底部导航栏条 -->
        <NavBar :activeNumber ="index"></NavBar>  
    </div>
    
</template>
<script>
import Vue from 'vue';
import NavBar from '@/components/navbar';
import { Button } from 'vant';
Vue.use(Button);
export default {
    name:"cart",
    data () {
        return{
            index:2
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