<script>
    import {Button} from 'flowbite-svelte';
    import Card from './cards/card.svelte'
    import Geometry from '../components/animationBox.svelte';
</script>

<section class="bg-orange-50 mb-24 ">
    <h1 class="ml-20 text-blue-700 font-extrabold text-8xl text-left mb-2 mt-32  mb-4">
     Loans That Turn Dreams<br/>To Reality
    </h1>
    <!-- <h3 class="text-blue-700 mb-6 p-8">Where dreams become reality</h3> -->
    <Button
      class="ml-20 mt-10 rounded-full bg-orange-50 border border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-lime-200 text-base font-bold px-8 py-3.5"
    >
      Start Appliction Today!
    </Button>

    <Geometry/>
    <div class="flex ">
      
      <Card/>
      <Card/>
    </div>
</section>
  