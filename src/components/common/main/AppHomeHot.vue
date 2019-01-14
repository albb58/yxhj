<template>
    <div class="app-home-hot">
        <div class="hot-title">
            <p>{{this.recommend.title}}</p>
            <span>更多</span>
        </div>
        <div class="hot-swiper">
            <swiper v-if = "recommend" :options="swiperOption" ref="hotSwiper" >
                <!-- slides -->
                <swiper-slide
                    class="swiper-slide-home"
                    v-for = "item in recommend.list"
                    :key = "item.id"
                >
                    <router-link :to = "{path: '/list',query: {id: item.id}}">
                        <img :src="item.thumburl" :alt="item.title">
                    </router-link>
                    <p class="hot-house-title">
                        <span>{{item.chinesecity}}</span>
                        <span>{{item.title}}</span>
                    </p>
                    <p class="hot-house-price" v-html = "item.price_string" >
                    </p>
                </swiper-slide>
            </swiper>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            swiperOption: {
                loop: false,
                slidesPerView: 'auto',
                loopedSlides: 7,
            },
            recommend: [],
        }
    },
    beforeCreate () {
        this.$http({
            url: '/api/index.php/wechatapp/region/index?src=webapp'
        })
        .then(result => {
            this.recommend = result[0]
        })
    },
    computed: {
      swiper() {
        return this.$refs.hotSwiper.swiper
      }
    }
}
</script>
<style lang="scss">
    .app-home-hot {
        padding: .533333rem 0 0 .533333rem;
        background-color: #fff;
        .hot-title {
            padding: .186667rem 0 .4rem;
            display: flex;
            justify-content: space-between;
            p {
                color: #313131;
                font-size: .48rem;
            }
            span {
                font-size: .373333rem;
                color: #666;
                margin-right: .4rem;
            }
        }
        .hot-swiper {
            width: 100%;
            height: 7.1rem;
            .swiper-slide-home {
                text-align: center;
                font-size: .48rem;
                background: #fff;
                width: 81%!important;
                margin-right: .266667rem;
                img {
                    width: 100%;
                    height: 5rem;
                }
                .hot-house-title {
                    text-align: left;
                    font-size: .373333rem;
                    color: #313131;
                    padding: 10px 0 15px;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    span {
                        color: #313131;
                        font-size: .373333rem;
                    }
                    span:first-of-type {
                        border-right: 1px solid #d3d3d3;
                        padding-right: .213333rem;
                        margin-right: .213333rem; 
                    }
                }
                .hot-house-price {
                    text-align: left;
                    color: #ff5a5f;
                    font-size: .32rem;
                    span {
                        font-size: .426667rem;
                    }
                }
            }
            .swiper-slide-home:last-of-type {
                margin-right: 0;
            }
        }
    }
</style>
