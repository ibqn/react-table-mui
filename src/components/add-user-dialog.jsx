import React, { useState } from 'react'

import Tooltip from '@material-ui/core/Tooltip'
import IconButton from '@material-ui/core/IconButton'
import AddIcon from '@material-ui/icons/Add'

import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'

const AddUserDialog = (props) => {
  const [open, setOpen] = useState(false)

  const handleClickOpen = () => setOpen(true)

  const handleClose = () => setOpen(false)

  return (
    <div>
      <Tooltip title="Add">
        <IconButton aria-label="Add" onClick={handleClickOpen}>
          <AddIcon />
        </IconButton>
      </Tooltip>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add User</DialogTitle>
      </Dialog>
    </div>
  )
}

export default AddUserDialog
