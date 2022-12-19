<template>
    
<!--  -->
    <section class="items" v-if="arr.length">   
        <div v-for="item in arr" :key="item">
        <img :src="item.img" style="width: 200px;" alt="images">
        <h5>{{item.name}}</h5>
        <p>{{item.surName}}</p>
        <p>{{item.price}}</p>
        <button class="btn" v-on:click="showAlert" href="#">Request for services</button>
    </div>
    </section>
    <div v-else>
        <Spinner />
    </div>

 


</template>

<script>


import Spinner from '../components/Spinner.vue'

export default {
    name : 'products',
    components: {
        Spinner
    },
    

    data (){
        return {
            arr : [
        {
         name: 'Chizuru',
         surName: 'Ichinose',
         price: 'R200 : Per hr',
         img: 'https://i.postimg.cc/Hkst5HHb/rent-a-girlfriend-anime1.webp'
        },
        {
         name: 'Mami',
         surName: 'Nanami',
         price: 'R200 : Per hr',
         img: 'https://i.postimg.cc/nc0FV8kX/rent-a-girlfriend-anime2.webp'
        },
        {
         name: 'Ruka',
         surName: 'Sarashina',
         price: 'R200 : Per hr',
         img: 'https://i.postimg.cc/76KpS4Qc/rent-a-girlfriend-anime3.webp'
        },
        {
         name: 'Sumi',
         surName: 'Sakurasawa',
         price: 'R200 : Per hr',
         img: 'https://i.postimg.cc/6QfdjpKH/rent-a-girlfriend-anime4.webp'
        }
 ]
}
 } 
}


</script>

<style scoped>
.items{
    display: flex;
    justify-content: center;
    gap: 10rem;
    height: 100vh;
    padding-top: 5rem;

}

 


</style>