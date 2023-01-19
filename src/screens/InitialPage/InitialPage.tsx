import { Text, View } from 'react-native';

import { StatusBar } from 'expo-status-bar';
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold
} from '@expo-google-fonts/inter';

import {
  Background
} from './InitialPage.styles'

import Loading from '../../components/Loading/Loading';

export default function InitalPage() {

  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold
  })


  if(!fontsLoaded){
    return (
      <Loading message='Carregando as fontes, aguarde...'/>
    )
  }

  return (
    <Background>
      <StatusBar style="light" translucent animated />

      <Text style={{fontFamily: "Inter_400Regular", fontSize: 16}}>Teste de fonte Inter Regular</Text>
      <Text style={{fontFamily: "Inter_500Medium", fontSize: 16}}>Teste de fonte Inter Medium</Text>
      <Text style={{fontFamily: "Inter_600SemiBold", fontSize: 16}}>Teste de fonte Inter Semibold</Text>
      <Text style={{fontFamily: "Inter_700Bold", fontSize: 16}}>Teste de fonte Inter Bold</Text>

    </Background>
  );
}
