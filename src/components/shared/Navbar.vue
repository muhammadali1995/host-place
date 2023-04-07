<template>
    <header class="bg-primary">
        <nav class="flex items-center justify-between p-4 lg:px-6">
            <div class="flex lg:flex-1">
                <a href="/" class="-m-1.5 p-1.5">
                    <img class="h-8 w-auto" src="../../assets/logo.png" alt="logo" />
                </a>
            </div>
            <div class="flex lg:hidden">
                <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    @click="mobileMenuOpen = true">
                    <Bars3Icon class="h-6 w-6" aria-hidden="true" />
                </button>
            </div>
            <div class="hidden lg:flex lg:gap-x-10">
                <a v-for="item in navigation" :key="item.name" :href="item.href" class="variant1">{{ $t(item.name) }}</a>
            </div>
            <div class="hidden lg:flex lg:flex-1 lg:justify-end">
                <button type="button" class="bg-transparent px-5 py-2 hover:bg-gray-150 mr-3 variant1">
                    {{ $t('Sign in') }}
                </button>
                <button type="button" class="bg-secondary px-5 py-2 text-sm text-white hover:bg-gray-250">
                    {{ $t('Sign up') }}</button>
            </div>
        </nav>
        <Dialog as="div" class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
            <div class="fixed inset-0 z-50" />
            <DialogPanel
                class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                <div class="flex items-center justify-between">
                    <a href="#" class="-m-1.5 p-1.5">
                        <img class="h-8 w-auto" src="../../assets/logo.png" alt="logo" />
                    </a>
                    <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = false">
                        <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <div class="mt-6 flow-root">
                    <div class="-my-6 divide-y divide-gray-500/10">
                        <div class="space-y-2 py-6">
                            <a v-for="item in navigation" :key="item.name" :href="item.href"
                                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">{{
                                    item.name }}</a>
                        </div>
                        <div class="py-6">
                            <a href="#"
                                class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Sign
                                in</a>
                        </div>
                    </div>
                </div>
            </DialogPanel>
        </Dialog>
    </header>
</template>

<script setup>
import { ref } from 'vue'
import { Dialog, DialogPanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

const navigation = [
    { name: 'VPS', href: '/vps' },
    { name: 'Webhosting & Domein', href: '/webhosting' },
    { name: 'Dedicated Server & Colo', href: '#' },
    { name: 'Reseller', href: '#' },
    { name: 'Over Ons', href: '#' },
]

const mobileMenuOpen = ref(false)

</script>
