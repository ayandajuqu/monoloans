<script>
    import {Button} from 'flowbite-svelte';
    
    import Counter from './counter.svelte';
    import image1 from '../public/toast-you-dear-colleague.jpg'
    
</script>

<div class="bg-blue-700 h-screen pt-16 ">
    <h1 class="mt-20 ml-28 text-lime-200 font-extrabold text-7xl text-left mb-4">
     10 Years in Business...
    </h1>
    <p class="ml-28 mb-10 mt-10 text-base font-medium text-lime-200 ">We aksed our gefhaohcn ierbcnejemx qhfgbuhnt  d1egvdbeh quwf hurfrh  rufhb3e9uj rfuhb0n ufi3nc <br/> adsdxbg iegbcd jewefbc0nru qfbc adsdxbg iegbcd jewefbc0nru qfbc fvc qhdwdcb <br/> adsdxbg iegbcd jewefbc0nru qfbc.</p>
    <Button
      class="ml-28 mt-4 rounded-full bg-blue-700 border border-lime-200 text-lime-200 hover:bg-lime-200 hover:text-blue-700 text-base font-bold px-8 py-3.5"
    >
      Reach Out To A Consultant!
    </Button>
    <img src={image1} alt={'taost colleagues' } class='mt-4 mx-auto items-center w-full max-w-[400px] h-auto object-cover rounded-lg shadow-lg'/>

    <div class='mt-10 ml-36 gap-28 flex justify-center items-center'>
     <Counter targetNumber={100} label="Yearly Student Customers"/>
     <Counter targetNumber={250} label="Employees" />
     <Counter targetNumber={500} label="Yearly Personal Loans" />
     <Counter targetNumber={10} label="Years in Business" />
    </div>
</div>