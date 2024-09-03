console.log('ciao')

const { createApp } = Vue

createApp({
  data() {
    return {
      message: 'Daje Vue!'
    }
  }
}).mount('#app')