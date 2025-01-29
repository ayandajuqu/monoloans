<script>
    import {Button} from 'flowbite-svelte';
    
    import Counter from './counter.svelte';
    import image1 from '../public/toast-you-dear-colleague.jpg'
    
</script>

<div class="bg-blue-700 h-screen pt-16 ">
    <h1 class="mt-20 ml-28 text-lime-200 font-extrabold text-7xl text-left mb-4">
     10 Years in Business...
    </h1>
    <p class="ml-28 mb-10 mt-10 text-base font-medium text-lime-200 ">
        For the past 10 years, MonoLoans has been dedicated to providing reliable and flexible financial <br/>
        solutions to individuals and businesses. As we celebrate this milestone, we remain focused on <br/>
        innovation and improving our services to meet the evolving needs of our clients. <br/>
        Thank you for being a part of our journey—we look forward to many more years of success together!</p>
    <Button href="/contact"
      class="ml-28 mt-4 rounded-full bg-blue-700 border border-lime-200 text-lime-200 hover:bg-lime-200 hover:text-blue-700 text-base font-bold px-8 py-3.5transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-125">
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