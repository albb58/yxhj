<template>
  <div class="zixun">
    <div class="zixun_content">
      <div class="zixun-mt-i">
        <img src="../../../assets/kefu.png" alt>
        <p>
            <span>Hi 我是小居</span>
            <br>
            <b>有什么可以帮到您?</b>
        </p>
      </div>
      <p class="zixun_but">在线咨询</p>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
    .zixun {
        width: 100%;
        background-color: #fff;
        .zixun_content {
            margin: 0 auto;
            padding: 0 .533333rem;
            background-color: #ff5a5f;
            width: 90%;
            border-radius: .133333rem;
            height: 2rem;
            display: flex;
            align-items: center;
            justify-content: space-between;
            color: #fff;
            .zixun-mt-i {
                display: flex;
                align-items: center;
                img {
                    background-color: #fff;
                    width: 1.066667rem;
                    height: 1.066667rem;
                    border-radius: 100%;
                    border: 1px solid #fff;
                    margin-right: .266667rem;
                }
                p {
                    border: 0;
                    vertical-align: baseline;
                    span {
                        font-family: "HiraginoSansGB-W6";
                        font-size: 18px;
                    }
                    b {
                        font-family: 'HiraginoSansGB-W6';
                        font-size: .373333rem;
                    }
                }
            }
            .zixun_but {
                display: block;
                border: 1px solid;
                padding: .133333rem .266667rem;
                border-radius: .133333rem;
                font-family: 'HiraginoSansGB-W6';
                font-size: 14px;
            }
        }
    }
</style>


