  
<script>
  import { currentUser } from "../stores/user";
  const signOut = () => {
    firebase.auth().signOut();
  };
</script>



{#if $currentUser}
  <a on:click={signOut} href>Sign Out</a>
{:else}
  <a href="/auth/login">Sign In</a>
{/if}