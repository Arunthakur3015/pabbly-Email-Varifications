import AddIcon from '@mui/icons-material/Add';
import { Box, Typography } from '@mui/material';

export default function FolderListBox() {
  return (
    <Box
      sx={{
        width: 320.2,
        height: 458.2,
        padding: 3, // 24px = theme.spacing(3)
        borderRadius: 2,
        bgcolor: 'background.paper',
        boxShadow: 3,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 1,
          mb: 2,
        }}
      >
        <AddIcon sx={{ width: 28, height: 28 }} />
        <Typography variant="subtitle1">Folders</Typography>
      </Box>

      {['Home', 'Pabbly', 'Connect', 'Main', 'Folder'].map((name, i) => (
        <Box
          key={i}
          sx={{
            height: 37.575,
            width: 272.2,
            px: 1, // 8px
            py: '6.4px',
            borderRadius: 1,
            bgcolor: 'grey.100',
            mb: 1,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Typography variant="body2">{name}</Typography>
        </Box>
      ))}
    </Box>
  );
}
