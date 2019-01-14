<template>
    <div class="home-tv">
        <div class="house-video">
            <video id="liveVideo" controls="controls" :poster = "tv.logo" :src="tv.link_url">
                您的浏览器不支持video标签
            </video>
        </div>
        <div class="house-video-info">
            <div class="house-video-title">
                <p>{{ tv.title }}</p>
                <p>{{ tv.duration }}</p>
            </div>
            <div class="house-video-text">
                <p>{{ tv.description }}</p>
            </div>
            <div class="housetv-footer">
                <p>点赞：{{ tv.thumbup_num }}</p>
                <p>评论</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            tv: {}
        }
    },
    created () {
        let newid = this.$route.query.id
        this.$http({
            url: '/api/index.php/wechatapp/video/videoDetail?src=webapp&hid=0&videoId=' + newid
        })
        .then(result => {
            this.tv = result
        })
    }
}
</script>
<style lang="scss">
    .home-tv {
        width: 100%;
        height: 100%;
        background-color: #fff;
        .house-video {
            width: 100%;
            height: 5.6rem;
            #liveVideo {
                width: 100%;
                height: 5.6rem;
            }
        }
        .house-video-info {
            text-align: left;
            .house-video-title {
                padding: .533333rem .533333rem 0;
                font-size: .48rem;
                color: #313131;
                line-height: .48rem;
                p:last-of-type {
                    font-size: .32rem;
                    color: #999;
                    line-height: .32rem;
                    margin-top: .266667rem;
                }
            }
            .house-video-text {
                font-size: 14px;
                color: #666;
                line-height: .64rem;
                padding: .533333rem .533333rem 1.866667rem;
            }
            .housetv-footer {
                width: 100%;
                height: 1.306667rem;
                background-color: #fff;
                border-top: #e8e8e8;
                display: flex;
                position: fixed;
                bottom: 0;
                left: 0;
                p {
                    height: .8rem;
                    margin-top: .266667rem;
                    text-align: center; 
                    color: #313131;
                    flex: 1;
                }
                p:first-of-type {
                    border-right: 1px solid #e8e8e8;
                }
            }
        }
    }
</style>
