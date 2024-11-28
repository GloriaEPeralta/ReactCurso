import { HeroList } from '../components/HeroList'; // Importamos el componente HeroList


export const MarvelPage = () => {
  return (
    <>
      <h1>Marvel Comics</h1>
      <hr />
      <HeroList publisher='Marvel Comics' />  {/* Llamamos al componente HeroList y le pasamos el publisher */} 

    </>
  )
}
