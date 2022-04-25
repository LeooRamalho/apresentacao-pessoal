/* eslint no-tabs: "off" */
import styled from 'styled-components';
import {
  BorderRadiuses,
  Colors,
  FontFamilies,
  FontLetterSpacings,
  FontSizes,
  Spaces,
} from '../../../shared/DesignTokens';

import {LupaIcon} from '../Icons/';

const Wrapper = styled.div`
	display: grid;
	align-items: center;
	grid-template-columns: 16px 1fr;
	gap: ${Spaces.TWO};
	padding: ${Spaces.NONE} ${Spaces.TWO};
	background-color: ${Colors.GRAY_200};
	border-radius: ${BorderRadiuses.ONE};
	height: 40px;
`;
const Input = styled.input`
	font-size: ${FontSizes.TWO};
	font-family: ${FontFamilies.PRIMARY};
	border: none;
	outline: none;
	padding: ${Spaces.ONE};
	color: ${Colors.GRAY_600};
	background: none;
	letter-spacing: ${FontLetterSpacings.MEDIUM};
	&amp;::placeholder {
		color: ${Colors.GRAY_400};
		opacity: 1;
	}
	&amp;:-ms-input-placeholder {
		color: ${Colors.GRAY_400};
	}
	&amp;::-ms-input-placeholder {
		color: ${Colors.GRAY_400};
	}
`;
export const SearchField = (props) =>
  <Wrapper>
    <LupaIcon fontSize={FontSizes.TWO}/>
    <Input {...props} type="text" />
  </Wrapper>;
