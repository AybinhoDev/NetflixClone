<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-co-">
  <router-link class="navbar-brand" to="/" style="color:red;" >NewFlix</router-link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
        
      <li class="nav-item">
        <router-link class="nav-link" to="/research"> Recherche film </router-link>
      </li>
      
        <li class="nav-item">
        <router-link class="nav-link" to="/wishlist"> Wishlist   </router-link>
      </li>
    </ul>
  </div>
</nav>
</template>

<script>
export default {
    name:"Footer"
}
</script>

<style lang="scss" scoped>

</style>