import Typography from '@mui/material/Typography';

import useStyles from './genericTitleStyles';

interface props {
  text: string;
}

const GenericTitle: React.FC<props> = ({ text }) => {
  const classes = useStyles();

  return <Typography className={classes.title}>{text}</Typography>;
};

export default GenericTitle;
