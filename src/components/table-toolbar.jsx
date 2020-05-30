import React from 'react'

import clsx from 'clsx'
import PropTypes from 'prop-types'

import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

import { makeStyles } from '@material-ui/core/styles'

import AddUserDialog from './add-user-dialog'

const useToolbarStyles = makeStyles((theme) => ({
  title: {
    flex: '1 1 100%',
  },
}))

const TableToolbar = (props) => {
  const classes = useToolbarStyles()
  const addUserHandler = () => {}

  return (
    <Toolbar>
      <AddUserDialog addUserHandler={addUserHandler} />
      <Typography className={classes.title} variant="h6">
        Users
      </Typography>
    </Toolbar>
  )
}

export default TableToolbar
