import { View } from 'react-native'

import { StatusBar } from 'expo-status-bar';

import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold
} from '@expo-google-fonts/inter';

import InitalPage from "./src/screens/InitialPage/InitialPage";
import Loading from './src/components/Loading/Loading';

export default function App() {

  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold
  })

  if(fontsLoaded){
    return (
      <View style={{backgroundColor: "#09090A", flex: 1}}>
        <Loading message='Carregando as fontes, aguarde...'/>
      </View>
    )
  }

  return (
    <>
      <InitalPage/>
      <StatusBar style="light" translucent animated />
    </>
  );
}
