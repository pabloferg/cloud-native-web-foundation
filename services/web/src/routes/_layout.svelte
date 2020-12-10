<script>
    import Nav from '../components/Nav.svelte';
    import UserObserver from '../components/user-observer.svelte';
    import TailwindCSS from '../components/tailwindcss.svelte';
    

    export let segment;
    
</script>

<style>

</style>

<UserObserver />
<TailwindCSS />

<Nav {segment}/>

<main>
	<slot></slot>
</main>