<template>
  <div>
    <h1>Coches</h1>
    <table class="table table-dark table-stripped">
        <thead>
            <tr>
                <th>Marca</th>
                <th>Modelo</th>
                <th>Conductor</th>
                <th>Imagen</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="coche in coches" :key="coche">
                <td>{{ coches.marca }}</td>
                <td>{{ coches.modelo }}</td>
                <td>{{ coches.conductor }}</td>
            </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
import Global from '@/Global';


export default {
    name:"CochesComponent",
    data(){
        return{
            coches:[]
        }
    },
    mounted(){
        this.fetchData();
    },
    methods:{
        fetchData(){
            let request='api/coches';
            let url=Global.urlApiCoches+request;
            fetch(url,{
                method:"GET"
            }).then((response)=>{
                response.json().then((data)=>{
                    this.coches=data
                    console.log(data);
                    console.log(this.coches.values.array);
                })
                
            })
        }
    }
}
</script>

<style>

</style>