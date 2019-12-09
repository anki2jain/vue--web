
<template>
  <div>
    <h2>Nav Bar home</h2>
    <nav>
      <router-link v-for="routes in links" 
      v-bind:key="routes.id"
      :to="`${routes.page}`">{{routes.text}}</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navigation',
  data() {
    return {
      links: [
        {
          id: 0,
          text: 'Hello World',
          page:'/HelloWorld'
        },
        {
          id: 1,
          text: 'home',
          page:'/home'
        },
        {
          id: 2,
          text: 'about',
          page:'/about'
        },
        {
          id: 3,
          text: 'contact',
          page:'/contact'
        }
      ]
    }
  }
}
</script>