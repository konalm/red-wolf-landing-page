<template>

  <div class="overflow-hidden bg-gray-800 py-12 sm:py-1">

  <div class="px-4 sm:px-6 lg:px-8 bg-gray-800 mx-auto max-w-7xl px-6 lg:px-8">
    <!-- <div class="sm:flex sm:items-center">
 
    </div> -->

    <div class="mt-8 flow-root">
      <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <div class="overflow-hidden shadow ring-1 ring-black/5 sm:rounded-lg">
            <table class="min-w-full divide-y divide-gray-700">
              <thead class="bg-gray-900">
                <tr>
                  <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-100 sm:pl-6">
                    Introduction (33m)
                  </th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-100"></th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-100"></th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-100"></th>
                  <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-6">
                    <span class="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>

              <tbody class="divide-y divide-gray-700 bg-grey-900">
                <tr v-for="course in courses" :key="course.name">
                  <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-100 sm:pl-6">{{ course.name }}</td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-100">
                    <div class="row">
                      {{ course.duration }}
                      <button 
                        type="submit"
                        class="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                      Play
                      </button>
                    </div>
                  </td>
                  <td class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                    <!-- <a href="#" class="text-indigo-600 hover:text-indigo-900"
                      >Edit<span class="sr-only">, {{ person.name }}</span></a
                    > -->
                  </td>
                </tr>
              </tbody>
            </table>

                        <table class="min-w-full divide-y divide-gray-700">
              <thead class="bg-gray-900">
                <tr>
                  <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-100 sm:pl-6">
                    Introduction (33m)
                  </th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-100"></th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-100"></th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-100"></th>
                  <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-6">
                    <span class="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>

              <tbody class="divide-y divide-gray-700 bg-grey-900">
                <tr v-for="course in courses" :key="course.name">
                  <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-100 sm:pl-6">{{ course.name }}</td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-100">{{ course.duration }}</td>
                  <td class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                    <!-- <a href="#" class="text-indigo-600 hover:text-indigo-900"
                      >Edit<span class="sr-only">, {{ person.name }}</span></a
                    > -->
                  </td>
                </tr>
              </tbody>
            </table>

                        <table class="min-w-full divide-y divide-gray-700">
              <thead class="bg-gray-900">
                <tr>
                  <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-100 sm:pl-6">
                    Introduction (33m)
                  </th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-100"></th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-100"></th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-100"></th>
                  <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-6">
                    <span class="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>

              <tbody class="divide-y divide-gray-700 bg-grey-900">
                <tr v-for="course in courses" :key="course.name">
                  <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-100 sm:pl-6">{{ course.name }}</td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-100">{{ course.duration }}</td>
                  <td class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                    <!-- <a href="#" class="text-indigo-600 hover:text-indigo-900"
                      >Edit<span class="sr-only">, {{ person.name }}</span></a
                    > -->
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script setup>
const people = [
  { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
  // More people...
]

const courses = [
  {
    name: 'Welcome',
    duration: '00:33'
  }, {
    name: 'Basics',
    duration: '33:22'
  }, {
    name: 'Operators',
    duration: '44:44'
  }
]
</script>