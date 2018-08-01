import { Button, withStyles, WithStyles } from '@material-ui/core';
import { ButtonProps } from '@material-ui/core/Button';
import { ColorType } from 'assets/jss/ColorType';
import buttonStyle from 'assets/jss/material-dashboard-react/buttonStyle';
import * as cx from 'classnames';
import * as React from 'react';

interface Props extends WithStyles<typeof buttonStyle> {
  color?: ColorType | 'rose' | 'white' | 'simple' | 'transparent';
  round?: boolean;
  fullWidth?: boolean;
  disabled?: boolean;
}

const RegularButton: React.SFC<
  Props & Pick<ButtonProps, Exclude<keyof ButtonProps, keyof Props>>
> = props => {
  const {
    classes,
    color,
    round,
    children,
    fullWidth,
    disabled,
    ...rest
  } = props;

  const btnClasses = cx(color && classes[color], {
    [classes.round]: round,
    [classes.fullWidth]: fullWidth,
    [classes.disabled]: disabled,
  });

  return (
    <Button {...rest} className={classes.button + ' ' + btnClasses}>
      {children}
    </Button>
  );
};

export default withStyles(buttonStyle)(RegularButton);
