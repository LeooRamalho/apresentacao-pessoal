/* eslint no-tabs: "off" */
import styled from 'styled-components';
import {Colors, Spaces} from '../../../shared/DesignTokens';
import {LogoIcon} from '../Icons/index';
const Wrapper = styled.header`
	width: 100%;
	height: 60px;
	background-color: ${Colors.RED_800};
	padding: ${Spaces.TWO};
	display: flex;
	justify-content: center;
	align-items: center;
	@media (min-width: 1024px) {
		height: 90px;
	}
`;

export const Header = () => <Wrapper><LogoIcon /></Wrapper>;
