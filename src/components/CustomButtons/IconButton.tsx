import { IconButton, withStyles, WithStyles } from '@material-ui/core';
import { IconButtonProps } from '@material-ui/core/IconButton';
import { ColorType } from 'assets/jss/ColorType';
import iconButtonStyle from 'assets/jss/material-dashboard-react/iconButtonStyle';
import * as React from 'react';

interface Props extends WithStyles<typeof iconButtonStyle> {
  color?: ColorType | 'rose' | 'white' | 'simple';
  customClass?: string;
  disabled?: boolean;
}

const IconCustomButton: React.SFC<
  Props & Pick<IconButtonProps, Exclude<keyof IconButtonProps, keyof Props>>
> = props => {
  const { classes, color, children, customClass, ...rest } = props;

  return (
    <IconButton
      {...rest}
      className={
        classes.button +
        (color ? ' ' + classes[color] : '') +
        (customClass ? ' ' + customClass : '')
      }
    >
      {children}
    </IconButton>
  );
};

export default withStyles(iconButtonStyle)(IconCustomButton);
