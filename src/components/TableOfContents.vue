<template>
  <div class="bg-gray-900">
    <div class="mx-auto max-w-7xl">
      <div class="bg-gray-900 py-10">
        <div class="px-4 sm:px-6 lg:px-8">
          <div class="sm:flex sm:items-center">
            <div class="sm:flex-auto">
              <h1 class="text-base font-semibold text-white">Introduction (33m)</h1>
            </div>
            <div class="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
              <!-- <button type="button" class="block rounded-md bg-indigo-500 px-3 py-2 text-center text-sm font-semibold text-white hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
                Add user
              </button> -->
            </div>
          </div>
          <div class="mt-8 flow-root">
            <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                <table class="min-w-full divide-y divide-gray-700">
                  <thead>
                    <tr>
                      <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-0"></th>
                      <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-white"></th>
                      <!-- <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-white">Email</th>
                      <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-white">Role</th> -->
                      <!-- <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-0">
                        <span class="sr-only">Edit</span>
                      </th> -->
                    </tr>
                  </thead>

                  <tbody class="divide-y divide-gray-800">
                    <tr v-for="chapter in chapters" :key="chapter.name">
                      <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-white sm:pl-0">{{ chapter.name }}</td>
                      <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-300">{{ chapter.duration }}</td>
                      <!-- <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-300">{{ person.email }}</td>
                      <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-300">{{ person.role }}</td>
                      <td class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                        <a href="#" class="text-indigo-400 hover:text-indigo-300"
                          >Edit<span class="sr-only">, {{ person.name }}</span></a
                        >
                      </td> -->
                    </tr>
                  </tbody>
                </table>
              </div>
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

const chapters = [
  {
    name: 'Chapter 1',
    duration: '04:00',
  }, {
    name: 'Chapter 2',
    duration: '05:00',
  }, {
    name: 'Chapter 3',
    duration: '07:00',
  }, {
    name: 'Chapter 4',
    duration: '12:23',
  }
]
</script>
