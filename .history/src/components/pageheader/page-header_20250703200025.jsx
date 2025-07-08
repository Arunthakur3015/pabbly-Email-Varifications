import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export function PageHeader({ title, description, buttonTitle, buttonAction }) {
  return (
    <Box sx={{ mb: 3 }}>
      <Typography variant="h4" gutterBottom>
        {title}
      </Typography>

      <Typography sx={{ color: 'text.secondary', mb: 2 }}>
        {description}
      </Typography>

      {buttonTitle && (
        <Button variant="contained" onClick={buttonAction}>
          {buttonTitle}
        </Button>
      )}
    </Box>
  );
}
