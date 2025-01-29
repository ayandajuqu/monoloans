<script>
    export let name = "Jen Harris";
    export let title = "Partner";
    export let description = "I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click \"Edit Text\" or double click me to add your own content and make changes to the font.";
    export let linkedinUrl = "https://www.linkedin.com/in/ayanda-juqu-67a655300/";
    export let imageUrl = "/path-to-profile-image.jpg";
  </script>
  
  <div class=" mt-10 max-w-2xl ml-20 p-6 bg-blue-700 text-lime-200 border-2 border-lime-200 rounded-2xl shadow-sm hover:bg-lime-200 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-blue-700">
    <div class="flex items-start gap-6">
      <!-- Profile Image -->
      <div class="flex-shrink-0">
        <img
          class="w-24 h-24 rounded-full object-cover"
          src={imageUrl}
          alt={name}
        />
      </div>
  
      <!-- Content -->
      <div class="flex-1">
        <!-- Name -->
        <h3 class="text-xl font-extrabold ">
          {name}
        </h3>
  
        <!-- Title -->
        <p class="font-semibold mb-3">
          {title}
        </p>
  
        <!-- Description -->
        <p class=" mb-4 font-semibold">
          {description}
        </p>
  
        <!-- LinkedIn Link -->
        <a
          href={linkedinUrl}
          class=" hover:underline inline-flex items-center gap-2"
        >
          <!-- LinkedIn Icon -->
          <svg
            class="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
            />
          </svg>
          LinkedIn
        </a>
      </div>
    </div>
  </div>