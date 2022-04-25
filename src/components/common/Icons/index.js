/* eslint max-len: off */
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faUsersRectangle,
  faPeopleGroup,
  faClockRotateLeft,
  faAddressCard,
  faGraduationCap,
  faVolleyball,
  faDumbbell,
  faMagnifyingGlass,
  faBusinessTime,
  faCertificate,
} from '@fortawesome/free-solid-svg-icons';

// Menu icons
export const LogoIcon = (props) => <FontAwesomeIcon {...props} icon={faPeopleGroup} />;
export const LogoIconTwo = (props) => <FontAwesomeIcon {...props} icon={faUsersRectangle} />;
export const PerfilIcon = (props) => <FontAwesomeIcon {...props} icon={faAddressCard} />;
export const ExperienciaIcon = (props) => <FontAwesomeIcon {...props} icon={faClockRotateLeft} />;
export const FormacaoIcon = (props) => <FontAwesomeIcon {...props} icon={faGraduationCap} />;
export const HobbyIcon = (props) => <FontAwesomeIcon {...props} icon={faDumbbell} />;

// Itens icons
export const ExperienciaItemIcon = (props) => <FontAwesomeIcon {...props} icon={faBusinessTime}/>;
export const FormacaoItemIcon = (props) => <FontAwesomeIcon {...props} icon={faCertificate}/>;
export const HobbyItemIcon = (props) => <FontAwesomeIcon {...props} icon={faVolleyball}/>;

// Other
export const LupaIcon = (props) => <FontAwesomeIcon {...props} icon={faMagnifyingGlass}/>;
