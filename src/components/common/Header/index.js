/* eslint no-tabs: "off" */
import styled from 'styled-components';
import {Colors, Spaces, FontSizes} from '../../../shared/DesignTokens';
import {LogoIcon} from '../Icons/index';
import {HeadingTwo} from '../HeadingTwo';
import {Flex, Box} from 'reflexbox';

const Wrapper = styled.header`
	width: 100%;
	height: 60px;
	background-color: ${Colors.PURPLE};
	padding: ${Spaces.TWO};
	display: flex;
	justify-content: center;
	align-items: center;
	@media (min-width: 1024px) {
		height: 90px;
	}
`;

export const Header = () =>(
  <Wrapper>
    <Flex width={['100%', '600px']} alignItems="center" justifyContent="center">
      <Box>
        <LogoIcon fontSize={FontSizes.FOUR} color={Colors.GRAY_200}/>
      </Box>
      <Box ml={Spaces.ONE}>
        <HeadingTwo color={Colors.GRAY_200}>Apresentação Pessoal</HeadingTwo>
      </Box>
    </Flex>
  </Wrapper>);
