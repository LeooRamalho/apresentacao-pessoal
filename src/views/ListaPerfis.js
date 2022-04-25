import {usePeople} from '../components/hooks/usePeople';

import {Flex, Box} from 'reflexbox';
import styled from 'styled-components';

import {Button} from '../components/common/Button';
import {Header} from '../components/common/Header';
import {SearchField} from '../components/common/SearchField';
import {PersonCard} from '../components/PersonCard';
import {Spaces} from '../shared/DesignTokens';

const PeopleGrid = styled(Box)`
	display: grid;
	grid-template-columns: 1fr;
	gap: ${Spaces.ONE_HALF};
	@media (min-width: 1024px) {
		grid-template-columns: 1fr 1fr 1fr 1fr;
		gap: ${Spaces.TWO};
	}
`;

export const ListaPerfis = () => {
  const {people} = usePeople();

  return (
    <>
      <Header />
      <Flex mt={Spaces.FOUR} mb={Spaces.FOUR} justifyContent="center">
        <Box>
          <SearchField placeholder="Digite um nome" />
        </Box>

        <Box ml={Spaces.ONE}>
          <Button>Buscar</Button>
        </Box>
      </Flex>

      <PeopleGrid>
        {people.map((person) =>
          <PersonCard
            key={person.id}
            id={person.id.toString()}
            name={person.name}
            vocation={person.vocation}
            cep={person.cep}
            picture={person.picture}
          />,
        )}
      </PeopleGrid>
    </>);
};
