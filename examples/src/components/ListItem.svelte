<script>
  export let type = 'froalacharts',
    view = 'desktop',
    dataId = '',
    cssClass = '',
    title = '',
    description = '',
    selected = false,
    badge = 'FroalaTime',
    idUpdateHandler = () => {};
</script>

<div data-id={dataId} class={(cssClass + (selected ? ' selected' : ''))} on:click={() => { idUpdateHandler(dataId); }}>
  {#if view === 'mobile'}
    <div class='p'>{title}</div>
  {:else}
    {#if type === 'froalacharts'}
      <div class="h5">{title}</div>
      <div class="p item-desc">{description}</div>
    {:else}
      <div class="nav-group">
        <div class="h5">{title}</div>
        <div class="h5 badge badge-normal">{badge}</div>
      </div>
      <div class="p item-desc">{description}</div>
    {/if}
  {/if}
</div>
