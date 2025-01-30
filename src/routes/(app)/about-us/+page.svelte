<script>
    import TeamCard from "../../../components/cards/teamCard.svelte";
    import Navbar from "../../../components/navbar.svelte";
    import {Button} from 'flowbite-svelte'
    import pic1 from '../../../public/african-girl-summer-city.jpg'
    import pic2 from '../../../public/smiley-man-wearing-white-shirt-medium-shot.jpg'
    import pic3 from '../../../public/smiley-curly-haired-woman-wearing-sunglasses.jpg'
  import Footer from "../../../components/footer.svelte";
  
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
  
  <section class='bg-blue-700 h-screen p-0 m-0 overflow-y-auto'>
    <Navbar />
    

    <div class="content">
        <h1 class='text-lime-200 font-extrabold text-8xl mt-32 ml-20'>
            Our Story
          </h1>
      
          
          <p class="w-1/3 ml-20 mt-10 mb-3 text-left rtl:text-right text-lime-200 font-semibold">
            MonoLoans was founded with a mission to provide accessible and flexible financial solutions for individuals and businesses. Over the years, we have helped thousands of customers achieve their goals through our range of loan products, from student and personal loans to home and business financing. Our commitment to transparency, competitive interest rates, and excellent customer service has made us a trusted name in the lending industry. </p>
            
              <p class="w-1/3 ml-20 mt-10 mb-3 text-left rtl:text-right text-lime-200 font-semibold">Our dedicated team works tirelessly to provide guidance and support, helping our clients make informed financial decisions. Whether you're pursuing higher education, starting a business, or purchasing a home, MonoLoans is here to help you every step of the way.</p>
      
          <h2 class="text-3xl flex text-lime-200 font-bold justify-center items-center">The MonoLoans Team</h2>
      
    </div>
    <!-- The content section will be above the floating bubbles -->
    <div class="content  flex flex-col justify-center items-center ">
        <TeamCard imageUrl={pic1} name="Ashley Mono" title="CEO" description="A Partner Employee at MonoLoans plays a key role in building strong relationships with our business partners and ensuring seamless collaboration. "/>
        <TeamCard imageUrl={pic2} name="Mohammed Ali" title= "Partner"/>
        <TeamCard imageUrl={pic3} name="Mandy Hagan" title="Head of Operations"/>
        <Button href="/careers" class="ml-20 mt-20 mb-20 text-lime-200 rounded-full bg-blue-700 border-2 border-lime-200  hover:bg-lime-200 hover:text-blue-700 text-base font-bold px-8 py-3.5 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-125">
            Join The Team!
        </Button>
    </div>
  
    <!-- Bubbles will be behind the content -->
    <div class="mt-10 floating-elements absolute inset-0 overflow-hidden">
      {#each floatingElements as element}
        <div
          class="animate-float absolute rounded-full bg-lime-200 bg-opacity-10"
          style="width: {element.size}px; height: {element.size}px; left: {element.left}%; top: {element.top}%; animation-duration: {element.duration}s; animation-delay: {element.delay}s;"
        ></div>
      {/each}
    </div>
  
    <Footer/>
  </section>
  