import { useState, useCallback } from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Table from '@mui/material/Table';
import Tooltip from '@mui/material/Tooltip';
import TableBody from '@mui/material/TableBody';
import IconButton from '@mui/material/IconButton';
import { Button, Divider, CardHeader, Typography } from '@mui/material';

import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hooks';

import { useBoolean } from 'src/hooks/use-boolean';
import { useSetState } from 'src/hooks/use-set-state';

import { _roles } from 'src/_mock';

import { Iconify } from 'src/components/iconify';
import { Scrollbar } from 'src/components/scrollbar';
import { ConfirmDialog } from 'src/components/custom-dialog';
import { TeamTableRow } from 'src/components/team-member/team-table-row';
import { TeamTableToolbar } from 'src/components/team-member/team-table-toolbar';
import { TeamTableFiltersResult } from 'src/components/team-member/team-table-filters';
import FilterButtonWithPopup from 'src/components/team-member-button/FilterButtonWithPopup';
import AddTeamMemberButtonWithDialog from 'src/components/team-member-button/AddTeamMemberButtonWithDialog';
import {
  useTable,
  emptyRows,
  rowInPage,
  TableNoData,
  getComparator,
  TableEmptyRows,
  TableHeadCustom,
  TableSelectedAction,
  TablePaginationCustom,
} from 'src/components/table';

// ----------------------------------------------------------------------

const TABLE_HEAD = [
  { id: 'status/name/date', label: 'Shared On', width: 500.06 },
  { id: 'email/credit', label: 'Team Member Email', width: 700.08 },
  { id: 'status', label: 'Permission Type', width: '267px', align: 'right' },
  { id: '', width: 10, align: 'right' },
];

// ----------------------------------------------------------------------

