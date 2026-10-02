import AddEntryButton from './AddEntryButton'

export default function Header({ onOpenModal }) {
  return (
    <header className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 py-6 border-b border-white/10 mb-8">
      <div>
        <h1 className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-teal-400 via-teal-200 to-emerald-400 bg-clip-text text-transparent">
          Personal Diary
        </h1>
        <p className="text-sm text-neutral-400 mt-1">
          Halte deine täglichen Gedanken und Momente fest
        </p>
      </div>
      <AddEntryButton onOpenModal={onOpenModal} />
    </header>
  )
}