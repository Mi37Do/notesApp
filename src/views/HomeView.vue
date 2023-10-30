<template>
  <main class="w-full h-screen flex justify-center bg-slate-50">
    <div class="w-full h-full max-w-xl bg-white pt-4 px-4 flex flex-col">

      <div class="w-full h-14 flex gap-4 pb-4 border-b border-slate-100">
        <search-input @searchQuery="getSearchQuery" />
        <router-link :to="{ name: 'add-note' }" class="btn btn-sm pixa-btn w-10 btn-primary p-0">
          <plusIcon class="w-5 h-5" />
        </router-link>
      </div>

      <div class="w-full grow overflow-hidden">
        <div class="w-full h-full overflow-auto">
          <div v-auto-animate class="w-full h-fit flex flex-col">
            <note-item v-for="note in useNote.filtredNotes" :key="note.id" :note="note" />
          </div>
        </div>
      </div>

    </div>

  </main>
</template>
<script setup>
import searchInput from '@/components/commun/searchInput.vue'
import plusIcon from '@/assets/icons/plusIcon.vue'
import noteItem from '../components/notes/noteItem.vue';
import { useNoteStore } from '../stores/notes';
import { onMounted, ref } from 'vue';

const useNote = useNoteStore()
const filtredNotes = ref([])

const getSearchQuery = (query) => {
  useNote.filtredNotes = useNote.notes.filter(item => item.title.toLowerCase().includes(query.toLowerCase()))
}


onMounted(async () => {
  await useNote.getNotes()
  useNote.filtredNotes = useNote.notes
})
</script>

