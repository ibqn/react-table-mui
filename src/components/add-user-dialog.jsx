import React, { useState } from 'react'

import PropTypes from 'prop-types'

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
import TextField from '@material-ui/core/TextField'

import { makeStyles } from '@material-ui/core/styles'

import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'

const initialUser = {
  firstName: '',
  lastName: '',
  age: 0,
  visits: 0,
  status: 'single',
  progress: 0,
}

const useStyles = makeStyles((theme) => ({
  formControl: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(0.5),
    width: '100%',
  },
}))

const AddUserDialog = (props) => {
  const { addUserHandler } = props

  const classes = useStyles()

  const [user, setUser] = useState(initialUser)
  const [open, setOpen] = useState(false)

  const [addMultiple, setAddMultiple] = useState(false)

  const handleSwitch = ({ target: { checked } }) => setAddMultiple(checked)

  const handleClickOpen = () => setOpen(true)

  const handleClose = () => setOpen(false)

  const handleChange = (name) => ({ target: { value } }) =>
    setUser({ ...user, [name]: value })

  const handleAdd = () => {
    addUserHandler(user)
    setUser(initialUser)
    setOpen(addMultiple)
  }

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
          <TextField
            autoFocus
            margin="dense"
            label="First Name"
            type="text"
            fullWidth
            value={user.firstName}
            onChange={handleChange('firstName')}
          />
          <TextField
            margin="dense"
            label="Last Name"
            type="text"
            fullWidth
            value={user.lastName}
            onChange={handleChange('lastName')}
          />
          <TextField
            margin="dense"
            label="Age"
            type="number"
            fullWidth
            value={user.age}
            onChange={handleChange('age')}
          />
          <TextField
            margin="dense"
            label="Visits"
            type="number"
            fullWidth
            value={user.visits}
            onChange={handleChange('visits')}
          />
          <FormControl className={classes.formControl}>
            <InputLabel id="status-label">Status</InputLabel>
            <Select
              labelId="status-label"
              value={user.status}
              onChange={handleChange('status')}
            >
              {['single', 'relationship', 'complicated'].map((value) => (
                <MenuItem key={value} value={value}>
                  {value.charAt(0).toUpperCase() + value.slice(1)}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            margin="dense"
            label="Profile Progress"
            type="number"
            fullWidth
            value={user.progress}
            onChange={handleChange('progress')}
          />
        </DialogContent>
        <DialogActions>
          <Tooltip title="Add multiple users">
            <Switch value={addMultiple} onChange={handleSwitch} />
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

AddUserDialog.propTypes = {
  addUserHandler: PropTypes.func.isRequired,
}

export default AddUserDialog
