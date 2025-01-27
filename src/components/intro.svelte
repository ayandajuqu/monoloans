<script>
    import {Button} from 'flowbite-svelte';
    import Card from './cards/card.svelte'
</script>

<section class="bg-orange-50 h-screen  ">
    <h1 class="text-blue-700 font-extrabold text-8xl text-left mb-2 mt-10  mb-4">
     Turning dreams<br/>To reality
    </h1>
    <!-- <h3 class="text-blue-700 mb-6 p-8">Where dreams become reality</h3> -->
    <Button
      class="bg-orange-50 border-2 border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-lime-200 font-bold "
    >
      Get Started!
    </Button>

    <Card/>
</section>
  