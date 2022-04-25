import {useState} from 'react';
import {usePerson} from '../components/hooks/usePerson';
import {useNavigate, useParams} from 'react-router-dom';

import axios from 'axios';
import styled from 'styled-components';
import {Flex, Box} from 'reflexbox';
import {
  BorderRadiuses,
  Colors,
  Shadows,
  Spaces,
} from '../shared/DesignTokens';
import {Header} from '../components/common/Header';
import {Button} from '../components/common/Button';
import {HeadingTwo} from '../components/common/HeadingTwo';
import {Description} from '../components/common/Description';
import {Caption} from '../components/common/Caption';

const Container = styled.aside`
	width: 727px;
	margin: 0 auto;
`;
const Avatar = styled.div`
	width: 344px;
	height: 194px;
	box-shadow: ${Shadows.ONE};
	border-radius: ${BorderRadiuses.ONE};
	background-image: url('${(props) => props.src}');
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center 25%;
`;

export const DetalhePerfil = () => {
  const [address, setAddress] = useState();

  const navigate = useNavigate();
  const handleBack = () => navigate(-1);

  const {id} = useParams();
  const person = usePerson(id);

  const handleAddressClick = async (cep) => {
    const res = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
    setAddress(res.data);
  };

  return (
    <>
      <Header />
      <Container>
        <Flex mt={Spaces.FOUR} as="section">
          <Avatar src={person.picture} />
          <Box ml={Spaces.FOUR} my={Spaces.ONE_HALF} as="section">
            <HeadingTwo as="h1">{person.name}</HeadingTwo>
            <Description color={Colors.GRAY_700}>
              {person.vocation}
            </Description>

            <Box mt={Spaces.TWO}>
              <Flex mb={Spaces.ONE}>
                <Caption>CEP:</Caption>
                <Box ml={Spaces.TWO}><Caption>{person.cep}</Caption></Box>
              </Flex>
            </Box>

            {!address ?
            <Button onClick={() => handleAddressClick(person.cep)}>
              Obter Endereço Completo
            </Button> :
            <>
              <Flex my={Spaces.ONE}>
                <Description>Logradouro:</Description>
                <Box ml={Spaces.TWO}><Caption>{address.logradouro}</Caption></Box>
              </Flex>
              <Flex my={Spaces.ONE}>
                <Description>Bairro:</Description>
                <Box ml={Spaces.TWO}><Caption>{address.bairro}</Caption></Box>
              </Flex>
              <Flex my={Spaces.ONE}>
                <Description>Cidade:</Description>
                <Box ml={Spaces.TWO}><Caption>{address.localidade}</Caption></Box>
              </Flex>
              <Flex my={Spaces.ONE}>
                <Description>Estado:</Description>
                <Box ml={Spaces.TWO}><Caption>{address.uf}</Caption></Box>
              </Flex>
            </>
            }
          </Box>
        </Flex>


        <Flex width="100%" justifyContent="center" mt={Spaces.FIVE}>
          <Box>
            <Button ghost onClick={handleBack}>
            Voltar
            </Button>
          </Box>
        </Flex>
      </Container>
    </>
  );
};
