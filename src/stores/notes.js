import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import { uuid } from 'vue-uuid'
import { useRouter } from 'vue-router'

export const useNoteStore = defineStore('note', () => {
  const noteToAdd = reactive({
    title: '',
    description: '',
    date: null
  })
  const router = useRouter()
  const notes = ref([])
  const filtredNotes = ref([])

  const addNote = async () => {
    let tempDate = `${noteToAdd.date.getDate()}-${
      noteToAdd.date.getMonth() + 1
    }-${noteToAdd.date.getFullYear()}`

    let tempTime = `${noteToAdd.date.getHours()}:${noteToAdd.date.getMinutes()}`

    let response = await axios.post('/notes/', {
      id: uuid.v1(),
      title: noteToAdd.title,
      description: noteToAdd.description,
      date: tempDate,
      time: tempTime
    })

    intiStore()
    router.push({ name: 'home' })
    console.log(response)
  }

  const intiStore = () => {
    noteToAdd.title = ''
    noteToAdd.description = ''
    noteToAdd.date = null
    console.log(noteToAdd)
  }

  const getNotes = async () => {
    let response = await axios.get('/notes/')
    notes.value = response.data
  }

  const deleteNote = async (id) => {
    let response = await axios.delete(`/notes/${id}`)
    await getNotes()
    filtredNotes.value = notes.value
  }

  return { noteToAdd, addNote, intiStore, getNotes, notes, deleteNote, filtredNotes }
})
