import { Button, Card, CardContent, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField, Typography } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import PublishIcon from '@material-ui/icons/Publish';

const useStyles = makeStyles((theme) => ({
  button: {
    marginTop: 30,
    marginBottom: 30,
    color: "white",
    display: 'flex',
    flexDirection: 'column',
    margin: 'auto',
    width: 'fit-content',
  },
  card: {
    marginTop: 150,
    backgroundColor: "rgba(19, 13, 28, 0.9)",
    borderColor: "#FFF",
    display: 'flex',
    flexDirection: 'column',
    margin: 'auto',
    width: 700,
    height: 400,
  },
  typography: {
    marginTop: 30,
    marginBottom: 30,
  },
  icon: {

  },
  formfield: {

    marginTop: 20,
  },
}));

export default function Contact() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Container>
        <Card
          className={classes.card}
          variant="outlined"
        >
          <CardContent
            style={{ verticalAlign: 'center' }}
          >
            <Typography
              className={classes.typography}
              variant="h3"
              align="center"
              color="secondary"
            >
              Fale Conosco
              </Typography>

            <Button
              className={classes.button}
              style={{ backgroundColor: '#2BB140' }}
              startIcon={<WhatsAppIcon
                className={classes.icon}
              />}
            >
              WhatsApp
              </Button>

            <Typography
              className={classes.typography}
              variant="h4"
              align="center"
              color="secondary"
            >
              Ou nos envie sua idéia!
              </Typography>

            <Button
              className={classes.button}
              style={{ backgroundColor: '#023AA2' }}
              onClick={handleClickOpen}
              startIcon={<EmailOutlinedIcon
                className={classes.icon}
              />}
            >
              Mande sua mensagem!
              </Button>
          </CardContent>
        </Card>
      </Container>

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
    </div>
  )
}