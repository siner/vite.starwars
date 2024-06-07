import { useState } from 'react'
import Button from './ui/button'
import Film from './film'

export default function Films({ films }: { films: any }) {
  const [currentFilm, setCurrentFilm] = useState(0)

  return (
    <>
      <h2 className="text-starwarsyellow text-2xl">Films:</h2>

      <Film film={films[currentFilm]} />

      <div className="flex space-x-10 justify-between flex-wrap">
        <Button
          disabled={currentFilm === 0}
          onClick={() => setCurrentFilm((currentFilm - 1) % films.length)}
        >
          Previous
        </Button>

        <Button
          disabled={currentFilm === films.length - 1}
          onClick={() => setCurrentFilm((currentFilm + 1) % films.length)}
        >
          Next
        </Button>
      </div>
    </>
  )
}
