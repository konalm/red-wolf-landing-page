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
        <form class="space-y-6" @submit.prevent="submitSignUp()">
          <div>
            <label for="email" class="block text-sm/6 font-medium text-white">Username</label>
            <div class="mt-2">
              <input type="text" name="username" id="username" v-model="username" required="true"
                class="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
              />
            </div>

            <div class="rounded-md bg-red-50 p-4 mt-2 py-2"  
              v-for="error in errorFeedback?.username" 
              :key="error"
            >
              <div class="flex">
                <div class="shrink-0">
                  <XCircleIcon class="size-5 text-red-400" aria-hidden="true" />
                </div>
                <div class="ml-3">
                    <h3 class="text-sm font-medium text-red-800">{{ error }}</h3>
                </div>
              </div>
            </div>
          </div>

          <!-- Email Address -->
          <div>
            <label for="email" class="block text-sm/6 font-medium text-white">Email address</label>
            <div class="mt-2">
              <input type="email" name="email" id="email" autocomplete="email" required="true"
                v-model="email"
                class="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" 
              />
            </div>

            <div class="rounded-md bg-red-50 p-4 mt-2 py-2"  
              v-for="error in errorFeedback?.email" 
              :key="error"
            >
              <div class="flex">
                <div class="shrink-0">
                  <XCircleIcon class="size-5 text-red-400" aria-hidden="true" />
                </div>
                <div class="ml-3">
                    <h3 class="text-sm font-medium text-red-800">{{ error }}</h3>
                </div>
              </div>
            </div>
          </div>

          <!-- Password -->
          <div>
            <div class="flex items-center justify-between">
              <label for="password" class="block text-sm/6 font-medium text-white">Password</label>
            </div>
            <div class="mt-2">
              <input type="password" name="password" id="password" autocomplete="current-password" 
                v-model="password"
                required=true
                class="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" />
            </div>

            <div class="rounded-md bg-red-50 p-4 mt-2 py-2"  
              v-for="error in errorFeedback?.password" 
              :key="error"
            >
              <div class="flex">
                <div class="shrink-0">
                  <XCircleIcon class="size-5 text-red-400" aria-hidden="true" />
                </div>
                <div class="ml-3">
                  <h3 class="text-sm font-medium text-red-800">{{ error }}</h3>
                </div>
              </div>
            </div>
          </div>

          <!-- Confirm Password -->
          <div>
            <div class="flex items-center justify-between">
              <label for="password" class="block text-sm/6 font-medium text-white">Confirm Password</label>
            </div>
            <div class="mt-2">
              <input type="password" name="password" id="password" autocomplete="current-password" 
                v-model="passwordConfirm"
                required=true
                class="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" 
              />
            </div>

            <div class="rounded-md bg-red-50 p-4 mt-2 py-2"  
              v-for="error in errorFeedback?.confirmPassword" 
              :key="error"
            >
              <div class="flex">
                <div class="shrink-0">
                  <XCircleIcon class="size-5 text-red-400" aria-hidden="true" />
                </div>
                <div class="ml-3">
                    <h3 class="text-sm font-medium text-red-800">{{ error }}</h3>
                </div>
              </div>
            </div>
          </div>

          <!-- Payment Information -->
          <div class="rounded-md bg-blue-50 p-2">
            <div class="flex">
              <div class="shrink-0">
                <InformationCircleIcon class="size-5 text-blue-400" aria-hidden="true" />
              </div>

              <div class="ml-1 flex-1 md:flex md:justify-between">
                <p class="text-sm text-blue-700">Monthly £4.00 (Payment via stripe)</p>
              </div>
            </div>
          </div>

          <!-- Toggle Annual Billing -->
           <div>
              <SwitchGroup as="div" class="flex items-center">
                <!-- <SwitchLabel as="span" class="ml-3 text-sm">
                  <span class="font-medium text-gray-400">Monthly £4.00</span>
                  {{ ' ' }}
                </SwitchLabel> -->

                <Switch v-model="annualBilling" 
                  :class="[annualBilling 
                    ? 'bg-indigo-600' 
                    : 'bg-gray-200', 
                    'relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 focus:outline-hidden']">
                  <span aria-hidden="true" 
                    :class="[annualBilling 
                      ? 'translate-x-5' 
                      : 'translate-x-0', 
                      'pointer-events-none inline-block size-5 transform rounded-full bg-white ring-0 shadow-sm transition duration-200 ease-in-out']" />
                </Switch>
              
      
                <SwitchLabel as="span" class="ml-3 text-sm">
                  <span class="font-medium text-gray-400">Annually £30.00</span>
                  {{ ' ' }}
                  <span class="text-gray-200">(Save 37.5%)</span>
                </SwitchLabel>
            </SwitchGroup>
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
import * as userHttp from '~/src/http/user.http'
import { useRouter } from 'vue-router'

import { ref } from 'vue'
import { Switch, SwitchGroup, SwitchLabel } from '@headlessui/vue'

const router = useRouter()

const username = ref('')
const email = ref('')
const password = ref('')
const passwordConfirm = ref('')
const annualBilling = ref(false)

const errorFeedback = ref<{
  username: string[]
  email: string[]
  password: string[]
  confirmPassword: string[]
}>({
  username: [],
  email: [],
  password: [],
  confirmPassword: []
})

async function submitSignUp() {
  console.log('submitSignUp ()');

  errorFeedback.value = {
    username: [],
    email: [],
    password: [],
    confirmPassword: []
  }

  if (password.value !== passwordConfirm.value) {
    errorFeedback.value.confirmPassword = ['Password does not match']
    return
  }

  const signupResponse = await userHttp
    .signUp({
      username: username.value,
      email: email.value,
      password: password.value,
      annualBilling: annualBilling.value
    })
    .catch((error) => {
      if (error.response.status === 400) {
        errorFeedback.value = error.response.data.errors
      }

      throw error;
    })

  if (signupResponse?.token) {
    localStorage.setItem('auth_token', signupResponse.token)
  }

  window.location.href = signupResponse.paymentLink
}

</script>
