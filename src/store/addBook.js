import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  books : [
    {
      id: 1,
      title: "A Short History of Europe",
      cover: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=400&q=80",
      isRead: true,
      author: "Simon Jenkins",
      synopsis: "In this dazzling new history, bestselling author Simon Jenkins grippingly tells the story of its evolution from warring peoples to peace, wealth and freedom - a story that twists and turns from Greece and Rome, through the Dark Ages, the Reformation and the French Revolution, to the Second World War and up to the present day."
    },
    {
      id: 2,
      title: "Penguin Classics",
      cover: "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?auto=format&fit=crop&w=400&q=80",
      isRead: false,
      author: "Henry Eliot",
      synopsis: "The Penguin Classics Book covers all the greatest works of fiction, poetry, drama, history, and philosophy in between, this reader's companion encompasses 500 authors, 1,200 books, and 4,000 years of world literature, from ancient Mesopotamia to World War I."
    },
    {
      id: 3,
      title: "Becoming",
      cover: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
      isRead: false,
      author: "Michelle Obama",
      synopsis: "“Becoming” is an autobiography detailing the highs and lows of Michelle Obama's incredible journey from humble beginnings in the less glamourous South Side of Chicago, to the grandeur of the White House and life as America's first African-American First Lady."
    },
    {
      id: 4,
      title: "Sonnets",
      cover: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=400&q=80",
      isRead: false,
      author: "James Anthony",
      synopsis: "Shakespeare wrote 154 sonnets published in his 'quarto' in 1609, covering themes such as the passage of time, mortality, love, beauty, infidelity, and jealousy. The first 126 of Shakespeare's sonnets are addressed to a young man, and the last 28 addressed to a woman – a mysterious 'dark lady'."
    }
  ]
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {

    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer