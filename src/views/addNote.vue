<template>
    <main class="w-full h-screen flex justify-center bg-slate-50">
        <div class="w-full h-full max-w-xl bg-white pt-4 px-4 flex flex-col">
            <div class="w-full h-14 flex gap-4 pb-4 border-b border-slate-100">
                <span class="text-xl font-bold  text-primary capitalize mt-1.5">Add new note</span>
            </div>
            <form class="w-full grow py-4 flex flex-col gap-4" @submit.prevent="addNewNote">
                <input maxlength="40" v-model="useNote.noteToAdd.title" type="text" required placeholder="title" class="pixa-input w-full transition-all duration-200
                ">

                <textarea v-model="useNote.noteToAdd.description" required maxlength="500" class="w-full h-60 rounded-lg ring-0 outline-none border border-slate-200 focus:border-0 focus:border-primary
                "></textarea>

                <span :class="useNote.noteToAdd.description.length === 500 ? 'text-red-500' : 'text-slate-500'"
                    class="w-full flex justify-end text-sm ">{{ useNote.noteToAdd.description.length || '0'
                    }}/500</span>

                <div class="w-full flex justify-end gap-2">
                    <button type="submit" class="btn btn-sm pixa-btn btn-primary">add</button>
                    <button type="reset" @click="cancelNote" class="btn btn-sm pixa-btn btn-ghost">cancel</button>
                </div>
            </form>
        </div>

    </main>
</template>
<script setup>
import { useRouter } from 'vue-router';
import { useNoteStore } from '../stores/notes';
const useNote = useNoteStore()
const router = useRouter()
const addNewNote = async () => {
    useNote.noteToAdd.date = new Date()
    await useNote.addNote()
}

const cancelNote = () => {
    useNote.intiStore
    router.push({ name: 'home' })
}
</script>
  
  