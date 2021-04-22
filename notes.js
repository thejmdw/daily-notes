const notes = [
  {
    id: 1,
    subject: "git & gitHub",
    date: "April, 13, 2021",
    feeling: "confused",
    timeSpent: 360
  },
  {
    id: 2,
    subject: "JavaScript",
    date: "April, 15, 2021",
    feeling: "excited",
    timeSpent: 180
  }
]

// console.log(notes)

// --------

const noteAboutToday = {
  id: 3,
  subject: "Group Project",
  date: "April, 15, 2021",
  feeling: "pumped",
  timeSpent: 360
}

notes.push(noteAboutToday)

// console.log(notes);

// -------

// for (const note of notes) {
//   console.log(`
//   Note ${note.id}
//   ${note.date}
//   I learned ${note.subject}
//   I spent ${note.timeSpent} minutes working on it
//   I felt ${note.feeling}`)
// }

// const searchTerm = 360

// -----------

// for (const note of notes) {
//   if (note.timeSpent === 360) {
//     console.log(note)
//   }
// }

// --------

const createNote = (note) => {
  const lastIndex = notes.length - 1
  const currentNote = notes[lastIndex]
  const maxId = currentNote.id
  const nextNoteId = maxId + 1 

  note.id = nextNoteId
  notes.push(note)
}

const oneMoreNote = {
  id: null,
  subject: "JavaScript",
  date: "April, 16, 2021",
  feeling: "great",
  timeSpent: 75
}

createNote(oneMoreNote)

console.log(notes)