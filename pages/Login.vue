<template>
  <div class="bg-gray-800 sm:py-32">
    <main>

    <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <img class="mx-auto h-10 w-auto" src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500"
          alt="Your Company" />
        <h2 class="mt-10 text-center text-2xl/9 font-bold tracking-tight text-white">Sign in to your account</h2>
      </div>

      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form class="space-y-6" @submit.prevent>
          <!-- Email / Username -->
          <div>
            <label for="email" class="block text-sm/6 font-medium text-white">Email address / Username</label>
            <div class="mt-2">
              <input type="text" name="email" id="email" v-model="username" required="true"
                class="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" 
              />
    
              <div class="rounded-md bg-red-50 p-4 mt-2 py-2"  v-for="error in errorFeedback?.username" :key="error">
                <div class="flex">
                  <div class="shrink-0">
                    <XCircleIcon class="size-5 text-red-400" aria-hidden="true" />
                  </div>
                  <div class="ml-3">
                    <h3 class="text-sm font-medium text-red-800">{{ error}}</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Password -->
          <div>
            <div class="flex items-center justify-between">
              <label for="password" class="block text-sm/6 font-medium text-white">Password</label>
              <div class="text-sm">
                <a href="#" class="font-semibold text-indigo-400 hover:text-indigo-300">Forgot password?</a>
              </div>
            </div>

            <div class="mt-2">
              <input type="password" 
                name="password" 
                id="password" 
                v-model="password" 
                autocomplete="current-password" 
                required=true
                class="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" />
            </div>

            <div class="rounded-md bg-red-50 p-4 mt-2 py-2"  v-for="error in errorFeedback?.password" :key="error">
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

          <div>
            <button type="submit"
              class="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              @click="submitLogin()"
            >
              Sign in
            </button>
          </div>
        </form>

        <p class="mt-10 text-center text-sm/6 text-gray-400">
          Not a member?
          {{ ' ' }}
          <a href="#" class="font-semibold text-indigo-400 hover:text-indigo-300">Create an account for free</a>
        </p>
      </div>
    </div>
    </main>
    </div>

    <!-- <SignUpCTA /> -->
</template>

<script setup lang="ts">
import SignUpCTA from '~/src/components/SignUpCTA.vue'
import * as userHttp from '~/src/http/user.http'
import { useRouter } from 'vue-router'
import { XCircleIcon } from '@heroicons/vue/24/outline'

const username = ref('')
const password = ref('')

const errorFeedback = ref<{
  username: string[]
  password: string[]
}>({
  username: [],
  password: []
})

async function submitLogin() {
  const loginResponse = await userHttp
    .login({
      username: username.value,
      password: password.value
    })
    .catch((error) => {
      if ([400, 401].includes(error.response.status)) {
        errorFeedback.value = error.response.data.errors
      }
    })

  if (loginResponse?.token) {
    localStorage.setItem('auth_token', loginResponse.token)
    // router.push('/courses')
    window.location.href = '/membercourses';

  }
}

</script>
