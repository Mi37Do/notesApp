<template>
    <div
        class="w-full h-fit border-b border-slate-100 p-4 flex flex-col gap-2 hover:bg-slate-50 transition-all duration-200 cursor-pointer">
        <div class="w-full flex justify-between items-center">
            <span class="text-md font-semibold truncate">{{ note.title }}</span>
            <button @click="useNote.deleteNote(note.id)" class="btn btn-sm btn-square btn-ghost">
                <times-icon class="w-5 h-5 fill-red-500" />
            </button>
        </div>

        <span>{{ note.description }}</span>

        <span class="flex justify-end gap-2 text-xs text-slate-400">{{ note.time }} | {{ note.date }}</span>
    </div>
</template>

<script setup>
import timesIcon from "../../assets/icons/timesIcon.vue"
import { useNoteStore } from "../../stores/notes"
const props = defineProps(['note'])
const useNote = useNoteStore()
</script>

<style lang="scss" scoped></style>