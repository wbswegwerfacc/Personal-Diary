import EntryCard from './EntryCard'

export default function EntryList({ entries, onSelectEntry }) {
  const sortedEntries = [...entries].sort((a, b) => new Date(b.date) - new Date(a.date))

  if (sortedEntries.length === 0) {
    return (
      <div className="text-center py-20 bg-neutral-900/40 backdrop-blur-md rounded-3xl border border-white/5 p-8">
        <div className="text-5xl mb-4">📖</div>
        <h3 className="text-xl font-semibold text-neutral-200">Noch keine Einträge vorhanden</h3>
        <p className="text-neutral-400 text-sm mt-2 max-w-sm mx-auto">
          Klicke oben auf „Add Entry“, um deinen ersten Gedanken für heute festzuhalten.
        </p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {sortedEntries.map((entry) => (
        <EntryCard
          key={entry.id}
          entry={entry}
          onSelect={onSelectEntry}
        />
      ))}
    </div>
  )
}