<script>
    import Footer from "../../../components/footer.svelte";
import Navbar from "../../../components/navbar.svelte";
    import Jobs from "../../../components/tables/jobs.svelte";
    
  
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
  
    /* Make sure the bubbles are behind other content */
    .floating-elements {
      z-index: 1; /* Lower z-index */
    }
  
    /* Make sure the form and navbar are above the floating elements */
    .content {
      z-index: 10; /* Higher z-index */
      position: relative; /* Necessary to apply z-index */
    }
  </style>
  
  <section class='bg-indigo-200 h-screen p-0 m-0 overflow-y-auto'>
    <Navbar />
    

    <div class="content">
        <h1 class='text-blue-700 font-extrabold text-8xl mt-20 ml-20 mb-10'>
            Available Positions...
          </h1>

          <p class="w-1/3 ml-20 mt-10 mb-3 text-left rtl:text-right text-blue-700 font-extrabold">
            At MonoLoans, we are always looking for talented and driven individuals to join our team. Whether you're passionate about finance, customer service, or technology, we offer exciting opportunities to grow your career. Our dynamic work environment fosters innovation, collaboration, and professional development. If you're ready to make an impact, explore our open positions today!</p>
          
            <p class="w-1/3 ml-20 mt-10 mb-3 text-left rtl:text-right text-blue-700 font-extrabold">From competitive salaries to growth opportunities, we ensure a rewarding career path for every team member. Join us and be part of a company that values integrity, excellence, and teamwork. Check out our available positions and take the next step in your career with MonoLoans!</p>
      
    </div>
    <!-- The content section will be above the floating bubbles -->
    <div class="content  flex flex-col justify-center items-center ">
        <Jobs />
        
    </div>
  
    <!-- Bubbles will be behind the content -->
    <div class="mt-10 floating-elements absolute inset-0 overflow-hidden">
      {#each floatingElements as element}
        <div
          class="animate-float absolute rounded-full bg-blue-700 bg-opacity-10"
          style="width: {element.size}px; height: {element.size}px; left: {element.left}%; top: {element.top}%; animation-duration: {element.duration}s; animation-delay: {element.delay}s;"
        ></div>
      {/each}
    </div>
  
    <Footer/>
  </section>