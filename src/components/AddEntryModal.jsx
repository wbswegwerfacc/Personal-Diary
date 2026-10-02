import EntryForm from './EntryForm'

export default function AddEntryModal({ isOpen, onClose, onSubmit, existingEntries }) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-lg bg-neutral-900/90 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl overflow-hidden">
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
          <h2 className="text-xl font-bold text-white">Neuer Tagebucheintrag</h2>
          <button
            onClick={onClose}
            className="text-neutral-400 hover:text-white p-1 rounded-lg text-lg leading-none cursor-pointer"
          >
            ✕
          </button>
        </div>

        <EntryForm
          onSubmit={onSubmit}
          onClose={onClose}
          existingEntries={existingEntries}
        />
      </div>
    </div>
  )
}