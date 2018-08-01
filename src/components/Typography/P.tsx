import { withStyles, WithStyles } from '@material-ui/core';
import typographyStyle from 'assets/jss/material-dashboard-react/typographyStyle';
import * as React from 'react';

interface Props extends WithStyles<typeof typographyStyle> {}

const P: React.SFC<Props> = props => {
  const { classes, children } = props;

  return (
    <p className={classes.defaultFontStyle + ' ' + classes.pStyle}>
      {children}
    </p>
  );
};

export default withStyles(typographyStyle)(P);
