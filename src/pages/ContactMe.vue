<template>
    <q-page class="contact-me">
      <q-card>
        <q-card-section>
          <h3>Contact Me</h3>
        </q-card-section>
   
        <q-card-section class="personal-info">
          <p><strong>Name:</strong> {{ name }}</p>
          <p><strong>Qualifications:</strong> {{ qualifications }}</p>
          <p><strong>Current Job Designation:</strong> {{ jobTitle }}</p>
          <p><strong>Company Name:</strong> {{ companyName }}</p>
          <p><strong>Address:</strong> {{ address }}</p>
          <p><strong>Phone Number:</strong> {{ phoneNumber }}</p>
          <p><strong>Email Address:</strong> {{ email }}</p>
          <p><strong>LinkedIn:</strong> <a :href="linkedinUrl">{{ linkedinId }}</a></p>
        </q-card-section>
      </q-card>
    </q-page>
  </template>
   
  <script setup>
  const name = "Amrita Maheshwari";
  const qualifications = "Masters of Computer Application";
  const jobTitle = "Software Engineer";
  const companyName = "Lti Mindtree";
  const address = "Flat no. 103, Mansarover, Jaipur, Rajasthan";
  const phoneNumber = "1234567891";
  const email = "amrita.maheshwari@ltimindtree.com";
  const linkedinId = "@Amrita Maheshwari";
  const linkedinUrl = `https://in.linkedin.com/in/amrita-maheshwari-380028237?trk=public_profile_samename-profile`;
  </script>
   
  <style scoped>
  .contact-me {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50vh;
    background-color: #f7f7f7;
    
  }
   
  .personal-info {
    margin-top: 5px;
  }
   
  .personal-info p {
    margin: 5px 0;
  }
  </style>
 