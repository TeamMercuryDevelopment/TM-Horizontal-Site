import React from 'react';
import { ButtonGroup, IconButton, makeStyles, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField, Typography } from '@material-ui/core'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import PublishIcon from '@material-ui/icons/Publish';


const useStyles = makeStyles((theme) => ({
  icon: {
    fontSize: 32,
    padding: theme.spacing(1),
    transition: ".3s ease",
    "&:hover": {
      color: theme.palette.secondary.light
    }
  },
  groupbutton: {
  }

}))


export default function MyGroupButton() {
  const classes = useStyles()

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <ButtonGroup
        orientation="vertical"
        color="secondary"
        className={classes.groupbutton}
        variant="outlined"
        disableFocusRipple
      >
        <IconButton>
          <LinkedInIcon
            className={classes.icon}
          />
        </IconButton>

        <IconButton>
          <TwitterIcon
            className={classes.icon}
          />
        </IconButton>

        <IconButton>
          <WhatsAppIcon
            className={classes.icon}
          />
        </IconButton>

        <IconButton>
          <GitHubIcon
            className={classes.icon}
          />
        </IconButton>

        <IconButton>
          <EmailIcon
            className={classes.icon}
            onClick={handleClickOpen}
          />
        </IconButton>


      </ButtonGroup>

      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Nos conte o que você gostaria de fazer!</DialogTitle>
        <form>
          <DialogContent>
            <TextField
              className={classes.formfield}
              variant="outlined"
              id="name"
              label="Nome"
              type="name"
              fullWidth
            />
            <TextField
              className={classes.formfield}
              variant="outlined"
              id="email"
              label="Email"
              type="email"
              fullWidth
            />
            <TextField
              className={classes.formfield}
              variant="outlined"
              id="topic"
              label="Assunto"
              type="topic"
              fullWidth
            />
            <TextField
              className={classes.formfield}
              variant="outlined"
              id="message"
              label="Mensagem"
              placeholder="Escreva sua mensagem..."
              type="message"
              fullWidth
              multiline
              rows={4}
            />
            <Button
              className={classes.formfield}
              color="primary"
              startIcon={<PublishIcon />}
            >
              Enviar arquivo
            </Button>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={handleClose}
              color="primary"
              size="large"
            >
              Enviar
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div >
  );
}
