<script>
  import { BioStore } from "../stores.js";
  import { onMount } from "svelte";
  let bio = { content: "" };

  onMount(() => {
    BioStore.subscribe((_bio) => {
      if (_bio && typeof _bio.content !== "undefined") {
        bio = _bio;
      }
    });

    fetch('http://localhost:3002/bio')
      .then(response => response.json())
      .then(data => {
        BioStore.set(data);
      })
      .catch(error => {
        console.error('Error fetching bio:', error);
        alert('Error fetching bio.');
      });
  });

  const saveBio = async () => {
    try {
      const response = await fetch('http://localhost:3002/bio', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content: bio.content }),
      });

      if (!response.ok) {
        throw new Error('Failed to save bio');
      }

      BioStore.set(bio);

      alert('Bio saved successfully!');
    } catch (error) {
      console.error('Error saving bio:', error);
      alert('Error saving bio.');
    }
  };
</script>

<div class="bio-container">
  <h1>Edit Bio</h1>
  <textarea bind:value={bio.content} placeholder="Enter your bio"></textarea>
  <br />
  <button on:click={saveBio}>Save</button>
</div>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap');

  body {
    font-family: 'Montserrat', sans-serif;
    background-color: #f4f4f4;
    margin: 0;
    padding: 0;
  }

  .bio-container {
    max-width: 800px;
    margin: 40px auto;
    padding: 20px;
    background-color: #ffffff;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
  }

  h1 {
    font-size: 2.5rem;
    font-weight: 600;
    color: #333;
    margin-bottom: 20px;
  }

  textarea {
    width: 100%;
    height: 150px;
    margin-bottom: 20px;
    padding: 15px;
    font-size: 16px;
    border-radius: 8px;
    border: 1px solid #ccc;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    font-family: 'Montserrat', sans-serif;
  }

  textarea:focus {
    border-color: #3498db;
    outline: none;
    box-shadow: 0 0 10px rgba(52, 152, 219, 0.5);
  }

  button {
    padding: 12px 25px;
    background-color: #3498db;
    color: white;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    font-size: 16px;
    font-family: 'Montserrat', sans-serif;
    transition: background-color 0.3s;
  }

  button:hover {
    background-color: #2980b9;
  }

  button:focus {
    outline: none;
    box-shadow: 0 0 10px rgba(52, 152, 219, 0.5);
  }
</style>
