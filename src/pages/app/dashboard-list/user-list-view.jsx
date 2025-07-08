import { useState, useCallback } from 'react';

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
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

import { _roles, _userList, USER_STATUS_OPTIONS } from 'src/_mock';
import { UserTableRow } from 'src/pages/app/dashboard-list/user-table-row';
import { UserTableToolbar } from 'src/pages/app/dashboard-list/user-table-toolbar';
import { UserTableFiltersResult } from 'src/pages/app/dashboard-list/user-table-filters-result';

import { Label } from 'src/components/label';
import { Iconify } from 'src/components/iconify';
import { Scrollbar } from 'src/components/scrollbar';
import { ConfirmDialog } from 'src/components/custom-dialog';
import MoveFolderModal from 'src/components/move-folder/move-folder';
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

const STATUS_OPTIONS = [{ value: 'all', label: 'All' }, ...USER_STATUS_OPTIONS];

const TABLE_HEAD = [
  {
    id: 'status/name/date',
    label: 'Status/Name/Date',
    sx: {
      width: { xs: '100%', md: 357.06 },
      minWidth: 200,
    },
  },
  {
    id: 'email/credit',
    label: 'Number of Emails/Credits Consumed',
    sx: {
      width: { xs: '100%', md: 362.08 },
      minWidth: 200,
    },
  },
  {
    id: 'action',
    label: 'Action',
    align: 'right',
    sx: {
      width: { xs: '100%', md: 267 },
      textAlign: { xs: 'left', md: 'right' },
    },
  },
  {
    id: '',
    sx: { display: { xs: 'none', md: 'table-cell' }, width: 52 },
  },
];

export function UserListView() {
  const table = useTable();
  const router = useRouter();
  const confirm = useBoolean();
  const [tableData, setTableData] = useState(_userList);
  const filters = useSetState({ name: '', role: [], status: 'all' });

  const [openMoveFolderModal, setOpenMoveFolderModal] = useState(false);
  const handleOpenMoveFolderModal = () => setOpenMoveFolderModal(true);
  const handleCloseMoveFolderModal = () => setOpenMoveFolderModal(false);

  const dataFiltered = applyFilter({
    inputData: tableData,
    comparator: getComparator(table.order, table.orderBy),
    filters: filters.state,
  });

  const dataInPage = rowInPage(dataFiltered, table.page, table.rowsPerPage);

  const canReset =
    !!filters.state.name || filters.state.role.length > 0 || filters.state.status !== 'all';

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
      <Box sx={{ width: '100%', px: { xs: 2, md: 3 }, mt: 3.5 }}>
        <Card sx={{ mt: 4 }}>
          <CardHeader title={<Typography>Home</Typography>} sx={{ mb: 1.5, fontSize: 18 }} />

          <Typography variant="body2" sx={{ ml: 3, color: 'text.secondary', mb: 2.5 }}>
            Verify and manage all your uploaded email lists here.
          </Typography>

          <Divider />

          <Tabs
            value={filters.state.status}
            onChange={handleFilterStatus}
            variant="scrollable"
            scrollButtons="auto"
            sx={{ px: 2.5, overflowX: 'auto' }}
          >
            {STATUS_OPTIONS.map((tab) => (
              <Tab
                key={tab.value}
                iconPosition="end"
                value={tab.value}
                label={tab.label}
                icon={
                  <Label
                    variant={
                      ((tab.value === 'all' || tab.value === filters.state.status) && 'filled') ||
                      'soft'
                    }
                    color={
                      (tab.value === 'verified' && 'success') ||
                      (tab.value === 'processing' && 'info') ||
                      (tab.value === 'uploading' && 'warning') ||
                      (tab.value === 'unverified' && 'error') ||
                      'default'
                    }
                  >
                    {tab.value === 'all'
                      ? tableData.length
                      : tableData.filter(
                          (user) => user.status.toLowerCase() === tab.value.toLowerCase()
                        ).length}
                  </Label>
                }
              />
            ))}
          </Tabs>

          <UserTableToolbar
            filters={filters}
            onResetPage={table.onResetPage}
            options={{ roles: _roles }}
            sx={{ width: '100%', overflowX: 'auto' }}
          />

          {canReset && (
            <UserTableFiltersResult
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
                  <IconButton color="primary" onClick={confirm.onTrue} sx={{ pr: 1 }}>
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
                      <UserTableRow
                        key={row.id}
                        row={row}
                        selected={table.selected.includes(row.id)}
                        onSelectRow={() => table.onSelectRow(row.id)}
                        onEditRow={() => handleEditRow(row.id)}
                        userTableIndex={table.page * table.rowsPerPage + index}
                        emailCredit={table.page * table.rowsPerPage + index}
                        emailGreen={table.page * table.rowsPerPage + index}
                        buttonRowabc={table.page * table.rowsPerPage + index}
                        onMoveToFolder={handleOpenMoveFolderModal}
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
      </Box>

      <ConfirmDialog
        open={confirm.value}
        onClose={confirm.onFalse}
        title="Delete"
        content={
          <>
            Are you sure want to delete <strong>{table.selected.length}</strong> items?
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

      <MoveFolderModal open={openMoveFolderModal} onClose={handleCloseMoveFolderModal} />
    </>
  );
}

function applyFilter({ inputData, comparator, filters }) {
  const { name, status, role } = filters;
  const stabilizedThis = inputData.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  inputData = stabilizedThis.map((el) => el[0]);

  if (name) {
    inputData = inputData.filter(
      (Listnumber) => Listnumber.name.toLowerCase().indexOf(name.toLowerCase()) !== -1
    );
  }
  if (status !== 'all') {
    inputData = inputData.filter((user) => user.status.toLowerCase() === status.toLowerCase());
  }
  if (role.length) {
    inputData = inputData.filter((user) => role.includes(user.role));
  }

  return inputData;
}
