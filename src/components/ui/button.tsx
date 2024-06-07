export default function Button({
  children,
  onClick,
  disabled,
}: {
  children: any
  onClick: any
  disabled: any
}) {
  return (
    <button
      className="bg-starwarsyellow text-black px-4 py-2 rounded-md disabled:bg-gray-400 disabled:text-gray-800 disabled:cursor-not-allowed"
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
