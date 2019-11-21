import * as H from 'history';
import { match } from 'react-router';

export interface MenuProps {
  history: H.History;
  location: H.Location;
  match: match;
}
