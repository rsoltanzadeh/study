<script setup lang="ts">
interface Props {
  href?: string
  label: string
  title: string
  paragraphs: string[]
}
const props = defineProps<Props>()

const isOpen = ref(false)
</script>

<template>
  <ProseA
    class="h-full cursor-pointer"
    active-class="text-primary"
    inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
    @click="isOpen = true"
  >
    {{ props.label }}
  </ProseA>
  <UModal
    v-model="isOpen"
    :ui="{ width: 'lg:max-w-3xl' }"
  >
    <UCard>
      <template #header>
        <h1 class="font-bold">
          {{ props.title }}
        </h1>
      </template>

      <p
        v-for="(paragraph, index) in props.paragraphs"
        :key="index"
        class="my-4 italic"
      >
        {{ paragraph }}
      </p>

      <template
        v-if="props.href"
        #footer
      >
        <ULink
          :to="props.href"
          target="_blank"
          class="text-primary"
          active-class="text-emerald"
          inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
        >
          {{ props.href }}
        </ULink>
      </template>
    </UCard>
  </UModal>
</template>
