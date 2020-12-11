<script>
    import Nav from '../components/Nav.svelte';
    import Navnew from '../components/Nav_new.svelte';
    import UserObserver from '../components/user-observer.svelte';
    import TailwindCSS from '../components/tailwindcss.svelte';
    

    export let segment;
    
</script>

<style>

</style>

<UserObserver />
<TailwindCSS />

{#if false}
  <Nav {segment}/>
{/if}

<Navnew/>

<main>
	<slot></slot>
</main>