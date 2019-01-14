<template>
    <div class="app-home-swiper">
        <swiper v-if = "swiperimg.length" :options="swiperOption" ref="homeSwiper" >
            <!-- slides -->
            <swiper-slide
                v-for = "item in swiperimg"
                :key = "item.ad_id"
            >
                <img width="100%" :src="item.adpicture" :alt="item.title">
            </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>
<script>
export default {
    data() {
        return {
            swiperOption: {
                pagination: {
                    el: '.swiper-pagination',
                    type: 'custom',//这里分页器类型必须设置为custom,即采用用户自定义配置
			        //下面方法可以生成我们自定义的分页器到页面上
                    renderCustom: function(swiper, current, total) {
                        var customPaginationHtml = "";
                        for(var i = 0; i < total; i++) {
                            //判断哪个分页器此刻应该被激活
                            if(i == (current - 1)) {
                                customPaginationHtml += '<span class="swiper-pagination-customs swiper-pagination-customs-active"></span>';
                            } else {
                                customPaginationHtml += '<span class="swiper-pagination-customs"></span>';
                            }
                        }
                        return customPaginationHtml;
                    }
                },
                loop: true, //环路
                autoplay: true, //自动播放
            },
            swiperimg: []
        }
    },
    beforeCreate () {
        this.$http({
            url: '/api/index.php/wechatapp/region/webappIndexTopTheme?src=webapp'
        })
        .then(result => {
            this.swiperimg = result
        })
    },
    computed: {
      swiper() {
        return this.$refs.homeSwiper.swiper
      }
    }
}
</script>
<style lang="scss">
    .app-home-swiper {
        width: 100%;
        height: 6.133333rem;
        background-color: #fff;
        .swiper-pagination {
            position: absolute;
            bottom: 30px!important;
        }
        .swiper-pagination-customs {
            width: .16rem;
            height: .16rem;
            display: inline-block;
            border-radius: 100%;
            background: #fff;
            opacity: .3;
            margin: 0 5px;
        }
        .swiper-pagination-customs-active {
            opacity: 1;
            width: .4rem;
            height: .16rem;
            border-radius: .133333rem;
            background-color: #fff;
        }
    }
    

</style>


