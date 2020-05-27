import React, { useState } from 'react'

import Tooltip from '@material-ui/core/Tooltip'
import IconButton from '@material-ui/core/IconButton'
import AddIcon from '@material-ui/icons/Add'

const AddUserDialog = (props) => {
  return (
    <div>
      <Tooltip title="Add">
        <IconButton aria-label="Add">
          <AddIcon />
        </IconButton>
      </Tooltip>
    </div>
  )
}

export default AddUserDialog
