import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import {
  Box,
  Card,
  Stack,
  Button,
  Divider,
  TextField,
  CardHeader,
  CircularProgress,
} from '@mui/material';

// ✅ Zod validation schema
const TitleSchema = z.object({
  title: z.string().min(1, 'Title is required'),
});

export default function VerifySingleEmailTitleForm({ onClose }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(TitleSchema),
    defaultValues: {
      title: '',
    },
  });

  const onSubmit = async (data) => {
    console.log('Submitted Title:', data.title);
    alert(`Title submitted: ${data.title}`);
    reset();
    if (onClose) onClose();
  };

  const handleCancel = () => {
    reset();
    if (onClose) onClose();
  };

  return (
    <Card sx={{ boxShadow: 'none' }}>
      <CardHeader title="Verify Email" subheader="Enter Title to Start" />
      <Divider />

      <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ p: 3 }}>
        <Stack spacing={3}>
          <TextField
            label="Post Title"
            {...register('title')}
            error={!!errors.title}
            helperText={errors.title?.message}
            fullWidth
          />

          <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
            <Button variant="outlined" onClick={handleCancel}>
              Cancel
            </Button>

            <Button
              type="submit"
              variant="contained"
              disabled={isSubmitting}
              startIcon={isSubmitting && <CircularProgress size={20} />}
            >
              Save
            </Button>
          </Box>
        </Stack>
      </Box>
    </Card>
  );
}
