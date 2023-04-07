<template>
    <div class="relative overflow-hidden flex flex-col justify-center items-center bg-primary mt-32 py-20">
        <img src="../../assets/dots.png" alt="dots" class="absolute -top-20 left-40 w-40 rotate-90 hidden md:block">
        <img src="../../assets/circle.png" alt="dots" class="absolute -bottom-32 -left-28 w-72 rotate-90 hidden md:block">
        <img src="../../assets/dots.png" alt="dots" class="absolute -bottom-10 right-20 w-32 rotate-90 hidden md:block">
        <h1 class="variant5">{{ $t('Start nu!') }}</h1>
        <p class="text-center mx-auto max-w-md text-md font-normal text-gray-350 mt-2">{{ $t(`
                    Qui ut exercitation officia proident
                    enim non tempor tempor ipsum ex nulla ae adipisicing sit consequat enim elit cupidatat origin`) }}</p>
        <button type="button" class="bg-gray-450 text-md px-5 py-2 text-secondary mt-5">
            {{ $t('Contact us') }}
        </button>
    </div>
</template>

<script setup>
</script>  