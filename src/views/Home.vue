<template>
  <div class="home flex justify-center flex-col items-center">
<img src="https://source.unsplash.com/random" 
     alt="Random Picture 2" 
     class="hidden lg:block w-full h-64 object-cover">
    <div class="flex flex-col -m-24 items-center bg-gray-400 w-1/3 p-10 rounded-lg shadow-xl" >
      <img 
          class="h-64 w-64 rounded-full object-cover" 
          src="https://source.unsplash.com/random" 
          alt="Random Picture">
      <h5 class="text-2xl font-semibold">Some Information of the Picture</h5>
      <p class="text-left mt-4"><span class="sm:text-purple-900 md:text-teal-200 font-extrabold">
        Lorem ipsum </span> dolor sit amet, consectetur adipisicing elit. 
        Dicta assumenda sequi quas adipisci nemo unde officia eius perferendis
        ad incidunt facere debitis, aut, itaque sit pariatur facilis, temporibus iure harum.</p>
    </div>
  </div>
</template>

<script lang="ts">

export default({
  name: 'Home',
  components: {
  },
});
</script>
