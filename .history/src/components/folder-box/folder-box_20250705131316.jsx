import { useState } from 'react';

import AddIcon from '@mui/icons-material/Add';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Box, Tooltip, Typography, IconButton } from '@mui/material';

import { useRouter } from 'src/router';

import CustomModal from './plus-modal';
import RenameModal from './rename-modal';
import DeleteModal from './delete-modal';
import FolderOptionsMenu from './option-menu';

const foldersList = [
  'Home',
  'Pabbly Connect',
  'Main Folder',
  'Pabbly Subscription Billin...',
  'Pabbly Email Marketing',
  'Pabbly Form Builder',
  'Pabbly Hook',
];

export default function FolderListBox() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [renameModalOpen, setRenameModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);

  const [folders, setFolders] = useState(foldersList);
  const [menuAnchorEl, setMenuAnchorEl] = useState(null);
  const [selectedFolder, setSelectedFolder] = useState(null);
  const [renameValue, setRenameValue] = useState('');

  const router = useRouter();

  const handleMenuOpen = (event, folderName, index) => {
    setMenuAnchorEl(event.currentTarget);
    setSelectedFolder({ name: folderName, index });
  };

  const handleMenuClose = () => {
    setMenuAnchorEl(null);
    setSelectedFolder(null);
  };

  const handleRenameConfirm = () => {
    const updated = [...folders];
    updated[selectedFolder.index] = renameValue;
    setFolders(updated);
    setRenameModalOpen(false);
    handleMenuClose();
  };

  const handleDeleteConfirm = () => {
    const updated = folders.filter((_, i) => i !== selectedFolder.index);
    setFolders(updated);
    handleMenuClose();
  };

  return (
    <Box
      sx={{
        width: 320.2,
        height: 458.2,
        p: 3,
        bgcolor: 'background.paper',
        borderRadius: 2,
        boxShadow: 2,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      {/* Header */}
      <Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            pr: 1,
          }}
        >
          <Typography fontWeight={600} fontSize={18} mt="10px">
            Folders
          </Typography>
          <IconButton
            onClick={() => setOpenModal(true)}
            sx={{
              width: 36,
              height: 36,
              bgcolor: '#007BFF',
              color: '#fff',
              borderRadius: '8px',
              '&:hover': { bgcolor: '#0066cc' },
            }}
          >
            <AddIcon sx={{ fontSize: 24 }} />
          </IconButton>
        </Box>

        <Box
          sx={{
            color: 'grey',
            opacity: 0.5,
            borderBottom: '1px dashed #ccc',
            mt: '16px',
            mb: '16px',
          }}
        />

        <Box display="flex" flexDirection="column" gap="4px">
          {folders.map((name, index) => (
            <Tooltip title="Number of lists in this folder" placement="top" arrow key={index}>
              <Box
                onClick={() => setSelectedIndex(index)}
                sx={{
                  width: 272.2,
                  height: 37.575,
                  px: '16px',
                  py: '12px',
                  borderRadius: '4px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  bgcolor: selectedIndex === index ? '#D7EDFC' : 'transparent',
                  cursor: 'pointer',
                  '&:hover': {
                    bgcolor: selectedIndex === index ? '#D7EDFC' : '#F4F6F8',
                  },
                }}
              >
                <Typography fontSize="14px" fontWeight={500} noWrap>
                  {name}
                  <Typography fontSize="14px" color="grey" ml="4px" component="span">
                    {' '}
                    (0)
                  </Typography>
                </Typography>

                {name !== 'Home' && (
                  <IconButton size="small" onClick={(e) => handleMenuOpen(e, name, index)}>
                    <MoreVertIcon sx={{ fontSize: 18 }} />
                  </IconButton>
                )}
              </Box>
            </Tooltip>
          ))}
        </Box>
      </Box>

      {/* Trash */}
      <Box>
        <Box sx={{ borderTop: '1px dashed #ccc', mt: '16px', mb: '4px' }} />
        <Box
          sx={{
            width: 272.2,
            height: 37.575,
            px: 1,
            py: 0.5,
            borderRadius: '4px',
            display: 'flex',
            alignItems: 'center',
            color: 'text.secondary',
          }}
        >
          <Typography fontSize="14px" fontWeight={600} pt="12px">
            Trash (0)
          </Typography>
        </Box>
      </Box>

      {/* Create Modal */}
      <CustomModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        title="Create Folder"
        inputLabel="Folder Name"
        placeholder="Enter folder name here."
        confirmText="Create Folder"
        cancelText="Cancel"
      />

      {/* Rename Modal */}
      <RenameModal
        open={renameModalOpen}
        onClose={() => setRenameModalOpen(false)}
        value={renameValue}
        setValue={setRenameValue}
        onConfirm={handleRenameConfirm}
        title="Rename Folder"
        inputLabel="New Folder Name"
        placeholder="Enter new name"
        confirmText="Update"
        cancelText="Cancel"
      />

      {/* Delete Modal */}
      <DeleteModal
        open={deleteModalOpen}
        onClose={() => setDeleteModalOpen(false)}
        onConfirm={handleDeleteConfirm}
        title="Do you really want to delete the folder?"
        helper="Note that when a folder is deleted its email lists are moved to the home folder."
        confirmText="Delete"
        cancelText="Cancel"
      />

      {/* Folder Options Menu */}
      <FolderOptionsMenu
        anchorEl={menuAnchorEl}
        open={Boolean(menuAnchorEl)}
        onClose={handleMenuClose}
        onRename={() => {
          setRenameValue(selectedFolder?.name || '');
          setRenameModalOpen(true);
        }}
        onShare={() => {
          handleMenuClose();
          router.push('/app/team-members');
        }}
        onDelete={() => setDeleteModalOpen(true)}
      />
    </Box>
  );
}
