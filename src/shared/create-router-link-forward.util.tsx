import React from 'react';
import { Link } from 'react-router-dom';

/* eslint-disable react/display-name */
/**
 * Copied from https://material-ui.com/guides/composition/#link
 * Create a Link component for routing
 * @param {string} url
 */
export function createRouterLinkForward(url: string) {
  return React.forwardRef((props: any, ref: any) => <Link innerRef={ref} to={url} {...props} />);
}
