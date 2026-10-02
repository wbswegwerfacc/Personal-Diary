import EntryDetails from './EntryDetails'

export default function ViewEntryModal({ selectedEntry, onClose }) {
  if (!selectedEntry) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm">
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-neutral-900/95 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl">
        <EntryDetails entry={selectedEntry} onClose={onClose} />
      </div>
    </div>
  )
}