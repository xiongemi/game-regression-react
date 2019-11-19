import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

/* eslint-disable react/display-name */
export function createRouterLinkForward(url: string) {
  return React.forwardRef((props: any, ref: any) => (
    <RouterLink innerRef={ref} to={url} {...props} />
  ));
}
