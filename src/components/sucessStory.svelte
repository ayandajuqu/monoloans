<script>
    import {Button} from 'flowbite-svelte';
    import Card from './cards/reviewCard.svelte'
</script>

<div class="bg-indigo-200 h-screen pt-16 ">
    <h1 class="mt-20 ml-28 text-blue-700 font-extrabold text-7xl text-left mb-4">
     Success Stories...
    </h1>
    <p class="ml-28 mb-10 mt-10 text-base font-medium text-blue-700 ">We aksed our gefhaohcn ierbcnejemx qhfgbuhnt  d1egvdbeh quwf hurfrh  rufhb3e9uj rfuhb0n ufi3nc <br/> adsdxbg iegbcd jewefbc0nru qfbc adsdxbg iegbcd jewefbc0nru qfbc fvc qhdwdcb <br/> adsdxbg iegbcd jewefbc0nru qfbc.</p>

    <Button
      class="ml-28 mt-10 rounded-full bg-indigo-200 border border-blue-700 text-blue-700 hover:border-0 hover:bg-lime-200 hover:text-blue-700 text-base font-bold px-8 py-3.5"
    >
     Know More About Us!
    </Button>

    <div class="flex p-4 gap-4">
      <Card/>
      <Card/>
      <Card/>
   
    </div>
</div>