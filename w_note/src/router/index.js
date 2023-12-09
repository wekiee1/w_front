import NoteMain from '../views/NoteMain.vue'

const routes = [
  {
    path: '/',
    redirect: "/note"
  },
  {
    path: '/note',
    name: 'NoteMain',
    component: NoteMain
  },
]

export default routes

