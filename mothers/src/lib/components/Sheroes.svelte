<script>
  import gsap from 'gsap';
  import { onMount } from 'svelte';

  onMount(() => {
    gsap.registerPlugin(TextPlugin);
    gsap.registerPlugin(ScrollTrigger);

    gsap.set('span', {backgroundSize:"0% 100%"})

    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: "span",
        start: "top center",
        scrub: 1,
        pin: ".She-container",
        pinSpacing: true,
      }
    })

    tl.to('span', {width:"100%", backgroundSize:"100% 100%", duration:1, ease:'power2'})


})

</script>

<svelte:head>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/TextPlugin.min.js"></script>
</svelte:head>

<style>
 .She-container {
   display: flex;
   height: 100vh;
   width: 100vw;
 }

 h2 {
   text-align: center;
   margin: auto;
   font-size: 2rem;
   margin-left: 15%;
   margin-right: 15%;
 }

span {
  background-image: linear-gradient(yellow, yellow);
  background-repeat: no-repeat;
}

@media screen and (max-width: 1000px) {
  h2 {
    margin: auto;
  }
}

</style>

<div class="She-container">
  <!-- <h2>Whilst there are some amazing stories of incredible women, I wanted to pay homage to some everyday <mark class="text-highlight">Sheroes</mark> in Mothers</h2> -->
  <h2>Whilst there are some amazing stories of incredible women, I wanted to pay homage to some everyday <s>Heroes</s><span>Sheroes</span> in Mothers</h2>
</div>
