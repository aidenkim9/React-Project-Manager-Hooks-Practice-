export default function Button({ children, handleClick }) {
  return (
    <button
      onClick={handleClick}
      className="bg-stone-700 text-stone-400 px-4 py-2 rounded-md text-nowrap text-xs md:text-base hover:bg-stone-600 hover:text-stone-100"
    >
      {children}
    </button>
  );
}
