<template>
   <q-page class="hobbies-page">
    <div class="hobbies-header">
      <h4 class="q-mb-md">My Hobbies</h4>
      <p class="q-mb-lg">Discover what I enjoy doing in my free time:</p>
    </div>
    <div class="hobbies-list q-gutter-md">
      <div class="hobby q-pa-md">
        <h6>Travelling</h6>
        <p class="q-mt-md">I enjoy exploring new places, different cultures and meeting strangers and love to hear their stories.</p>
      </div>
      <div class="hobby q-pa-md">
        <h6>Crafting</h6>
        <p class="q-mt-md">It is a creative outlet that allows to transform simple materials into unique and beautiful creations.</p>
      </div>
      <div class="hobby q-pa-md">
        <h6>Listening Music</h6>
        <p class="q-mt-md">Listening to music is a timeless passion of mine. It's a way to escape into different worlds of sound and emotions.</p>
      </div>
      <div class="hobby q-pa-md">
        <h6>Writing journal</h6>
        <p class="q-mt-md">I like to journal mostly only when I'm stressed or alot of emotions are running in my head because i think blank paper is a beautiful listener.</p>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "HobbiesPage",
};
</script>
 
<style scoped>
.hobbies-page {
  background-color: #f7f7f7;
  padding: 20px;
  text-align: center;
}
 
.hobbies-header {
  margin-bottom: 20px;
}
 
.hobbies-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
 
.hobby {
  width: 300px;
  background-color: #3498db;
  border-radius: 10px;
  color: white;
  text-align: center;
  transition: background-color 0.3s;
}
 
.hobby:hover {
  background-color: #2980b9;
}
 
.hobby h2 {
  font-size: 24px;
  margin: 10px 0;
}
 
.hobby p {
  font-size: 18px;
  margin: 10px 0;
}
</style>
