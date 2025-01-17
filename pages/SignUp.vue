<template>
  <div class="bg-gray-800 sm:py-32">
    <main>

    <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <img class="mx-auto h-10 w-auto" src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500"
          alt="Your Company" />
        <h2 class="mt-10 text-center text-2xl/9 font-bold tracking-tight text-white">Become a Member</h2>
      </div>

      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form class="space-y-6" action="#" method="POST">
          <div>
            <label for="email" class="block text-sm/6 font-medium text-white">Username</label>
            <div class="mt-2">
              <input type="email" name="email" id="email" autocomplete="email" required="true"
                class="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" />
            </div>
          </div>

          <!-- Email Address -->
          <div>
            <label for="email" class="block text-sm/6 font-medium text-white">Email address</label>
            <div class="mt-2">
              <input type="email" name="email" id="email" autocomplete="email" required="true"
                class="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" />
            </div>
          </div>

          <!-- Password -->
          <div>
            <div class="flex items-center justify-between">
              <label for="password" class="block text-sm/6 font-medium text-white">Password</label>
            </div>
            <div class="mt-2">
              <input type="password" name="password" id="password" autocomplete="current-password" required=true
                class="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" />
            </div>
          </div>

          <!-- Confirm Password -->
          <div>
            <div class="flex items-center justify-between">
              <label for="password" class="block text-sm/6 font-medium text-white">Confirm Password</label>
            </div>
            <div class="mt-2">
              <input type="password" name="password" id="password" autocomplete="current-password" required=true
                class="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" />
            </div>
          </div>

          <!-- Payment Information -->
          <div class="rounded-md bg-blue-50 p-1">
            <div class="flex">
              <div class="shrink-0">
                <InformationCircleIcon class="size-5 text-blue-400" aria-hidden="true" />
              </div>

              <div class="ml-1 flex-1 md:flex md:justify-between">
                <p class="text-sm text-blue-700">£4.00 monthly or £30.00 annually (via Stripe)</p>
              </div>
            </div>
          </div>
          <div>

          <button 
            type="submit"
            class="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-3 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          >
            Sign Up and Continue to Payment
          </button>
  </div>



</form>
</div>
</div>
</main>
</div>

<!-- <SignUpCTA /> -->
</template>

<script setup lang="ts">
import SignUpCTA from '../src/components/SignUpCTA.vue'
import { InformationCircleIcon } from '@heroicons/vue/20/solid'

</script>
