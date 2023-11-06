
<template>
  <q-page class="about-me">
    <div class="about-me-content">
      <h1>About Me</h1>
      <q-btn
        @click="toggleContent"
        color="primary"
        label="Show More"
        icon="arrow_drop_down"
        class="show-button"
        dense
      />
      <p v-if="showContent">
        I am Amrita Maheshwari, I belong to pink city (Jaipur) of Rajasthan.
      </p>
      <p v-if="showContent">
        I have completed my academics from Jaipur and I have done my MCA from JECRC University.
      </p>
      <p v-if="showContent">
        Currently I am being trained in LTI Mindtree on multiple technologies where i work as Software Engineer.
      </p>
      <p v-if="showContent">
        **I believe in Consistency and Discipline!**
      </p>
    </div>
    
  </q-page>
</template>
 
<script setup>
import { ref } from 'vue';
 
const showContent = ref(false);
const toggleContent = () => {
  showContent.value = !showContent.value;
};
</script>
 
<style scoped>
.about-me {
  background-color: #f2f2f2;
  padding: 20px;
  text-align: center;
}
 
.about-me-content {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}
 
.about-me-content h1 {
  font-size: 28px;
  margin: 0 0 20px 0;
  color: #3498db;
}
 
.about-me-content p {
  font-size: 18px;
  margin: 0;
  line-height: 1.6;
}
 
.show-button {
  margin-top: 10px;
}
</style>