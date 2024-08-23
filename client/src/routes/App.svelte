<script>
  import { goto } from '$app/navigation';

  let selfPortraiturl = '/self-portrait.jpg';

  function goToArtPage() {
    goto('/art');
  }

  function goToBioPage() {
    goto('/bio');
  }

  function goToDownloadPage() {
    goto('/download');
  }

  function goToUpdateBioPage() {
    goto('/update');
  }
</script>

<main>
  <div class="hero-section">
    <div class="overlay">
      <div class="content">
        <div class="profile-container">
          <img src={selfPortraiturl} alt="Self Portrait" class="profile-image" />
          <h1>Shreyas</h1>
          <h2>Artist & Creator</h2>
        </div>
        <div class="navigation-buttons">
          <button class="nav-button" on:click={goToArtPage}>My Artwork</button>
          <div class="bio-buttons">
            <button class="nav-button" on:click={goToBioPage}>About Me</button>
            <button class="nav-button" on:click={goToUpdateBioPage}>Edit Bio</button>
          </div>
          <button class="nav-button" on:click={goToDownloadPage}>Resume</button>
        </div>
      </div>
    </div>
  </div>
</main>

<style>
 @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap');

body {
  font-family: 'Montserrat', sans-serif;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}

.overlay {
  background: rgba(0, 0, 0, 0.6);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.content {
  text-align: center;
  color: #fff;
  z-index: 2;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.profile-container {
  margin-bottom: 20px;
  width: 465px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.profile-image {
  width: 100%;
  max-height: 100%;
  border-radius: 8px;
  border: 4px solid #fff;
  margin-bottom: 20px;
}

h1 {
  font-size: 2.5rem;
  margin: 0;
  font-weight: 600;
  margin-bottom: 10px;
}

h2 {
  font-size: 1.25rem;
  margin: 0;
  font-weight: 400;
  margin-bottom: 20px;
}

.navigation-buttons {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.bio-buttons {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 10px; /* Adjust the gap between the buttons as needed */
}

.nav-button {
  background-color: #ff7f50;
  border: none;
  color: #fff;
  padding: 10px 20px;
  font-size: 1.25rem;
  text-align: center;
  margin: 10px 0;
  cursor: pointer;
  border-radius: 50px;
  transition: background-color 0.3s;
  font-family: 'Montserrat', sans-serif;
  width: 200px;
}

.nav-button:hover {
  background-color: #ff6347;
}

.nav-button:focus {
  outline: none;
  box-shadow: 0 0 10px rgba(255, 99, 71, 0.5);
}

</style>