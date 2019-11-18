<template>
    <div>
        <span>{{item.name}} - {{item.age}}</span>
    </div>
</template>

<script>
export default {
    props: [
        'item',
        'index',
    ]
}
</script>

<style scoped>

</style>