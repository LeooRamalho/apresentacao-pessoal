import styled from 'styled-components';
import {string} from 'prop-types';
import {Box} from 'reflexbox';
import {Card} from '../../components/common/Card';
import {Caption} from '../../components/common/Caption';
import {HeadingTwo} from '../../components/common/HeadingTwo';
import {ButtonLink} from '../../components/common/ButtonLink';
import {
  BorderRadiuses,
  Colors,
  Shadows,
  Spaces,
} from '../../shared/DesignTokens';
const InformationGrid = styled(Box)`
	display: grid;
	grid-template-columns: 70px 1fr;
	gap: ${Spaces.TWO};
`;
const Avatar = styled.div`
	width: 100%;
	height: 70px;
	box-shadow: ${Shadows.ONE};
	border-radius: ${BorderRadiuses.ONE};
	background-image: url('${(props) => props.src}');
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
`;
export const PersonCard = ({name, id, picture, vocation}) =>
  <Card>
    <InformationGrid p={Spaces.TWO} mb={Spaces.ONE_HALF}>
      <Avatar src={picture} />
      <Box>
        <Box mb={Spaces.ONE}>
          <HeadingTwo>{name}</HeadingTwo>
        </Box>
        <Caption as="div" color={Colors.GRAY_600}>
          {vocation}
        </Caption>
      </Box>

    </InformationGrid>
    <Box width="87px">
      <ButtonLink to={`/detalhes/${id}`}>Ver Mais</ButtonLink>
    </Box>
  </Card>;

PersonCard.propTypes = {
  name: string,
  picture: string,
  id: string,
  vocation: string,
};
