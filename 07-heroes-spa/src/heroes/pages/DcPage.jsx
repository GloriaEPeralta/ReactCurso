import { HeroList } from '../components/HeroList'; // Importamos el componente HeroList


export const DcPage = () => {

  return (
    <>
      <h1>Dc Comics</h1>
      <hr />
      <HeroList publisher='DC Comics' />  {/* Llamamos al componente HeroList y le pasamos el publisher */} 

    </>
  )
}
