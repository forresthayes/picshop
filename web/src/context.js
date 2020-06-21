const Context = React.createContext()

function ContextProvider({ children }) {
  const [allPhotos, setAllPhotos] = React.useState([])

  const url =
    'https://raw.githubusercontent.com/forresthayes/pics/master/images.json'
  React.useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAllPhotos(data))
  }, [])

  function toggleFavorite(id) {
    const updatedArr = allPhotos.map((photo) => {
      if (photo.id === id) {
        return { ...photo, isFavorite: !photo.isFavorite }
      }
      return photo
    })

    setAllPhotos(updatedArr)
  }

  return (
    <Context.Provider value={{ allPhotos, toggleFavorite }}>
      {children}
    </Context.Provider>
  )
}

export { ContextProvider, Context }
