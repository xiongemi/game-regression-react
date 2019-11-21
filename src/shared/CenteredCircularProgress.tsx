import { CircularProgress } from '@material-ui/core';
import React from 'react';

/* eslint-disable react/display-name */
export const CenteredCircularProgress = React.forwardRef((props: any, ref: any) => (
  <div className="tc w-100 mv5">
    <CircularProgress innerRef={ref} {...props} />
  </div>
));
