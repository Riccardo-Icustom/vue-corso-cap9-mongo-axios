<script setup>
import { ref, onMounted } from 'vue'
const classes = ref('')
const classBase = 'btn'
const props = defineProps({
  type: {
    type: String,
    required: false,
    validator(value) {
      return ['success', 'danger'].includes(value)
    }
  },
  disabled: {
    type: Boolean,
    required: false
  }
})

const emit = defineEmits(['click'])

const handleClick = () => {
  emit('click')
}

onMounted(() => {
  let classType = ''
  switch (props.type) {
    case 'success':
      classType = 'btn-success'
      break
    case 'danger':
      classType = 'btn-danger'
      break
    default:
      classType = 'btn-default'
      break
  }
  classes.value = `${classBase} ${classType}`
})
</script>

<template>
  <button :className="classes" :disabled="disabled" @click="handleClick">
    <slot></slot>
  </button>
</template>

<style scoped>
.btn {
  @apply p-2 rounded-md text-base font-bold text-white;
}

.btn-default {
  @apply bg-blue-600 hover:bg-blue-700;
}

.btn-success {
  @apply bg-green-600 hover:bg-green-700;
}

.btn-danger {
  @apply bg-red-500 hover:bg-red-700;
}

:disabled {
  @apply bg-gray-400 hover:bg-gray-400 cursor-not-allowed;
}
</style>
