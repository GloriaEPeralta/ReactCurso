import { AuthProvider } from "./auth"  // Importamos el componente AuthProvider
import { AppRouter } from "./router/AppRouter"


export const HeroesApp = () => {
  return (
    <AuthProvider > 
      <AppRouter /> 
    </AuthProvider>
  )
}
