import { withStyles, WithStyles } from '@material-ui/core';
import typographyStyle from 'assets/jss/material-dashboard-react/typographyStyle';
import * as React from 'react';

interface Props extends WithStyles<typeof typographyStyle> {
  text?: React.ReactNode;
  author?: React.ReactNode;
}

const Quote: React.SFC<Props> = props => {
  const { classes, text, author } = props;

  return (
    <blockquote className={classes.defaultFontStyle + ' ' + classes.quote}>
      <p className={classes.quoteText}>{text}</p>
      <small className={classes.quoteAuthor}>{author}</small>
    </blockquote>
  );
};

export default withStyles(typographyStyle)(Quote);
