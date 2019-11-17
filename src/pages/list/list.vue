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
        <list-temp />
    </div>
    </div>
</template>

<script>
import listTemp from '../list_templates/list_template.vue'
export default {
    comments: {
        listTemp,
    },
    
}
</script>

<style scoped>


</style>