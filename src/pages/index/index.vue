<template>
<div class="index_container">
    <img  v-if="!isShow" class="index_img" :src="userInfo.avatarUrl" alt="" />
    <Button v-if="isShow" class="btn" open-type="getUserInfo" @getuserinfo="getUserInfo">点击获取用户信息</Button>
    <p class="user_name">hello {{userInfo.nickName}}</p>
    <div @tap="toDetail" class="go_study">
        <p>开启小程序之旅</p>
    </div>
</div>
</template>

<script>
export default {
    data () {
        return {
            userInfo: {},
            isShow: false // 表示用户没有授权
        }
    },
    // mpvue 即支持小程序生命周期，也支持vue
    // 的生命周期，注意：除特殊形况外，不建议使用小程序生命周期
    onLoad() {
        console.log('---onLoad 小程序生命周期----')
    },
    beforeMount() {
         console.log('---beforeMount vue生命周期----')
         this.handleGetUserInfo()
    },
    mounted() {
        console.log('---mounted vue生命周期----')
    },
    methods: {
        // 获取用户登录信息
        handleGetUserInfo() {
         wx.getUserInfo({
             success: (res) => {
                console.log('获取成功:', res)
                this.userInfo = res.userInfo
                this.isShow = false
             },
             fail: () => {
                 console.log('获取失败')
                 this.isShow = true
             }
         })
        },

        getUserInfo(res) {
        console.log('getUserInfo:', res)
        // 判断用户是否授权
        if (res.mp.detail.rawData) {
             // 用户授权
    console.log('用户授权成功:')
            this.handleGetUserInfo()
}
        },
        toDetail () {
            // 页面跳转
            wx.navigateTo({
                url: 'pages/list/main',
            })
        },
    }
}
</script>

<style>
    page {
        background: #8ed145;
    }

    .index_container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .index_img {
        width: 200rpx;
        height: 200rpx;
        border-radius: 100rpx;
        margin: 100rpx 0;
    }

    .user_name {
        font-size: 40rpx;
        font-weight: bold;
        margin: 100rpx 0;
    }

    .go_study {
        font-size: 14px;
        line-height: 80rpx;
        text-align: center;
        border-radius: 10px;
        width: 220rpx;
        height: 80rpx;
        border: 1rpx solid #eee;
    }

    .btn {
        width: 300rpx;
        height: 300rpx;
        border-radius: 150px;
        margin: 100px 0;
        line-height: 300rpx;
        text-align: center;
        font-size: 26rpx;
    }
</style>