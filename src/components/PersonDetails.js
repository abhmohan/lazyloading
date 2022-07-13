import { Button, DialogActions, DialogContent, DialogTitle, Typography } from '@mui/material';
import Dialog from '@mui/material/Dialog';

const PersonDetails = ({ person, onClose }) => {
  return (
    <Dialog open={Boolean(person)}>
      <DialogTitle>Person details</DialogTitle>
      <DialogContent>
        <Typography component='p'>First name: {person.name}</Typography>
        <Typography component='p'>Last name: {person.lastname}</Typography>
        <Typography component='p'>DOB: {person.dob}</Typography>
        <Typography component='p'>Place: {person.place}</Typography>
        <Typography component='p'>Country: {person.country}</Typography>
        <Typography component='p'>Contact: {person.contact}</Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  )
};

export default PersonDetails;