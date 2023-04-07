<template>
    <div class="px-4 lg:px-32">
        <h1 class="mt-4 lg:mt-16 text-center variant5">
            {{ $t('Veel gestelde vragen') }}
        </h1>
        <p class="mt-1.5 text-gray-350 text-center text-md mb-14">
            {{ $t('Exercitation dolore reprehenderit fugi') }}
        </p>
        <Accordion>
            <AccordionPanel v-for="item in arr" class="accordion mb-6">
                <AccordionHeader>
                    <hr class="bg-gray-250 mb-6">
                    <div class="flex items-start justify-between mb-2">
                        <p class="text-xl text-gray-350 font-semibold">
                            {{ $t(item.title) }}
                        </p>
                    </div>
                </AccordionHeader>
                <AccordionContent class="content">
                    <p class="text-xl text-gray-350 font-semibold">
                        {{ $t(item.subtitile) }}
                    </p>
                </AccordionContent>
            </AccordionPanel>
        </Accordion>
    </div>
</template>
<script setup>
import { Accordion, AccordionPanel, AccordionHeader, AccordionContent } from 'flowbite-vue'

const arr = [
    { id: 1, title: 'Eiusmod id laboris nulla dolor veniam nisi consequat velit est?', subtitile: 'Eiusmod id laboris nulla dolor veniam nisi consequat velit est?Eiusmod id laboris nulla dolor veniam nisi consequat velit est?' },
    { id: 2, title: 'Eiusmod id laboris nulla dolor veniam nisi consequat velit est?', subtitile: 'Eiusmod id laboris nulla dolor veniam nisi consequat velit est?Eiusmod id laboris nulla dolor veniam nisi consequat velit est?' },
    { id: 3, title: 'Eiusmod id laboris nulla dolor veniam nisi consequat velit est?', subtitile: 'Eiusmod id laboris nulla dolor veniam nisi consequat velit est?Eiusmod id laboris nulla dolor veniam nisi consequat velit est?' },
    { id: 4, title: 'Eiusmod id laboris nulla dolor veniam nisi consequat velit est?', subtitile: 'Eiusmod id laboris nulla dolor veniam nisi consequat velit est?Eiusmod id laboris nulla dolor veniam nisi consequat velit est?' },
    { id: 5, title: 'Eiusmod id laboris nulla dolor veniam nisi consequat velit est?', subtitile: 'Eiusmod id laboris nulla dolor veniam nisi consequat velit est?Eiusmod id laboris nulla dolor veniam nisi consequat velit est?' },
]
</script>