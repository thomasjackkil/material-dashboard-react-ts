import { createStyles, Grid, withStyles, WithStyles } from '@material-ui/core';
import { GridProps } from '@material-ui/core/Grid';
import * as React from 'react';

const style = createStyles({
  grid: {
    padding: '0 15px !important',
  },
});

interface Props extends WithStyles<typeof style> {}

const ItemGrid: React.SFC<
  Props & Pick<GridProps, Exclude<keyof GridProps, keyof Props>>
> = props => {
  const { classes, children, ...rest } = props;

  return (
    <Grid item {...rest} className={classes.grid}>
      {children}
    </Grid>
  );
};

export default withStyles(style)(ItemGrid);
