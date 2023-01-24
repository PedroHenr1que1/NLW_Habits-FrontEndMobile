import styled from 'styled-components/native';
import { Fonts } from '../../themes/Fonts';

export const ContainerLoading = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const StyledLoading = styled.ActivityIndicator`
  margin: 10px;
`;

export const TextLoading = styled.Text`
  font-family: ${Fonts.regular};
  color: #7C3AEd;
`;