import React, { useState } from 'react'

import Tooltip from '@material-ui/core/Tooltip'
import IconButton from '@material-ui/core/IconButton'
import AddIcon from '@material-ui/icons/Add'

import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogActions from '@material-ui/core/DialogActions'

import Button from '@material-ui/core/Button'
import Switch from '@material-ui/core/Switch'
import TextFeld from '@material-ui/core/TextField'

const initialUser = {
  firstName: '',
}

const AddUserDialog = (props) => {
  const [user, setUser] = useState(initialUser)
  const [open, setOpen] = useState(false)

  const handleClickOpen = () => setOpen(true)

  const handleClose = () => setOpen(false)

  const hangeChange = (name) => ({ target: { value } }) => {
    // console.log('on change', name, 'value is', value)
    setUser({ ...user, [name]: value })
  }

  const handleAdd = () => {}

  return (
    <div>
      <Tooltip title="Add">
        <IconButton aria-label="Add" onClick={handleClickOpen}>
          <AddIcon />
        </IconButton>
      </Tooltip>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add User</DialogTitle>
        <DialogContent>
          <DialogContentText>Demo add item to react table.</DialogContentText>
          <TextFeld
            autoFocus
            margin="dense"
            label="First Name"
            type="text"
            fullWidth
            value={user.firstName}
            onChange={hangeChange('firstName')}
          />
        </DialogContent>
        <DialogActions>
          <Tooltip title="Add multiple users">
            <Switch />
          </Tooltip>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleAdd} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default AddUserDialog
