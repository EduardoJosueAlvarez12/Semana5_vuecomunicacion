<template>
    <div>
        <center>
            <h1>Convertir moneda</h1>
            <calc-moneda/>
        </center>
    </div>
</template>

<script>
import calcMoneda from '@/components/calcMoneda.vue'

export default {
    name:'Moneda',
    components:{
        calcMoneda
    }
}
</script>