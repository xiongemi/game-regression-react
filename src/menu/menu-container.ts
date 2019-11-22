import { withRouter } from 'react-router';
import { withTranslation } from 'react-i18next';

import { Menu } from './Menu';

export const MenuContainer = withTranslation()(withRouter(Menu));
