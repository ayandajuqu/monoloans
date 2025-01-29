<script>
  import TeamCard from "../../components/cards/teamCard.svelte";
import ContactModal from "../../components/forms/contactModal.svelte";
  import Navbar from "../../components/navbar.svelte";

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
  <h1 class='text-blue-700 font-extrabold text-8xl mt-32 ml-20'>
    Reach Out To Us!
  </h1>
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

</section>
