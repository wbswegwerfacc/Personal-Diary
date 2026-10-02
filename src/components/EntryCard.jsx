export default function EntryCard({ entry, onSelect }) {
  const formattedDate = new Date(entry.date + 'T00:00:00').toLocaleDateString('de-DE', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  })

  return (
    <div
      onClick={() => onSelect(entry)}
      className="group relative bg-neutral-900/60 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden hover:border-teal-500/40 hover:shadow-xl hover:shadow-teal-500/10 transition-all duration-300 cursor-pointer flex flex-col"
    >
      <div className="w-full h-48 sm:h-52 overflow-hidden bg-neutral-800">
        <img
          src={entry.imageUrl}
          alt={entry.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            e.currentTarget.src = 'https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=800&q=80'
          }}
        />
      </div>

      <div className="p-5 flex flex-col flex-1">
        <span className="text-xs font-medium text-teal-400 tracking-wider uppercase">
          {formattedDate}
        </span>
        <h2 className="text-xl font-bold text-white mt-1.5 line-clamp-1 group-hover:text-teal-300 transition-colors">
          {entry.title}
        </h2>
        <p className="text-neutral-400 text-sm mt-2 line-clamp-2">
          {entry.content}
        </p>
      </div>
    </div>
  )
}