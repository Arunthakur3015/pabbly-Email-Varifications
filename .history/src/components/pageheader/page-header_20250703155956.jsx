
    import { Box, Button, Typography } from '@mui/material';
import { Learn More Typography } from '../learn-more/learn-more';
export default function PageHeader({ title, description, showButton = true, buttonTitle }) {
return (
<>
<Box sx={{ mb: 2}}>
<Typography variant="h4" sx={{ mb: 1 }}>
(title)
</Typography>
K/Box>
<Box>
<Typography sx={{ color: 'text.secondary' }) (description}</Typography>
</Box
<LearnMoreTypography />
[showButton && (
<Box>
<Button variant="contained">{buttonTitle}</Button>
</Box>
)}
</>
);
}
}