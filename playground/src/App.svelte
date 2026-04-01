<script lang="ts">
  import * as icons from "../../src";

  const iconEntries = Object.entries(icons).sort(([nameA], [nameB]) =>
    nameA.localeCompare(nameB),
  );
</script>

<main>
  <h1>Icons</h1>

  <div class="grid">
    {#each iconEntries as [name, Icon]}
      <div class="card">
        <div class="icon">
          <svelte:component this={Icon} size={32} />
        </div>
        <div class="name">{name}</div>
      </div>
    {/each}
  </div>
</main>

<style>
  main {
    padding: 16px;
  }

  h1 {
    margin: 0 0 16px;
    font-size: 24px;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
    gap: 16px;
  }

  .card {
    border: 1px solid #ccc;
    padding: 16px;
    text-align: center;
  }

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 48px;
    margin-bottom: 12px;
  }

  .name {
    font-size: 14px;
    word-break: break-word;
  }
</style>
