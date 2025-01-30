<script>
    import Footer from "../../../components/footer.svelte";
import ApplyModal from "../../../components/forms/applyModal.svelte";
    import Navbar from "../../../components/navbar.svelte";
    import {Button, P }from 'flowbite-svelte';
  
    // Function to generate random floating elements
    const floatingElements = Array(20)
      .fill(10)
      .map(() => ({
        size: Math.random() * 100 + 50,
        left: Math.random() * 100,
        top: Math.random() * 100,
        duration: Math.random() * 10 + 5,
        delay: Math.random() * 5
      }));
  </script>
  
  <style>
    @keyframes float {
      0% {
        transform: translateY(0px);
      }
      50% {
        transform: translateY(-20px);
      }
      100% {
        transform: translateY(0px);
      }
    }
  
    .animate-float {
      animation: float 3s ease-in-out infinite;
    }
  
    :global(body) {
      overflow: auto;
    }
  
    
    .floating-elements {
      z-index: 1; 
    }
  
   
    .content {
      z-index: 10; /* Higher z-index */
      position: relative; 
    }
  </style>
  
  <section class='bg-orange-50 h-screen p-0 m-0 overflow-y-auto'>
    <Navbar />
    <div class="content">
    <h1 class='text-indigo-700 font-extrabold text-8xl mt-10 ml-20'>
      Start Loan Application..
    </h1>
    <p class="w-1/3 ml-20 mt-10 mb-3 text-left rtl:text-right text-indigo-700 font-semibold">
        MonoLoans was founded with a mission to provide accessible and flexible financial solutions for individuals and businesses. Over the years, we have helped thousands of customers achieve their goals through our range of loan products, from student and personal loans to home and business financing.</p>
        <p class="w-1/3 ml-20 mt-10 mb-3 text-left rtl:text-right text-indigo-700 font-semibold">Our commitment to transparency, competitive interest rates, and excellent customer service has made us a trusted name in the lending industry. </p>
    </div>
    
    <div class="content">
      <ApplyModal />
    </div>
  
    <!-- Bubbles will be behind the content -->
    <div class="mt-10 floating-elements absolute inset-0 overflow-hidden">
      {#each floatingElements as element}
        <div
          class="animate-float absolute rounded-full bg-indigo-700 bg-opacity-10"
          style="width: {element.size}px; height: {element.size}px; left: {element.left}%; top: {element.top}%; animation-duration: {element.duration}s; animation-delay: {element.delay}s;"
        ></div>
      {/each}
    </div>
    <Footer/>
  </section>