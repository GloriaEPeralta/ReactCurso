import { AppRouter } from './router/AppRouter'  // Importamos el componente AppRouter
import { AppTheme } from './theme'


export const JournalApp = () => {
  return (
    <AppTheme >
        <AppRouter />

    </AppTheme>
  )
}
