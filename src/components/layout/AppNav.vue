<template>
    <div class="app-nav">
        <transition
            enter-active-class="slideInRight"
            leave-active-class="slideOutRight"
        >
            <nav class="nav-list animated" v-if="show">
                <div class="avertar"></div>
                <div class="username">登录</div>
                <ul class="nav-content">
                    <router-link tag="li" 
                        v-for = "item in navs" :key = "item.id" 
                        :class="item.class" 
                        :to="item.path"
                        @click.native="$emit('update:show',false)">
                       <a>
                           <span>
                               {{ item.title }}
                           </span>
                       </a>
                    </router-link>
                </ul>
            </nav>
        </transition>
        <transition
            enter-active-class="fadeIn"
            leave-active-class="fadeOut"
        >
            <div class="mark animated" v-if="show" @click="$emit('update:show',false)"></div>
        </transition>
    </div>
</template>
<script>
export default {
    data () {
        return {
            navs: [
                {id: 0, class: "split-line", path: '/'},
                {id: 1, title: "首页", class: "nav-item", path: "/home"},
                {id: 2, title: "订单", class: "nav-item", path: "/order"},
                {id: 3, title: "财富", class: "nav-item", path: "/treasure"},
                {id: 4, title: "足迹", class: "nav-item", path: "/footprint"},
                {id: 5, title: "收藏", class: "nav-item", path: "/collect"},
                {id: 6, class: "split-line", path: '/'},
                {id: 7, title: "发布房源",  class: "nav-item", path: "/publish"},
                {id: 8, title: "公寓申请",  class: "nav-item", path: "/apply"},
                {id: 9, title: "下载APP", class: "nav-item", path: "/download"},
                {id: 10, title: "关注微信",  class: "nav-item", path: "/look"},
                {id: 11, title: "生活服务", class: "nav-item", path: "/life"},
            ]
        }
    },
    props: {
        show: Boolean
    }
}
</script>
<style lang="scss">
    .app-nav {
        .animated {
            animation-duration: .5s;
        }
        position: absolute;
        width: 100%;
        height: auto;
        z-index: 10;
        top: 0;
        .nav-list {
            width: 6.8rem;
            height: 100%;
            color: #313131;
            overflow-x: hidden;
            overflow-y: auto;
            background-color: #fff;
            position: fixed;
            right: 0;
            .avertar {
                width: 1.6rem;
                height: 1.6rem;
                border-radius: .8rem;
                overflow: hidden;
                margin: 0 auto;
                margin-top: .666667rem;
                background: url(https://pcpic.uhouzz.com/webappseo/images/be1964664ce5ced931ecf6698f2423aa.jpg) no-repeat;
                background-size: 1.6rem 1.6rem;
            }
            .username {
                text-align: center;
                margin-top: .4rem;
                font-size: .4rem;
                color: #313131;
            }
            .nav-item {
                height: 1.12rem;
                padding: .4rem 0;
                text-align: left;
                text-indent: .266667rem;
                line-height: .266667rem;
                font-size: .373333rem;
                margin: 0 .666667rem;
                a {
                    display: flex;
                    justify-content: flex-start;
                    align-items: center;
                    color: #313131;
                }
            }
            .split-line {
                background-color: #d3d3d3;
                height: 1px;
                overflow: hidden;
                padding: 0;
                margin: .266667rem .666667rem;
            } 
        }
        .mark {
            background: rgba(0,0,0,0.5);
            position: fixed;
            top: 0;
            z-index: -1;
            height: 100vh;
            width: 100%;
        }
    }
</style>
