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
      href="/apply" class="ml-20 mt-10 rounded-full bg-orange-50 border border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-lime-200 text-base font-bold px-8 py-3.5 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-125">
      Start Appliction Today!
    </Button>

    <Geometry/>
    <div class="flex ">
      
      <Card
      title="Need a Student Loan?"
      description="Get flexible, low-interest student loans to fund your education with ease. Apply today and invest in your future!"
      />
      <Card
      title="Need a Personal Loan?"
      description="Get quick and hassle-free personal loans with flexible repayment options. Apply now and take control of your finances!"/>
    </div>
</section>
  