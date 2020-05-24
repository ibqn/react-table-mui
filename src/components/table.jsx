import React, { useMemo } from 'react'

import { makeStyles } from '@material-ui/core/styles'

import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import TableBody from '@material-ui/core/TableBody'
import Paper from '@material-ui/core/Paper'
import TableContainer from '@material-ui/core/TableContainer'

import { useTable } from 'react-table'

import makeData from '../utils/make-data'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
})

const DataTable = () => {
  const columns = useMemo(
    () => [
      {
        Header: 'Name',
        columns: [
          {
            Header: 'First Name',
            accessor: 'firstName',
          },
          {
            Header: 'Last Name',
            accessor: 'lastName',
          },
        ],
      },
      {
        Header: 'Info',
        columns: [
          {
            Header: 'Age',
            accessor: 'age',
          },
          {
            Header: 'Visits',
            accessor: 'visits',
          },
          {
            Header: 'Status',
            accessor: 'status',
          },
          {
            Header: 'Profile Progress',
            accessor: 'progress',
          },
        ],
      },
    ],
    []
  )

  const data = useMemo(() => makeData(20), [])

  const { getTableProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data,
  })

  const classes = useStyles()

  // console.log(getTableProps())
  // console.log(headerGroups)
  // console.log(data)

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} {...getTableProps()}>
        <TableHead>
          {headerGroups.map((headerGroup) => (
            <TableRow {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <TableCell {...column.getHeaderProps()}>
                  {column.render('Header')}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableHead>

        <TableBody>
          {rows.map((row, _) => {
            prepareRow(row)
            return (
              <TableRow {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <TableCell {...cell.getCellProps()}>
                    {cell.render('Cell')}
                  </TableCell>
                ))}
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default DataTable
