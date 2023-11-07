import TextField from '@mui/material/TextField';
import { Controller } from 'react-hook-form';
import Typography from '@mui/material/Typography';
import Autocomplete from '@mui/material/Autocomplete';

import useStyles from './genericAutoCompleteStyles';

interface props {
  fieldName: string;
  isMultiple: boolean;
  options: string[];
  fieldTitle: string;
  errorMessage: string | undefined;
}

const GenericAutoComplete: React.FC<props> = ({
  fieldName,
  isMultiple,
  options,
  errorMessage,
  fieldTitle,
}) => {
  const classes = useStyles();
  return (
    <div className={classes.dialogField}>
      <Typography className={classes.titles}>{fieldTitle}</Typography>
      <Controller
        name={fieldName}
        render={({ field: { onChange, ...field } }) => (
          <Autocomplete
            {...field}
            multiple={isMultiple}
            onChange={(_, value) => onChange(value)}
            className={classes.autoComplete}
            disablePortal
            options={options}
            renderInput={(params) => <TextField {...params} />}
          />
        )}
      />
      <Typography className={classes.errorMessage}>{errorMessage}</Typography>
    </div>
  );
};

export default GenericAutoComplete;
