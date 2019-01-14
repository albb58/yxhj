<template>
    <header>
        <div class="header-toolbar">
            <div class="select-type">
                <h1>异乡好居</h1>
            </div>
            <div class="nav-btn" @click="isNavShow = !isNavShow">
                <svg 
                    t="1544250648683" 
                    class="icon" 
                    style="" 
                    viewBox="0 0 1024 1024" 
                    version="1.1" 
                    xmlns="http://www.w3.org/2000/svg" 
                    p-id="1779" 
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    width="30" height="30">
                    <path d="M138.5 261.4h749c22.4 0 40.5-18.1 40.5-40.5s-18.1-40.5-40.5-40.5h-749c-22.4 0-40.5 18.1-40.5 40.5s18.1 40.5 40.5 40.5zM887.5 470.4h-749c-22.4 0-40.5 18.1-40.5 40.5s18.1 40.5 40.5 40.5h749c22.4 0 40.5-18.1 40.5-40.5s-18.1-40.5-40.5-40.5zM887.5 760.4h-749c-22.4 0-40.5 18.1-40.5 40.5s18.1 40.5 40.5 40.5h749c22.4 0 40.5-18.1 40.5-40.5s-18.1-40.5-40.5-40.5z" 
                    p-id="1780" fill="#ff5a5f"></path>
                </svg>
            </div>
        </div>
        <app-nav :show.sync = isNavShow></app-nav>
    </header>
</template>
<script>
import AppNav from '@com/layout/AppNav'
export default {
    data () {
        return {
            isNavShow: false
        }
    },
    components: {
        AppNav
    },
    
}
</script>
<style lang="scss">
    header {
        z-index: 2;
        background: #fff;
        width: 100%;
        position: relative;
        border-bottom: 1px solid #d3d3d3;
        padding-bottom: 1px;
        .header-toolbar {
            height: 45px;
            .select-type {
                font-size: .533333rem;
                text-align: center;
                padding-right: .8rem;
                 h1 {
                    height: 100%;
                    line-height: 50px;
                    font-weight: 800;
                    color: #ff5a5f;
                }
            }
            .nav-btn {
                position: absolute;
                right: 15px;
                top: 10px;
            }
        }
    }
</style>

