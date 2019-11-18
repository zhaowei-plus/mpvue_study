<template>
    <div class="list-container swiper">
        <swiper>
            <swiper-item>
                <img src="/static/tabs/home-active.png" />
            </swiper-item>
             <swiper-item>
                <img src="/static/tabs/home-active.png" />
            </swiper-item>
             <swiper-item>
                <img src="/static/tabs/home-active.png" />
            </swiper-item>
        </swiper>
    <div>
        <list-temp v-for="(item, index) in listTemp" :key="index" :item="item" :index="index"/>
    </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'
import ListTemp from '../list_templates/list_template.vue'
export default {
    components: {
        ListTemp,
    },
    beforeMount() {
        // 分发action，修改状态
        this.$store.dispatch('getList')
    },
    computed: {
        // 映射状态到本组件
        ...mapState(['listTemp'])
    }
}
</script>

<style scoped>


</style>