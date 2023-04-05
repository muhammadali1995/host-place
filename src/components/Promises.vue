<template>
    <div class="bg-white py-24 sm:py-32 mt-16">
        <div class="lg:px-32 md:px-20 sm:px-10 px-4">
            <h2 class="text-3xl text-center font-bold tracking-tight text-gray-350 sm:text-5xl">{{ $t('Onze belofte') }}
            </h2>
            <p class="text-center text-gray-350 text-md mt-2 max-w-xl mx-auto">
                {{ $t('Wij zijn zelf developers. We weten waar we tegen aan lopen en luisteren graag naar de specifieke wensen van onze peers') }}
            </p>
            <ul role="list"
                class="mx-auto mt-11 grid grid-cols-1 gap-y-6 gap-x-6 lg:grid-cols-3 sm:grid-cols-2 xl:grid-cols-4">
                <li v-for="person in people" :key="person.name" class="bg-primary">
                    <img :src="person.imageUrl" alt="image" class="mt-16 mx-auto mb-14" />
                    <div class="p-6">
                        <h3 class="text-md font-semibold leading-8 tracking-tight text-gray-350 text-center">
                            {{$t( person.name)}}
                        </h3>
                        <p class="leading-7 mt-9 text-gray-350 text-center">
                            {{$t( person.role) }}
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
  
<script setup>
import control from './../assets/controlbar.png'
import scale from './../assets/scalebar.png'
import heers from './../assets/heersbar.png'
import betal from './../assets/betalbar.png'

const people = [
    {
        name: 'Controleerbaar',
        role: 'Transparante monitoring maakt onze performance altijd inzichtelijk',
        imageUrl: control,
    },
    {
        name: 'Schaalbaar',
        role: 'Transparante monitoring maakt onze performance altijd inzichtelijk',
        imageUrl: scale,
    },
    {
        name: 'Beheersbaar',
        role: 'Transparante monitoring maakt onze performance altijd inzichtelijk',
        imageUrl: heers,
    },
    {
        name: 'Betaalbaar',
        role: 'Transparante monitoring maakt onze performance altijd inzichtelijk',
        imageUrl: betal,
    }
]
</script>