import {
  ContainerLoading,
  StyledLoading,
  TextLoading,
} from './Loading.styles'

interface LoadingProps {
  message: string
}

export default function Loading(props: LoadingProps) {

  return (
    <ContainerLoading>
      <StyledLoading color="#7C3AEd" size="large"/>
      <TextLoading>{props.message}</TextLoading>
    </ContainerLoading>
  );
}