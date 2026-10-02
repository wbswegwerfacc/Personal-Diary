import { useState, useEffect } from 'react'
import Header from './components/Header'
import EntryList from './components/EntryList'
import AddEntryModal from './components/AddEntryModal'
import ViewEntryModal from './components/ViewEntryModal'

export default function App() {
  const [entries, setEntries] = useState(() => {
    try {
      const stored = localStorage.getItem('diaryEntries')
      return stored ? JSON.parse(stored) : []
    } catch {
      return []
    }
  })

  const [showAddModal, setShowAddModal] = useState(false)
  const [selectedEntry, setSelectedEntry] = useState(null)

  useEffect(() => {
    try {
      localStorage.setItem('diaryEntries', JSON.stringify(entries))
    } catch (e) {
      console.error('LocalStorage konnte nicht aktualisiert werden:', e)
    }
  }, [entries])

  const handleAddEntry = (newEntry) => {
    setEntries((prevEntries) => [newEntry, ...prevEntries])
    setShowAddModal(false)
  }

  return (
    <div className="relative min-h-screen bg-neutral-950 text-neutral-100 flex flex-col justify-between overflow-x-hidden">
      {/* Sanfter petrolfarbener Glow im Hintergrund */}
      <div className="fixed -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-b from-teal-500/20 via-emerald-600/10 to-transparent blur-[120px] rounded-full pointer-events-none" />

      <main className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-10 flex-1">
        <Header onOpenModal={() => setShowAddModal(true)} />

        <EntryList
          entries={entries}
          onSelectEntry={(entry) => setSelectedEntry(entry)}
        />
      </main>

      <AddEntryModal
        isOpen={showAddModal}
        onClose={() => setShowAddModal(false)}
        onSubmit={handleAddEntry}
        existingEntries={entries}
      />

      <ViewEntryModal
        selectedEntry={selectedEntry}
        onClose={() => setSelectedEntry(null)}
      />

      <footer className="relative z-10 py-6 text-center text-xs text-neutral-600">
        Personal Diary &bull; Gespeichert im lokalen Browserspeicher
      </footer>
    </div>
  )
}