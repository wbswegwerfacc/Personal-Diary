export default function EntryDetails({ entry, onClose }) {
  const formattedDate = new Date(entry.date + 'T00:00:00').toLocaleDateString('de-DE', {
    weekday: 'long',
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  })

  const handleShare = async () => {
    const shareText = `Tagebucheintrag: ${entry.title}\nDatum: ${entry.date}\n\n${entry.content}`

    if (navigator.share) {
      try {
        await navigator.share({
          title: entry.title,
          text: shareText,
          url: window.location.href,
        })
        return
      } catch (error) {
        if (error.name !== 'AbortError') {
          openTwitterFallback(shareText)
        }
      }
    } else {
      openTwitterFallback(shareText)
    }
  }

  const openTwitterFallback = (text) => {
    const snippet = text.length > 200 ? text.substring(0, 197) + '...' : text
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(snippet)}`
    window.open(twitterUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="flex flex-col">
      <div className="relative w-full h-64 sm:h-80 bg-neutral-800 overflow-hidden">
        <img
          src={entry.imageUrl}
          alt={entry.title}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.src = 'https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=800&q=80'
          }}
        />
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-black/60 hover:bg-black/80 backdrop-blur-md text-white w-9 h-9 rounded-full flex items-center justify-center transition cursor-pointer"
        >
          ✕
        </button>
      </div>

      <div className="p-6">
        <span className="text-xs font-semibold uppercase tracking-wider text-teal-400">
          {formattedDate}
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1 mb-4">
          {entry.title}
        </h2>
        <div className="text-neutral-300 leading-relaxed whitespace-pre-line text-sm sm:text-base border-t border-white/5 pt-4">
          {entry.content}
        </div>

        <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-4">
          <button
            onClick={handleShare}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-teal-400 font-medium text-sm transition cursor-pointer"
          >
            <span>🔗</span>
            <span>Eintrag teilen</span>
          </button>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white font-medium text-sm transition cursor-pointer"
          >
            Schließen
          </button>
        </div>
      </div>
    </div>
  )
}