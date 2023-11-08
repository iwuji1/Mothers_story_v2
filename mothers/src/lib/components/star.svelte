<script>
  import P5 from 'p5-svelte';

  const sketch = p5 => {
    p5.sketch = () => {
      p5.createCanvas(p5.windowWidth, p5.windowHeight);
    };

    p5.draw = () => {
      p5.resizeCanvas(p5.windowWidth, p5.windowHeight)
      p5.background('red');

      //blinking stars
      var galaxy = {
      locationX : p5.random(p5.width),
      locationY : p5.random(p5.height),
      size : p5.random(5,50)
      }

      p5.ellipse(galaxy.locationX ,galaxy.locationY, galaxy.size, galaxy.size);

    }
  }


</script>

<style>

</style>

<P5 {sketch} />
