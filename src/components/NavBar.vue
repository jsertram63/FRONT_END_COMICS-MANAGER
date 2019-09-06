<template>
    <div>
      <header class="main-header">
      <nav class="main-header__nav">
        <ul id="v-for-items" class="main-header__item-list" >
            <li  v-for="(item,i) in items" :key="i" class="main-header__item">       
                   <router-link v-bind:to=item.path>  {{item.name}} </router-link>
             </li> 
        </ul>    
    </nav>
      </header>
       <router-view></router-view>
    </div>
</template>

<script>
  export default {
    name: 'NavBar',
     data: function(){
             return {
                  items: [
                            {name: 'comicslist',path:'/comics-manager/comics'},
                             {name: 'Add Comics',path:'/comics-manager/add-comic'},
                              {name: 'Add Category',path:'/comics-manager/add-category'},
                              
                             
                  ]
         }
     }
    
  }
</script>

<style scoped>
@import './../assets/css/main.css';

</style>