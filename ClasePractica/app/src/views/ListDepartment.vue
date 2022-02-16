<template>
    <div>
        <h1>Listado de departamentos</h1>
        <department/>
    </div>
</template>

<script>
import Department from '@/components/Department.vue'

export default{
    name:'ListDepartment',
    components:{
        Department
    }
}
</script>
