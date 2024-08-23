<script>
  import { onMount } from 'svelte';
  import { ArtworkStore } from '../stores.js';
  import ArtworkItem from './ArtworkItem.svelte';
  let artworks = {};

  onMount(async () => {
    try {
      const res = await fetch('http://localhost:3001/artworks');
      if (!res.ok) {
        throw new Error('Failed to fetch artworks');
      }
      const data = await res.json();
      ArtworkStore.set(data);
    } catch (error) {
      console.error('Error fetching artworks:', error);
    }
  });

  ArtworkStore.subscribe((_artworks) => {
    artworks = _artworks;
  });
</script>

<div class="artwork-container">
  <h1>Artwork</h1>
  <div class="artwork-list">
    {#if Object.keys(artworks).length === 0}
      <p>Loading artworks...</p>
    {:else}
      {#each Object.entries(artworks) as [_, artwork] (artwork._id)}
        <ArtworkItem {artwork} />
      {/each}
    {/if}
  </div>
</div>

<style>
  .artwork-container {
    max-width: 1200px;
    margin: 40px auto;
    padding: 20px;
    background-color: #f4f4f4;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  .artwork-container h1 {
    font-size: 2.5rem;
    margin-bottom: 20px;
    font-weight: 600;
    color: #333;
    text-align: center;
  }

  .artwork-list {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
</style>
