<script>
  export let artwork;
</script>

<div class="artwork-item">
  <img src={artwork.imageURL} alt={artwork.title} class="artwork-image" />
  <div class="artwork-details">
    <h3>{artwork.title}</h3>
    <p>{artwork.description}</p>
  </div>
</div>

<style>
  .artwork-item {
    display: flex;
    align-items: flex-start;
    margin-bottom: 30px;
    padding: 15px;
    background-color: #f9f9f9; /* Light background color for the item */
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
    transition: transform 0.3s, box-shadow 0.3s; /* Smooth transition for hover effects */
  }

  .artwork-item:hover {
    transform: translateY(-5px); /* Slight lift on hover */
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* Deeper shadow on hover */
  }

  .artwork-image {
    max-width: 40%;
    height: auto;
    border-radius: 8px; /* Rounded corners for the image */
    margin-right: 20px;
  }

  .artwork-details {
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 60%;
  }

  .artwork-details h3 {
    margin: 0 0 10px 0;
    font-size: 1.5rem;
    color: #333; /* Dark text color */
    font-weight: 600;
  }

  .artwork-details p {
    margin: 0;
    font-size: 1rem;
    color: #666; /* Subtle text color */
    line-height: 1.5;
  }
</style>
