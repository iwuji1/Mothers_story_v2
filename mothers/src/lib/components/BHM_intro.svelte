<script>
  import BHM_graphic from '$lib/assets/bhm_poster.jpeg'
  import BHM_faces from '$lib/assets/bhm_faces.jpeg'

  import gsap from 'gsap';
  import { onMount } from 'svelte';

	onMount(() => {
    gsap.registerPlugin(TextPlugin);
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.defaults({
      markers:false
    })

    var points = gsap.utils.toArray('.point');
    var height = 1000 * points.length;

    var tl = gsap.timeline({
      duration: points.length,
      scrollTrigger: {
        trigger: ".BHM",
        start: "top center",
        end: "+=1000",
        scrub: 1,
        id: "points",
        ease: "power2"
      }
    })

    var pinner = gsap.timeline({
      scrollTrigger: {
        trigger: ".BHM .wrapper",
        start: "top top",
        end: "+=1000",
        scrub: 1,
        pin: ".BHM .wrapper",
        pinSpacing: true,
        id: "pinning",
        ease: "power2"
      }
    })

    points.forEach(function(elem, i) {
      gsap.set(elem, {position: "absolute", top: 0});

      tl.from(elem.querySelector('img'), {autoAlpha:0}, i)
      tl.from(elem.querySelector('article'), {autoAlpha:0, translateY: 100}, i)

      if (i != points.length-1) {
        tl.to(elem.querySelector('article'), {autoAlpha:0, translateY:-100}, i+0.75)
        tl.to(elem.querySelector('img'), {autoAlpha:0}, i+ 0.75)
      }
    });

  })
</script>

<svelte:head>
<title>Home Page</title>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/TextPlugin.min.js"></script>
</svelte:head>

<style>
  .BHM .point{
    display: flex;
    align-items: center;
    width: 100vw;
    height: 100vh;
  }

  .BHM .wrapper {
    height: 100vh;
    background-color: #ee3423;
  }

  .point {
    display: flex;
    margin:auto;
  }

  .point article {
    flex-basis: 60%;
    color: #ffffff;
    border-radius: 5%;
    padding: 0%;

  }

  .point img {
    flex-basis: 50%;
    max-width: 40vw;
    height: auto;
  }

  img {
    margin-right: 5%;
  }

  p {
    margin: 5%;
    font-size: 3rem;
    font-family: sans-serif;
  }

  @media screen and (max-width: 1000px) {

    .BHM .wrapper {
      width: 100vw;
    }

    .BHM .point {
      width: 100vw;
    }
    .point {
      flex-direction: column;
      width: 100vw;
    }
    img {
      margin: 0%;
      width: 100vw;
    }

    p {

    }

    .point article {
      flex-basis: 100%;
    }

    .point img {
      flex-basis: 50%;
      max-width: 100vw;
    }
}

</style>

<div class="BHM">
  <div class="wrapper">
    <div class="point">
      <article class="BHM-text">
        <p>The Theme for Black history Month 2023 in the UK is to our sisters</p>
      </article>
      <img class="page-img" src={BHM_graphic} alt="BHM 2023 poster">
    </div>

    <div class="point">
      <article class="BHM-text">
        <p>Paying homage to the amazing work  of the legendary women in our society</p>
      </article>
      <img class="page-img" src={BHM_faces} alt="BHM 2023 poster">
    </div>
  </div>
</div>
