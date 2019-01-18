<template>
        <!-- 底部导航栏 -->
        <van-tabbar v-model="active">
            <van-tabbar-item icon="home-o" info="3" @click="nav(active)">主页</van-tabbar-item>
            <van-tabbar-item icon="comment" dot @click="nav(active)">消息</van-tabbar-item>
            <van-tabbar-item icon="shopping-cart" info="5" @click="nav(active)">购物车</van-tabbar-item>
            <van-tabbar-item icon="manager" info="20" @click="nav(active)">我的</van-tabbar-item>
        </van-tabbar>
</template>

<script>
import Vue from 'vue';
import { Tabbar, TabbarItem } from 'vant';
Vue.use(Tabbar).use(TabbarItem);
export default {
    name:"navbar",
    props:['activeNumber'],
    data () {
        return {
            active:this.activeNumber
        }
    },
    methods:{
        // 导航栏跳转
        nav(id){
            switch(id){
                case 0:{this.$router.push("/");break;}
                case 1:{this.$router.push("message");break;}
                case 2:{this.$router.push("cart");break;}
                case 3:{this.$router.push("me");break;}
            }
        }
    }
}
</script>

<style>

</style>
