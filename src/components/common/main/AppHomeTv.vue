<template>
    <div class="app-home-tv">
        <div class="tv-title">
            <p>{{this.tv.title}}</p>
            <span>更多</span>
        </div>
        <div class="tv-swiper">
            <swiper v-if = "tv" :options="swiperOption" ref="tvSwiper" >
                <!-- slides -->
                <swiper-slide
                    class="swiper-slide-home"
                    v-for = "item in tv.list"
                    :key = "item.videoid"
                >
                    <router-link tag="div" :to = "{path: '/tv',query: {id: item.videoid}}">
                        <img :src="item.logo" :alt="item.title">
                        <span class="video-switch">
                            <svg 
                                t="1544190002734" 
                                class="icon" 
                                style="" 
                                viewBox="0 0 1024 1024" 
                                version="1.1" 
                                xmlns="http://www.w3.org/2000/svg" 
                                p-id="973" 
                                xmlns:xlink="http://www.w3.org/1999/xlink" 
                                width="20" height="20"
                                >
                                <path d="M927.870095 571.688039 167.320423 1014.160886C121.562471 1041.981153 61.44 1007.279555 61.44 954.218179L61.44 68.595037C63.693916 16.802233 124.631347-17.041827 171.276012 8.961322L928.382003 451.43039C974.037627 479.202079 974.037627 543.611136 927.870095 571.688039Z" 
                                    p-id="974" 
                                    fill="#ffffff"
                                ></path>
                            </svg>
                        </span>
                    </router-link>
                    <p class="house-tv-title">
                        <span>{{item.title}}</span>
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
                loopedSlides: 36,
            },
            tv: []
        }
    },
    beforeCreate () {
        this.$http({
            url: '/api/index.php/wechatapp/region/index?src=webapp'
        })
        .then(result => {
            this.tv = result[1]
        })
    },
    computed: {
      swiper() {
        return this.$refs.tvSwiper.swiper
      }
    }
}
</script>
<style lang="scss">
    .app-home-tv {
        padding: .533333rem 0 0 .533333rem;
        background-color: #fff;
        .tv-title {
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
        .tv-swiper {
            width: 100%;
            height: 7.1rem;
            .swiper-slide-home {
                text-align: center;
                font-size: .48rem;
                background: #fff;
                width: 81%!important;
                margin-right: .266667rem;
                div {
                    img {
                        width: 100%;
                        height: 5rem;
                    }
                    .video-switch {
                        background-color: rgba(0,0,0,.6);
                        width: 1.333333rem;
                        height: 1.333333rem;
                        border-radius: 100%;
                        z-index: 500;
                        position: absolute;
                        top: 1.733333rem;
                        left: 3.066667rem;
                        svg {
                            position: absolute;
                            top: 16px;
                            left: 17px;
                        }
                    }
                }
                .house-tv-title {
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
                }
            }
            .swiper-slide-home:last-of-type {
                margin-right: 0;
            }
        }
    }
</style>
