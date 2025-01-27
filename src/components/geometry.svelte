<script lang="ts">
    
    export let width: string = "500";
    export let height: string = "500";
    export let primaryColor: string = "#2563eb";  // Blue
    export let secondaryColor: string = "#C7D2FE"; // Light purple
    export let accentColor: string = "#ECFCCB";    // Light green
  </script>
  
  <div class="absolute top-0 right-0 -z-10">
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 500 500" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      
      <path 
        d="M500 0C500 138.071 388.071 250 250 250V0H500Z" 
        fill={secondaryColor}
      />
      
      
      <path 
        d="M250 500C111.929 500 0 388.071 0 250H250V500Z" 
        fill={accentColor}
      />
      
      
      <path 
        d="M500 250C500 388.071 388.071 500 250 500V250H500Z" 
        fill={primaryColor}
      />
      
      
      <path 
        d="M250 0C388.071 0 500 111.929 500 250H250V0Z" 
        fill={accentColor}
      />
    </svg>
  </div>