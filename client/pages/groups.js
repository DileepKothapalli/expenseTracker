import { Div } from "../styles/indexElements";
import Sidebar from "../components/SideBar";
import { useState } from "react";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";
import { TextField } from "@material-ui/core";
import { useSession } from "next-auth/react";
import axios from "axios";
import { useEffect } from "react";
import {
  ButtonDiv,
  DataDiv,
  DateDiv,
  EndDiv,
  GroupDiv,
  GroupName,
  GroupsDiv,
  HeadDiv,
  ImageDiv,
  MainDiv,
  MoneyDiv,
  RIghtDiv,
  TransactionData,
  TransactionDiv,
  TransactionImage,
  TransactionMoney,
} from "../styles/groupElements";

const groups = () => {
  const [open, setOpen] = useState(false);
  const [inviteOpen, setInviteOpen] = useState(false);
  const [mainGroupName, setMainGroupName] = useState();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClickOpenInvite = () => {
    setInviteOpen(true);
  };

  const groupnameHandler = (groupname) => {
    setMainGroupName(groupname);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleInviteClose = () => {
    setInviteOpen(false);
  };

  const { data: session } = useSession();

  const [groupname, setGroupname] = useState();
  const [groupdata, setGroupdata] = useState();
  const [inviteemail, setInviteEmail] = useState();
  const [membersbool, setMembersBool] = useState(true);
  const [membersdata, setMembersData] = useState();

  const membersToggle = async () => {
    const group_member_data = await axios
      .get(`http://localhost:8080/groupmembers/${mainGroupName}`)

      .catch((error) => {
        console.error("Error:", error);
      });

    let sentences = group_member_data.data[0]?.group_member_email?.split(/[,]/);

    setMembersData(sentences);

    setMembersBool(!membersbool);
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    const expense = await axios
      .post("http://localhost:8080/addgroup", {
        group_name: groupname,
        creator_name: session.user.email,
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    setOpen(false);
  };

  const handleInvite = async (e) => {
    e.preventDefault();

    setInviteOpen(false);
  };

  useEffect(() => {
    const groupDatahandler = async () => {
      const data = await axios
        .get(`http://localhost:8080/groupsdata`)

        .catch((error) => {
          console.error("Error:", error);
        });
      setGroupdata(data?.data);
    };

    if (session) {
      groupDatahandler();
    }
  }, [session, open]);

  return (
    <Div>
      <Sidebar />
      <MainDiv>
        <HeadDiv>
          <GroupName>{mainGroupName}</GroupName>
          <Button
            variant="outlined"
            color="primary"
            sx={{ height: 10 }}
            onClick={handleClickOpen}
          >
            Add expense
          </Button>

          <Button
            variant="outlined"
            color="primary"
            sx={{ height: 10 }}
            onClick={handleClickOpenInvite}
          >
            Invite
          </Button>

          <Button
            variant="outlined"
            color="primary"
            sx={{ height: 10 }}
            onClick={membersToggle}
          >
            Members
          </Button>
        </HeadDiv>

        {membersbool && (
          <TransactionDiv>
            <DateDiv></DateDiv>
            <TransactionImage></TransactionImage>
            <TransactionData></TransactionData>
            <TransactionMoney></TransactionMoney>
          </TransactionDiv>
        )}

        {!membersbool && (
          <div>
            {membersdata?.map(function (d, idx) {
              return (
                <GroupDiv key={idx}>
                  <DataDiv>
                    <GroupName>{d}</GroupName>
                  </DataDiv>
                  <MoneyDiv></MoneyDiv>
                </GroupDiv>
              );
            })}
          </div>
        )}
      </MainDiv>
      <EndDiv>
        <RIghtDiv>
          <ButtonDiv>
            <Button
              variant="outlined"
              color="primary"
              sx={{ height: 10 }}
              onClick={handleClickOpen}
            >
              Start a new Group
            </Button>
            <Dialog open={open} onClose={handleClose}>
              <DialogTitle>Group Name</DialogTitle>
              <DialogContent>
                <form onSubmit={handleCreate} id="myform">
                  <TextField
                    value={groupname}
                    required
                    onChange={(e) => setGroupname(e.target.value)}
                  />
                </form>
              </DialogContent>
              <DialogActions>
                <Button onClick={() => setOpen(false)}>Cancel</Button>
                <Button type="submit" form="myform">
                  Submit
                </Button>
              </DialogActions>
            </Dialog>

            <Dialog open={inviteOpen} onClose={handleInviteClose}>
              <DialogTitle>Add an email</DialogTitle>
              <DialogContent>
                <form onSubmit={handleInvite} id="myform">
                  <TextField
                    required
                    type="email"
                    onChange={(e) => setInviteEmail(e.target.value)}
                  />
                </form>
              </DialogContent>
              <DialogActions>
                <Button onClick={() => setInviteOpen(false)}>Cancel</Button>
                <Button type="submit" form="myform">
                  Submit
                </Button>
              </DialogActions>
            </Dialog>
          </ButtonDiv>
          <GroupsDiv>
            {groupdata?.map(function (d, idx) {
              return (
                <GroupDiv key={idx}>
                  <ImageDiv></ImageDiv>
                  <DataDiv>
                    <GroupName onClick={(e) => setMainGroupName(d.group_name)}>
                      {d.group_name}
                    </GroupName>
                  </DataDiv>
                  <MoneyDiv></MoneyDiv>
                </GroupDiv>
              );
            })}
          </GroupsDiv>
        </RIghtDiv>
      </EndDiv>
    </Div>
  );
};

export default groups;
