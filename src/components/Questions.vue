<template>
  <div class="bg-gray-800">
    <div class="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
      <div class="mx-auto max-w-4xl divide-y divide-white/10">
        <h2 class="text-4xl font-semibold tracking-tight text-white sm:text-5xl">Frequently asked questions</h2>
        <dl class="mt-10 space-y-6 divide-y divide-white/10">
          <Disclosure as="div" v-for="faq in faqs" :key="faq.question" class="pt-6" v-slot="{ open }">
            <dt>
              <DisclosureButton class="flex w-full items-start justify-between text-left text-white">
                <span class="text-base/7 font-semibold">{{ faq.question }}</span>
                <span class="ml-6 flex h-7 items-center">
                  <PlusSmallIcon v-if="!open" class="size-6" aria-hidden="true" />
                  <MinusSmallIcon v-else class="size-6" aria-hidden="true" />
                </span>
              </DisclosureButton>
            </dt>
            <DisclosurePanel as="dd" class="mt-2 pr-12">
              <p class="text-base/7 text-gray-300">{{ faq.answer }}</p>
            </DisclosurePanel>
          </Disclosure>
        </dl>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/vue/24/outline'

const faqs = [
  {
    question: "Your content is very thin and there are not many members, should I be concerned?",
    answer:
      `No, we are just starting out. However by the time you have finished the current content, new content
      will be added. Also fewer members in the community means you can get more hands on tutoring with the
      instructor.`,
  },
  {
    question: "How long until I can build and launch my own apps?",
    answer:
      `You will be able to build and launch your own apps in around 3 months, as long as you are dedicated and
      put in the hardwork.`,
  },
  {
    question: "How long until I can get a job as a developer?",
    answer:
      `It depends on how many hours you put it. But generally once you have launched your own apps, 
      you can build your own portfolio and start applying for jobs once you feel confident with the interview
      prep we provide.`,
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer:
      `Yes, absolutely. You can cancel your subscription anytime. You will have access to the course until the end of the month.`,
  },
  {
    question: "Do you offer refunds?",
    answer:
      `Yes, if you are not happy with learning platform and we have failed to deliver the value 
      you expected, we will be happy to refund your subscription`,
  }, {
    question: "What if I don't have any experience?",
    answer:
      `No problem, we will provide you with all the basics from scratch.`,
  },
  // More questions...
]
</script>
