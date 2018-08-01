import {
  AppBar,
  Button,
  Hidden,
  IconButton,
  Toolbar,
  withStyles,
  WithStyles,
} from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import { ColorType } from 'assets/jss/ColorType';
import headerStyle from 'assets/jss/material-dashboard-react/headerStyle';
import * as cx from 'classnames';
import * as React from 'react';
import { RouteProps } from 'react-router-dom';
import { Route } from 'routes/dashboard';
import HeaderLinks from './HeaderLinks';

interface Props extends WithStyles<typeof headerStyle> {
  color?: ColorType;

  handleDrawerToggle?: () => void;
  routes: Route[];
}

class Header extends React.Component<Props & RouteProps> {
  constructor(props: Props) {
    super(props);

    this.makeBrand = this.makeBrand.bind(this);
  }

  public render() {
    const { classes, color, handleDrawerToggle } = this.props;

    const appBarClasses = cx(classes.appBar, color && classes[color]);

    return (
      <AppBar className={appBarClasses}>
        <Toolbar className={classes.container}>
          <div className={classes.flex}>
            {/* Here we create navbar brand, based on route name */}
            <Button href="#" className={classes.title}>
              {this.makeBrand()}
            </Button>
          </div>
          <Hidden smDown implementation="css">
            <HeaderLinks />
          </Hidden>
          <Hidden mdUp>
            <IconButton
              className={classes.appResponsive}
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerToggle}
            >
              <Menu />
            </IconButton>
          </Hidden>
        </Toolbar>
      </AppBar>
    );
  }

  private makeBrand() {
    const { routes, location } = this.props;

    var name;

    routes.map((prop, key) => {
      if (location && prop.path === location.pathname) {
        name = prop.navbarName;
      }

      return null;
    });

    return name;
  }
}

export default withStyles(headerStyle)(Header);
