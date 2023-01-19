import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold
} from '@expo-google-fonts/inter'

export default function App() {

  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold
  })


  if(!fontsLoaded){
    return
  }

  return (
    <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
      <Text style={{fontFamily: "Inter_400Regular", fontSize: 16}}>Teste de fonte Inter Regular</Text>
      <Text style={{fontFamily: "Inter_500Medium", fontSize: 16}}>Teste de fonte Inter Medium</Text>
      <Text style={{fontFamily: "Inter_600SemiBold", fontSize: 16}}>Teste de fonte Inter Semibold</Text>
      <Text style={{fontFamily: "Inter_700Bold", fontSize: 16}}>Teste de fonte Inter Bold</Text>

      <StatusBar style="auto" />
    </View>
  );
}
