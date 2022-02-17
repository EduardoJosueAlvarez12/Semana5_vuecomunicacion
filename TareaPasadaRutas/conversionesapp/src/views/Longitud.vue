<template>
    <div>
        <center>
            <h1>Convertir longitud</h1>
            <calc-longitud/>
        </center>
    </div>
</template>

<script>
import calcLongitud from '@/components/calcLongitud.vue'

export default {
    name:'Longitud',
    components:{
        calcLongitud
    }
}
</script>