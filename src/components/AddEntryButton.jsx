export default function AddEntryButton({ onOpenModal }) {
  return (
    <button
      onClick={onOpenModal}
      className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-teal-500 to-emerald-400 hover:from-teal-400 hover:to-emerald-300 text-neutral-950 font-semibold shadow-lg shadow-teal-500/20 active:scale-95 transition-all cursor-pointer"
    >
      <span className="text-xl leading-none">+</span>
      <span>Add Entry</span>
    </button>
  )
}