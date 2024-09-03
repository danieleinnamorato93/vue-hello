console.log('ciao')

const { createApp } = Vue

createApp({
  data() {
    return {
      message: 'Daje Vue!',
      imageUrl: 'https://sm.ign.com/t/ign_it/screenshot/default/tlou-2-cover_x6nx.1024.jpg'
    }
  }
}).mount('#app')