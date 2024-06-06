export default function Film({ film }: { film: any }) {
  const planetWithoutWater = film.planetConnection.planets.filter(
    (planet: any) => {
      return planet.surfaceWater <= 0
    }
  ).length

  return (
    <div
      key={film.id}
      className="border border-starwarsyellow p-10 w-full text-center"
    >
      <h2 className="font-starjedi text-starwarsyellow text-2xl mb-5">
        {film.title}
      </h2>
      <p>Release Date: {film.releaseDate}</p>
      {planetWithoutWater} planet{planetWithoutWater > 1 && 's'} without water
    </div>
  )
}
