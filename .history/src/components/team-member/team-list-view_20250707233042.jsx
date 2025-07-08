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

// const STATUS_OPTIONS = [{ value: 'all', label: 'All' },];

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

  const filters = useSetState({ name: '', role: [], status: 'all' });

  const dataFiltered = applyFilter({
    inputData: tableData,
    comparator: getComparator(table.order, table.orderBy),
    appliedFilters: filters.state, // यहाँ appliedFilters key में filters.state pass किया
  });

  const dataInPage = rowInPage(dataFiltered, table.page, table.rowsPerPage);

  const canReset =
    !!filters.state.name || filters.state.role.length > 0 || filters.state.status !== 'all';

  const notFound = (!dataFiltered.length && canReset) || !dataFiltered.length;

  const handleDeleteRow = useCallback(
    (id) => {
      const deleteRow = tableData.filter((row) => row.id !== id);

      // toast.success('Delete success!');

      setTableData(deleteRow);

      table.onUpdatePageDeleteRow(dataInPage.length);
    },
    [dataInPage.length, table, tableData]
  );

  const handleDeleteRows = useCallback(() => {
    const deleteRows = tableData.filter((row) => !table.selected.includes(row.id));

    // toast.success('Delete success!');

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

        {/* <Tabs
          value={filters.state.status}
          onChange={handleFilterStatus}
          sx={{
            px: 2.5,
            boxShadow: (theme) =>
              inset 0 -2px 0 0 ${varAlpha(theme.vars.palette.grey['500Channel'], 0.08)},
          }}
        >
          {/* {STATUS_OPTIONS.map((tab) => (
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
                  {['Verified', 'Processing', 'Uploading', 'Unverified'].includes(tab.value)
                    ? tableData.filter((user) => user.status === tab.value).length
                    : tableData.length}
                </Label>
              }
            />
          ))} */}
        {/* </Tabs> */}

        <Divider />

        {/* इस जगह TeamTableToolbar था - अब वहाँ ये नया Box paste करो */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            // px: 2.5,
            py: 2,
          }}
        >
          {/* Search bar with reduced width */}
          <Box sx={{ flexGrow: 1, maxWidth: 1040 }}>
            <TeamTableToolbar
              filters={filters}
              onResetPage={table.onResetPage}
              options={{ roles: _roles }}
            />
          </Box>

          {/* Custom action buttons on right side of search */}
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap', // responsiveness के लिए wrap
              gap: 1,
              padding: 2,
              alignItems: 'center',
              justifyContent: 'flex-end',
              flex: 1,
              maxWidth: 350, // fix maxWidth की जगह minWidth यूज़ करो ताकि shrink न हो
            }}
          >
            {/* Add Team Member button */}
            <AddTeamMemberButtonWithDialog />

            {/* Filter button */}
            <FilterButtonWithPopup
              onApplyFilters={() => {
                console.log('Filters applied from parent:', filters);
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
                      // onDeleteRow={() => handleDeleteRow(row.id)}
                      onEditRow={() => handleEditRow(row.id)}
                      userTableIndex={table.page * table.rowsPerPage + index}
                      emailCredit={table.page * table.rowsPerPage + index}
                      emailGreen={table.page * table.rowsPerPage + index}
                      buttonRowabc={table.page * table.rowsPerPage + index}
                    />
                  ))}

                <TableEmptyRows
                  height={table.dense ? 56 : 56 + 20}
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
      {/* <Toaster position="top-right" /> */}
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
  const { name, status, role } = appliedFilters;

  const stabilizedThis = inputData.map((el, index) => [el, index]);

  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });

  inputData = stabilizedThis.map((el) => el[0]);

  // ✅ यहाँ सही फील्ड पर सर्च
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

  return inputData;
}
