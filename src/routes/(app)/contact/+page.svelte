<script>
  import Footer from "../../../components/footer.svelte";
import ContactModal from "../../../components/forms/contactModal.svelte";
  import Navbar from "../../../components/navbar.svelte";
  
  

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

<section class='bg-orange-50 h-screen p-0 m-0'>
  <Navbar />
  <h1 class='text-blue-700 font-extrabold text-8xl mt-16 ml-20'>
    Reach Out To Us!
  </h1>
  <p class="w-1/3 ml-20 mt-10 mb-3 text-left rtl:text-right text-lg text-blue-700 font-bold">MonoLoans Headquarters
  </p>
  <p class="w-1/3 ml-20 mt-2 mb-3 text-left rtl:text-right text-lg text-blue-700 font-semibold">123 Finance Avenue, Suite 500<br/>
    Metro City, XY 45678<br/>
    Countryville
  </p>
  <!-- The content section will be above the floating bubbles -->
  <div class="content ">
    <ContactModal />
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
