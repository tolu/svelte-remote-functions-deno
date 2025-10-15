<script lang="ts">
  import { myExperimentalRemoteFunction } from "./data.remote";


  let data = $state();
  let loading = $state(false);
  const callRemoteFunction = async () => {
    loading = true;
    data = await myExperimentalRemoteFunction();
    loading = false;
    alert(JSON.stringify(data, null, 4));
  }
</script>


<section>
  <h1>Remote function example with deno-adapter</h1>
  <button disabled={loading} onclick={callRemoteFunction}>Click me to call remote function</button>
</section>

<style>
  section {
    display: grid;
    place-items: center;

    button {
      padding: 1rem;
    }
  }
</style>