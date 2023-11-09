import TextField from '@mui/material/TextField';
import { Controller } from 'react-hook-form';
import Typography from '@mui/material/Typography';

import useStyles from './genericTextFieldStyles';

interface props {
  fieldName: string;
  fieldTitle: string;
  errorMessage: string | undefined;
}

const GenericTextField: React.FC<props> = ({
  fieldName,
  fieldTitle,
  errorMessage,
}) => {
  const classes = useStyles();
  return (
    <div className={classes.dialogField}>
      <Typography className={classes.titles}>{fieldTitle}</Typography>
      <Controller
        name={fieldName}
        render={({ field }) => (
          <TextField {...field} className={classes.TextField}></TextField>
        )}
      />
      <Typography className={classes.errorMessage}>{errorMessage}</Typography>
    </div>
  );
};

export default GenericTextField;
