<template>
    <div class="home">
        <div class="profile">
            <img :src='my_profile/src/assets/photo1.jpg' alt="Amrita Maheshwari" class="profile-image">
            <h1 class="profile-name">Amrita Maheshwari</h1>
        </div>
        <div class="navigation">
            <router-link to="/about-me" class="nav-button"></router-link>
            <router-link to="/hobbies" class="nav-button">Hobbies</router-link>
        </div>
    </div>
</template>

<script setup>
import {ref} from 'vue';

const imageUrl = ref('');
</script>

<style scoped>
.home{
    display:flex;
    flex-direction:column;
    align-items: center;
    object-fit: cover;
    margin-bottom: 10px;
}

.profile-name {
    font-size: 24px;
    font-weight: bold;
}
.navigation {
    display: flex;
    margin-top: 20px;
}

.nav-button {
    margin: 0 10px;
    padding: 10px 20px;
    background-color: #3498db;
    color: white;
    text-decoration: none;
    border-radius: 5px;
    font-weight: bold;
    transition: background-color 0.3;
}

.nav-button:hover {
    background-color: #2980b9;
}
</style>