<template>
    <section class="hot-list">
        <div class="list-swiper">
             <swiper v-if = "list" :options="swiperOption" ref="listSwiper" >
                <!-- slides -->
                <swiper-slide
                    class="swiper-slide-home"
                    v-for = "item in list.headimglist"
                    :key = "item"
                >
                    <div class="swiper-img">
                        <img :src="item">
                    </div>
                </swiper-slide>
                <div class="swiper-pagination swiper-my"  slot="pagination"></div>
            </swiper>
        </div>
        <div class="basic-wrap">
            <div class="list-basic">
                <h1  @click="abc"> {{list.title}} </h1>
                <p class="list-price" v-html="list.price_string"></p>
                <p class="tags">
                    <span 
                        v-for="item in list.housetag" 
                        :key="item.tid" 
                        :style = "{borderColor:item.tag_color,color: item.tag_color}">
                        {{item.tagname}}
                    </span>
                </p>
                <div class="tags-bird">
                    <ul>
                        <li 
                            v-for="item in list.actHousetag"
                            :key="item.tagname"
                        >
                            <p>
                                <span>
                                    {{item.activity_description}}
                                </span>
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="list-basic">
                <div class="address">
                    <span>
                        地址：{{list.address}}
                    </span>
                </div>
                <div class="times">
                    <h6></h6>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    data () {
        return {
            swiperOption : {
                pagination: {
                    el: ".swiper-pagination",
                    type: 'fraction'
                },
                loop: false,
            },
            list: {a:1}
        }
    },
    computed : {
        swiper() {
            return this.$refs.listSwiper.swiper
        }
    },
    created () {
        let newid = this.$route.query.id //获取该公寓的ID
            this.$http({
                url: '/api/index.php/wechatapp/House/houseDetail?src=webapp&hid=' + newid
            })
            .then(result => {
                this.list = result
                console.log(this.list.a)
            })

    },
    methods : {
        
        abc : (e) => {
            console.log(e.target)
        }
    }
}
</script>
<style lang="scss">
    .hot-list {
        background-color: #fff;
        .list-swiper {
            width: 100%;
            height: 5.62488rem;
            background-color: #999;
            .swiper-img {
                width: 100%;
                height: 5.62488rem;
            }
            .swiper-my {
                width: 1.173333rem;
                height: .586667rem;
                line-height: .586667rem;
                color: #fff;
                font-size: .32rem;
                background-color: rgba(0,0,0,.5);
                border-radius: .293333rem;
                left: 8.56rem;
                span {
                    color: #fff;
                }
            }
        }
        .basic-wrap {
            .list-basic {
                padding: 0 .533333rem;
                color: #313131;
                font-size: 15px;
                background-color: #fff;
                position: relative;
                text-align: left;
                h1 {
                    padding: 5px 0 0;
                    color: #313131;
                    font-size: 24px;
                    line-height: 27px;
                    font-weight: 400;
                    word-break: break-all;
                }
                .list-price {
                    color: #ff5a5f;
                    margin: 7px 0;
                    font-size: 12px;
                    span {
                        font-size: .48rem;
                    }
                }
                .tags {
                    padding: 0 0 .266667rem;
                    span {
                        display: inline-block;
                        border-radius: 2px;
                        font-size: .32rem;
                        padding: 1px 5px;
                        margin: 3px 5px 0 0;
                        border: 1px solid;
                    }
                }
                .tags-bird {
                    font-size: .32rem;
                    color: #626262;
                    margin: 0 0 .533333rem;
                    ul {
                        li {
                            line-height: .506667rem;
                            margin: 0 0 10px;
                            p {
                                overflow: hidden;
                                text-overflow: ellipsis;
                                white-space: nowrap;
                                font-size: .373333rem;
                                color: #313131;
                                padding-right: 1.066667rem;
                                span {
                                    height: .533333rem;
                                    display: inline-block;
                                    overflow: hidden;
                                }
                            }
                        }
                    }
                }
                .address {
                    font-size: .373333rem;
                    color: #626262;
                    line-height: .56rem;
                    border: 1px solid #e8e8e8;
                    display: flex;
                    flex-wrap: wrap;

                }
            }
        }
    }
</style>


