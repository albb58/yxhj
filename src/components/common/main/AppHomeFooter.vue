<template>
    <footer>
      <section class="footer-load-app">
        <div class="footer-load">
          <div class="footer-logo">
            <img src="../../../assets/yxhouse.png" >
            <p>
              <b style="font-wight = 600;">异乡好居APP</b>
              全球长租预订平台
            </p>
          </div>
          <div class="go-app">打开APP</div>
        </div>
        <div class="footer-kefu">
          <div class="footer-lang">
              中文简体
          </div>
          <div class="footer-tel">
              客服电话
          </div>
        </div>
      </section>
      <div>
            <p class="company-info">
                ©2018异乡好居 津ICP备15000930号-2
            </p>
      </div>
    </footer>
</template>
<script>
export default {
    
}
</script>
<style lang="scss">
    footer {
        width: 100%;
        padding-top: .533333rem;
        font-size: .32rem;
        color: #fff;
        text-align: center;
        .footer-load-app {
            padding: 0 .533333rem;
            .footer-load {
                padding: 0 .4rem;
                background-color: #fff;
                border: 1px solid #e8e8e8;
                height: 1.813333rem;
                line-height: 1.813333rem;
                font-size: 14px;
                color: #313131;
                border-radius: 3px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                .footer-logo {
                    display: flex;
                    align-items: center;
                    justify-content: flex-start ;
                    height: 1.146667rem;
                    img {
                        height: 1.253333rem;
                        width: 1.253333rem;
                        border-radius: .16rem;
                    }
                    p {
                        line-height: .453333rem;
                        color: #626262;
                        text-align: left;
                        margin-left: 10px;
                        display: flex;
                        flex-wrap: wrap;
                    }
                }
                .go-app {
                    width: 2rem;
                    height: .8rem;
                    color: #fff;
                    background-color: #ff5a5f;
                    border-radius: 3px;
                    text-align: center;
                    font-size: .373333rem;
                    line-height: .8rem;
                }
            }
            .footer-kefu {
                display: flex;
                margin-top: .533333rem;
                padding-bottom: .533333rem;
                justify-content: space-between;
                div {
                    height: 1.173333rem;
                    line-height: 1.173333rem;
                    background-color: #fff;
                    color: #666;
                    font-size: .373333rem;
                    border: 1px solid #e8e8e8;
                    text-align: center;
                    border-radius: 3px;
                    width: 4.173333rem;
                }
            }        
        }
        div {
            .company-info {
                padding: .533333rem 0 1.333333rem;
                text-align: center;
                color: #999;
            }
        }
    }
</style>


