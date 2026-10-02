import { useState } from 'react'

export default function EntryForm({ onSubmit, onClose, existingEntries }) {
  const [title, setTitle] = useState('')
  const [date, setDate] = useState(new Date().toISOString().split('T')[0])
  const [imageUrl, setImageUrl] = useState('')
  const [content, setContent] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setErrorMessage('')

    if (!title.trim() || !date.trim() || !imageUrl.trim() || !content.trim()) {
      setErrorMessage('Bitte fülle alle Pflichtfelder aus.')
      return
    }

    const dateExists = existingEntries.some((entry) => entry.date === date)
    if (dateExists) {
      setErrorMessage('Für dieses Datum existiert bereits ein Eintrag. Bitte komm morgen wieder!')
      return
    }

    const newEntry = {
      id: typeof crypto !== 'undefined' && crypto.randomUUID ? crypto.randomUUID() : Date.now().toString(),
      title: title.trim(),
      date: date.trim(),
      imageUrl: imageUrl.trim(),
      content: content.trim()
    }

    onSubmit(newEntry)
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      {errorMessage && (
        <div className="p-3 bg-rose-500/20 border border-rose-500/40 rounded-xl text-rose-300 text-sm">
          {errorMessage}
        </div>
      )}

      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-1">
          Titel
        </label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Mein Tag im Rückblick..."
          className="w-full bg-neutral-800/80 border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder-neutral-500 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition"
        />
      </div>

      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-1">
          Datum
        </label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full bg-neutral-800/80 border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder-neutral-500 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition"
        />
      </div>

      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-1">
          Bild-URL
        </label>
        <input
          type="url"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          placeholder="https://dein-bild.jpg"
          className="w-full bg-neutral-800/80 border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder-neutral-500 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition"
        />
      </div>

      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-1">
          Inhalt
        </label>
        <textarea
          rows={5}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Was ist dir heute passiert? Worüber hast du nachgedacht?"
          className="w-full bg-neutral-800/80 border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder-neutral-500 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition resize-none"
        />
      </div>

      <div className="flex items-center justify-end gap-3 mt-2">
        <button
          type="button"
          onClick={onClose}
          className="px-4 py-2 rounded-xl text-neutral-400 hover:text-white hover:bg-neutral-800 transition"
        >
          Abbrechen
        </button>
        <button
          type="submit"
          className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-400 hover:from-teal-400 hover:to-emerald-300 text-neutral-950 font-semibold shadow-lg shadow-teal-500/20 active:scale-95 transition cursor-pointer"
        >
          Speichern
        </button>
      </div>
    </form>
  )
}