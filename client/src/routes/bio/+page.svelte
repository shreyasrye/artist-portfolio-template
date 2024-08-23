<script>
  import { onMount } from 'svelte';
  import { BioStore } from '../stores.js';
  let bio = '';

  onMount(async () => {
    
    const res = await fetch('http://localhost:3002/bio', 
    {
      method: 'GET'
    });
    const data = await res.json();
    console.log(data);
    BioStore.set(data.content);
  });

  BioStore.subscribe((_bio) => {
    bio = _bio;
    console.log(bio);
  });

</script>

<div class="about-section">
  <h1>About me</h1>
  <p>{bio}</p>
</div>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap');

  body {
    font-family: 'Montserrat', sans-serif;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }

  .about-section {
    background-color: #2c3e50; /* Dark Blue Background */
    color: #ecf0f1; /* Light Text */
    padding: 40px 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    max-width: 800px;
    margin: 40px auto;
    text-align: center;
  }

  .about-section h1 {
    font-size: 2.5rem;
    margin-bottom: 20px;
    font-weight: 600;
  }

  .about-section p {
    font-size: 1.2rem;
    line-height: 1.6;
    margin: 0;
  }
</style>