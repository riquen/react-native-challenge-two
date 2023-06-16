import { ThemeProvider } from 'styled-components/native'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import { useFonts, NunitoSans_400Regular, NunitoSans_700Bold } from '@expo-google-fonts/nunito-sans'
import { Loading } from '@components/Loading'

import theme from './src/theme'
import { Routes } from './src/routes'

export default function App() {
  const [fontsLoaded] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold })

  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>{fontsLoaded ? <Routes /> : <Loading />}</SafeAreaProvider>
    </ThemeProvider>
  )
}
