<!-- src/components/DataFetcher.svelte -->
<script>
  import { onMount } from 'svelte';
  let data = null;
  let feels;

  onMount(async () => {
    try {
      const response = await fetch('/api/query-results');
      if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);
        feels = data;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  })

</script>


<p>{feels}</p>
