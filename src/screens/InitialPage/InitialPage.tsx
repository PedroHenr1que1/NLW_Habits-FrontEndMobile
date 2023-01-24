import { Text } from 'react-native';

import {
  Background
} from './InitialPage.styles'

export default function InitalPage() {

  return (
    <Background>

      <Text style={{fontFamily: "Inter_400Regular", fontSize: 16}}>Teste de fonte Inter Regular</Text>
      <Text style={{fontFamily: "Inter_600SemiBold", fontSize: 16}}>Teste de fonte Inter Semibold</Text>
      <Text style={{fontFamily: "Inter_700Bold", fontSize: 16}}>Teste de fonte Inter Bold</Text>

    </Background>
  );
}
