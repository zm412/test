import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);





export default function ButtonSave({needsUpdate}) {
  const [open, setOpen] = React.useState(false);
  const [openSecond, setOpenSecond] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    needsUpdate();
    setOpen(false);
    setOpenSecond(true)
  };
  const handleCloseSecond = () => {
    setOpenSecond(false)
  }

  return (
    <div>
    <>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
       Сохранить 
      </Button>
    </>
    <>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Modal title
        </DialogTitle>
          <Typography gutterBottom>
        Сохранить изменения?
        </Typography>
    
        <DialogActions>
          <Button autoFocus variant="contained" color="primary" onClick={handleClose} color="primary">
            Save changes
          </Button>
          <Button autoFocus variant="contained" color="primary" onClick={()=>{alert('Hello')}} color="primary">
    Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </>
  <>
      <Dialog onClose={handleCloseSecond} aria-labelledby="customized-dialog-title" open={openSecond}>
        <DialogTitle id="customized-dialog-title" onClose={handleCloseSecond}>
          Modal title
        </DialogTitle>
          <Typography gutterBottom>
    Изменения сохранены
        </Typography>
    
        <DialogActions>
          <Button autoFocus variant="contained" color="primary" onClick={handleCloseSecond} color="primary">
   Хорошо 
          </Button>
        </DialogActions>
      </Dialog>
    </>


    </div>
  )
}
