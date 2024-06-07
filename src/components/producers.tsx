export default function Producers({
  producers,
}: {
  producers: { [key: string]: number }
}) {
  return (
    <>
      <h2 className="text-starwarsyellow text-2xl">Producers:</h2>
      <ul>
        {Object.keys(producers).map((producer) => (
          <li key={producer}>
            {producer} ({producers[producer]})
          </li>
        ))}
      </ul>
    </>
  )
}
