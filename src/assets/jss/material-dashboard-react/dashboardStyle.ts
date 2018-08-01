// ##############################
// // // Dashboard styles
// #############################

import { createStyles } from '@material-ui/core';
import { successColor } from 'assets/jss/material-dashboard-react';

const dashboardStyle = createStyles({
  successText: {
    color: successColor,
  },
  upArrowCardCategory: {
    width: 14,
    height: 14,
  },
});

export default dashboardStyle;
