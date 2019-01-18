<template>
    <div class="main">
        <!-- 搜索栏 -->
        <form action="/">
            <van-search
            v-model="value"
            placeholder="请输入搜索关键词"
            show-action
            @search="onSearch" 
            background="#61DEC7"
            >
            <div slot="action" @click="onSearch" style="color:#fff">搜索</div>
            </van-search>
        </form>
        <!-- 轮播图 -->
        <swiper :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback">
            <!-- slides -->
            <swiper-slide><img src="@/assets/img/banner01.jpg" alt="" style="width:100%" data-url="http://www.baidu.com"></swiper-slide>
            <swiper-slide><img src="@/assets/img/banner02.jpg" alt="" style="width:100%" data-url="http://www.baidu.com"></swiper-slide>
            <swiper-slide><img src="@/assets/img/banner03.jpg" alt="" style="width:100%" data-url="http://www.baidu.com"></swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
        <!-- 底部导航栏条 -->
        <NavBar :activeNumber ="index"></NavBar>  
    </div>
    
</template>
<script>
import Vue from 'vue'
import NavBar from '@/components/navbar';
import { Button,Search } from 'vant';
Vue.use(Button).use(Search);
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper, /* { default global options } */)
export default {
    name:"index",
    data () {
        return{
            index:0,
            swiperOption: {
                autoplay:true,
                delay:5000,
                loop:true
            }
        }
    },
    methods:{
        onSearch(){

        }
    },
    components:{
        NavBar
    }
}
</script>
<style lang="less">

</style>