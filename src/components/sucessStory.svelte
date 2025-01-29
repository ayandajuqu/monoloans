<script>
    import {Button} from 'flowbite-svelte';
    import Card from './cards/reviewCard.svelte'
    import pic1 from '../public/african-girl-summer-city.jpg'
    import pic2 from '../public/smiley-man-wearing-white-shirt-medium-shot.jpg'
    import pic3 from '../public/smiley-curly-haired-woman-wearing-sunglasses.jpg'
</script>

<div class="bg-indigo-200 h-screen pt-16 ">
    <h1 class="mt-16 ml-28 text-blue-700 font-extrabold text-7xl text-left mb-4">
     Success Stories...
    </h1>
    <p class="ml-28 mb-10 mt-10 text-base font-semibold text-blue-700 ">
        At MonoLoans, we take pride in the success stories of our customers who have achieved their dreams <br/>
        with our financial support. From funding education to growing businesses,<br/>
         our loans have empowered countless individuals to reach new milestones. <br/>
         Hear from our happy clients and see how MonoLoans can help you on your journey to success!</p>

    <Button href="/about-us"
      class="ml-28 mt-4 rounded-full bg-indigo-200 border border-blue-700 text-blue-700 hover:border-lime-200 hover:bg-lime-200 hover:text-blue-700 text-base font-bold px-8 py-3.5 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-125">
     Know More About Us!
    </Button>

    <div class="flex p-4 gap-4">
      <Card
      image1={pic1}
      title="Ayanda Juqu"
      description= 
      '"MonoLoans made my education possible with their easy and affordable student loan. The application process was smooth, and the repayment terms fit my budget perfectly. "'/>
      <Card
      image1={pic2}
      title="Mohammed Ali"
      description='"Getting a personal loan from MonoLoans was quick and stress-free. The approval process was fast, and the terms were clear and manageable. Their support truly helped me during a crucial time!"'/>
      <Card
      image1={pic3}
      title="Nandipha Gugu"
      description='"MonoLoans made buying my dream home a reality with their easy and affordable home loan. The process was smooth, and their team guided me every step of the way!"'/>
   
    </div>
</div>