export function TeamListView() {
  const table = useTable();

  const router = useRouter();

  const confirm = useBoolean();

  const [tableData, setTableData] = useState([
    { id: 1, email: 'john.doe@example.com', company: 'Company A', permission: 'Write Access' },
    { id: 2, email: 'jane.smith@example.com', company: 'Company B', permission: 'Read Access' },
    { id: 3, email: 'alice.johnson@example.com', company: 'Company C', permission: 'Write Access' },
    { id: 4, email: 'jane.smith@example.com', company: 'Company B', permission: 'Read Access' },
    { id: 5, email: 'jane.smith@example.com', company: 'Company B', permission: 'Read Access' },
  ]);

  const filters = useSetState({
    name: '',
    role: [],
    status: 'all',
    permissionType: '',
    sharedFolder: '',
  });

  const dataFiltered = applyFilter({
    inputData: tableData,
    comparator: getComparator(table.order, table.orderBy),
    appliedFilters: filters.state,
  });

  const dataInPage = rowInPage(dataFiltered, table.page, table.rowsPerPage);

  const canReset =
    !!filters.state.name ||
    filters.state.role.length > 0 ||
    filters.state.status !== 'all' ||
    filters.state.permissionType !== '' ||
    filters.state.sharedFolder !== '';

  const notFound = (!dataFiltered.length && canReset) || !dataFiltered.length;

  const handleDeleteRow = useCallback(
    (id) => {
      const deleteRow = tableData.filter((row) => row.id !== id);
      setTableData(deleteRow);
      table.onUpdatePageDeleteRow(dataInPage.length);
    },
    [dataInPage.length, table, tableData]
  );

  const handleDeleteRows = useCallback(() => {
    const deleteRows = tableData.filter((row) => !table.selected.includes(row.id));
    setTableData(deleteRows);
    table.onUpdatePageDeleteRows({
      totalRowsInPage: dataInPage.length,
      totalRowsFiltered: dataFiltered.length,
    });
  }, [dataFiltered.length, dataInPage.length, table, tableData]);

  const handleEditRow = useCallback(
    (id) => {
      router.push(paths.dashboard.user.edit(id));
    },
    [router]
  );

  const handleFilterStatus = useCallback(
    (event, newValue) => {
      table.onResetPage();
      filters.setState({ status: newValue });
    },
    [filters, table]
  );

  return (
    <>
      <Card sx={{ mt: 4 }}>
        <CardHeader
          variant="H6"
          title={<Typography>Team Members</Typography>}
          sx={{ mb: 1.5, fontSize: 18 }}
        />
        <Typography variant="body2" sx={{ ml: 3, color: 'text.secondary', mb: 2.5 }}>
          View and manage team members with assigned permissions. Add new members, filter access,
          and update roles efficiently.
        </Typography>
        <Divider />

        <Divider />

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            py: 2,
          }}
        >
          <Box sx={{ flexGrow: 1, maxWidth: 'xl' }}>
            <TeamTableToolbar
              filters={filters}
              onResetPage={table.onResetPage}
              options={{ roles: _roles }}
            />
          </Box>

          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 1,
              padding: 2,
              alignItems: 'center',
              justifyContent: 'flex-end',
              flex: 1,
              minWidth: 350,
            }}
          >
            <AddTeamMemberButtonWithDialog />

            <FilterButtonWithPopup
              onApplyFilters={(appliedFilters) => {
                filters.setState({
                  ...filters.state,
                  ...appliedFilters,
                });
              }}
            />
          </Box>
        </Box>

        {canReset && (
          <TeamTableFiltersResult
            filters={filters}
            totalResults={dataFiltered.length}
            onResetPage={table.onResetPage}
            sx={{ p: 2.5, pt: 0 }}
          />
        )}

        <Box sx={{ position: 'relative' }}>
          <TableSelectedAction
            dense={table.dense}
            numSelected={table.selected.length}
            rowCount={dataFiltered.length}
            onSelectAllRows={(checked) =>
              table.onSelectAllRows(
                checked,
                dataFiltered.map((row) => row.id)
              )
            }
            action={
              <Tooltip title="Delete">
                <IconButton color="primary" onClick={confirm.onTrue}>
                  <Iconify icon="solar:trash-bin-trash-bold" />
                </IconButton>
              </Tooltip>
            }
          />

          <Scrollbar>
            <Table size={table.dense ? 'small' : 'medium'} sx={{ minWidth: 960 }}>
              <TableHeadCustom
                order={table.order}
                orderBy={table.orderBy}
                headLabel={TABLE_HEAD}
                rowCount={dataFiltered.length}
                numSelected={table.selected.length}
                onSort={table.onSort}
                onSelectAllRows={(checked) =>
                  table.onSelectAllRows(
                    checked,
                    dataFiltered.map((row) => row.id)
                  )
                }
              />

              <TableBody>
                {dataFiltered
                  .slice(
                    table.page * table.rowsPerPage,
                    table.page * table.rowsPerPage + table.rowsPerPage
                  )
                  .map((row, index) => (
                    <TeamTableRow
                      key={row.id}
                      row={row}
                      selected={table.selected.includes(row.id)}
                      onSelectRow={() => table.onSelectRow(row.id)}
                      onEditRow={() => handleEditRow(row.id)}
                      userTableIndex={table.page * table.rowsPerPage + index}
                      emailCredit={table.page * table.rowsPerPage + index}
                      emailGreen={table.page * table.rowsPerPage + index}
                      buttonRowabc={table.page * table.rowsPerPage + index}
                    />
                  ))}

                <TableEmptyRows
                  height={table.dense ? 56 : 76}
                  emptyRows={emptyRows(table.page, table.rowsPerPage, dataFiltered.length)}
                />

                <TableNoData notFound={notFound} />
              </TableBody>
            </Table>
          </Scrollbar>
        </Box>

        <TablePaginationCustom
          page={table.page}
          count={dataFiltered.length}
          rowsPerPage={table.rowsPerPage}
          onPageChange={table.onChangePage}
          onRowsPerPageChange={table.onChangeRowsPerPage}
        />
      </Card>

      <ConfirmDialog
        open={confirm.value}
        onClose={confirm.onFalse}
        title="Delete"
        content={
          <>
            Are you sure want to delete <strong> {table.selected.length} </strong> items?
          </>
        }
        action={
          <Button
            variant="contained"
            color="error"
            onClick={() => {
              handleDeleteRows();
              confirm.onFalse();
            }}
          >
            Delete
          </Button>
        }
      />
    </>
  );
}

function applyFilter({ inputData, comparator, appliedFilters }) {
  const { name, status, role, permissionType, sharedFolder } = appliedFilters;

  const stabilizedThis = inputData.map((el, index) => [el, index]);

  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });

  inputData = stabilizedThis.map((el) => el[0]);

  if (name) {
    inputData = inputData.filter(
      (item) =>
        item.email.toLowerCase().includes(name.toLowerCase()) ||
        item.company.toLowerCase().includes(name.toLowerCase()) ||
        item.permission.toLowerCase().includes(name.toLowerCase())
    );
  }

  if (status !== 'all') {
    inputData = inputData.filter((user) => user.status === status);
  }

  if (role.length) {
    inputData = inputData.filter((user) => role.includes(user.role));
  }

  if (permissionType) {
    inputData = inputData.filter((user) =>
      user.permission.toLowerCase().includes(permissionType.toLowerCase())
    );
  }

  if (sharedFolder) {
    inputData = inputData.filter((user) =>
      user.company.toLowerCase().includes(sharedFolder.toLowerCase())
    );
  }

  return inputData;
}
