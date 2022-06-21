import { Div, MainDiv } from "../styles/indexElements";
import Sidebar from "../components/SideBar";
import { useState } from "react";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContentText from "@material-ui/core/DialogContentText";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";
import { Grid } from "@material-ui/core";

const groups = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Div>
      <Sidebar />
      <MainDiv>
        <Grid>
          <Button
            variant="outlined"
            color="primary"
            sx={{ height: 10 }}
            onClick={handleClickOpen}
          >
            Open My Custom Dialog
          </Button>
          <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Group Name</DialogTitle>
            <DialogContent>
              <DialogContentText>Do you do coding ?</DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Close
              </Button>
              <Button onClick={handleClose} color="primary" autoFocus>
                Yes
              </Button>
            </DialogActions>
          </Dialog>
        </Grid>
      </MainDiv>
    </Div>
  );
};

export default groups;
