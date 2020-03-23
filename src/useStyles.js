import { makeStyles } from '@material-ui/core/styles';


const basePaperStyle = (theme) => ({
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  width: '100%',
})

const useStylesModule = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    ...basePaperStyle(theme),
    height: 350
  },
  datePicker: {
    ...basePaperStyle(theme),
    height: 100
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default useStylesModule;