<script>
  import ContactCard from "../components/contact-card.svelte";
  import TestCard from "../components/test-card.svelte";
  import FeatureToggle from "../components/feature-toggle.svelte";
  import { FEATURE_TOGGLES } from "../feature-toggles";

  const erinLindford = {
    name: "Erin Lindford",
    avatarSrc: "https://randomuser.me/api/portraits/women/17.jpg",
    job: "Customer Support",
    email: "erinlindford@example.com",
    phone: "(555) 765-4321"
  }

</script>


<svelte:head>
	<title>About</title>
</svelte:head>

<h1>About this site</h1>

<p class='text-red-600'>Thanks Mike for your help!</p>

<FeatureToggle name={FEATURE_TOGGLES.vipWelcome.name}>
  <p>Some people see this, others don't!</p>
</FeatureToggle>

<ContactCard {...erinLindford} />
<TestCard/>
<TestCard/>
<TestCard/>
<TestCard/>
<TestCard/>