import { createStore } from 'vuex'

export default createStore({
  state: {
    notes: []
  },
  mutations: {
    save_note(state, title) {
      state.notes.push(title)
    }
  },
  actions: {
    saveNote({commit}, title) {
      commit('save_note', title)
    }
  },
  getters: {
    totalNotes(state) {
      return state.notes.length
    }
  },
  modules: {
  }
})
