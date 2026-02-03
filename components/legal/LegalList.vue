<template>
  <ul v-if="list.type === 'bullet'" class="legal-list legal-list-bullet">
    <li v-for="(item, index) in list.items" :key="index" class="legal-list-item">
      <template v-if="typeof item === 'string'">
        {{ item }}
      </template>
      <template v-else>
        {{ item.text }}
        <ul v-if="item.subitems && item.subitems.length" class="legal-sublist">
          <li v-for="(subitem, subindex) in item.subitems" :key="subindex">
            {{ subitem }}
          </li>
        </ul>
      </template>
    </li>
  </ul>

  <ol v-else class="legal-list legal-list-numbered">
    <li v-for="(item, index) in list.items" :key="index" class="legal-list-item">
      <template v-if="typeof item === 'string'">
        {{ item }}
      </template>
      <template v-else>
        {{ item.text }}
        <ol v-if="item.subitems && item.subitems.length" class="legal-sublist">
          <li v-for="(subitem, subindex) in item.subitems" :key="subindex">
            {{ subitem }}
          </li>
        </ol>
      </template>
    </li>
  </ol>
</template>

<script setup lang="ts">
import type { LegalList } from '~/types'

defineProps<{
  list: LegalList
}>()
</script>

<style scoped>
.legal-list {
  @apply mb-6 ml-6 space-y-2 text-dark-gray;
}

.legal-list-bullet {
  @apply list-none;
}

.legal-list-bullet .legal-list-item {
  @apply relative pl-4;
}

.legal-list-bullet .legal-list-item::before {
  content: '';
  @apply absolute left-0 top-2 w-2 h-2 bg-neon-cyan rounded-full;
}

.legal-list-numbered {
  @apply list-decimal list-outside;
}

.legal-list-numbered .legal-list-item {
  @apply pl-2;
}

.legal-sublist {
  @apply mt-2 ml-4 space-y-1;
}

.legal-list-bullet .legal-sublist {
  @apply list-none;
}

.legal-list-bullet .legal-sublist li {
  @apply relative pl-4;
}

.legal-list-bullet .legal-sublist li::before {
  content: '';
  @apply absolute left-0 top-2 w-1.5 h-1.5 bg-neon-cyan/70 rounded-full;
}

.legal-list-numbered .legal-sublist {
  @apply list-decimal list-outside;
}
</style>
