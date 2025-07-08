import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Box, Card, Stack, Button, Divider, TextField, CardHeader } from '@mui/material';

// ✅ Zod validation schema
const TitleSchema = z.object({
  title: z.string().min(1, 'Title is required'),
});

export default function VerifySingleEmailTitleForm() {
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
  };

  return (
    <Card>
      <CardHeader title="Verify Email" subheader="Enter Title to Start" />
      <Divider />

      <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ p: 3 }}>
        <Stack spacing={3}>
          <TextField
            label="Post title"
            {...register('title')}
            error={!!errors.title}
            helperText={errors.title?.message}
            fullWidth
          />

          <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
            <Button variant="outlined" onClick={() => reset()}>
              Cancel
            </Button>

            <Button type="submit" variant="contained" disabled={isSubmitting}>
              Save
            </Button>
          </Box>
        </Stack>
      </Box>
    </Card>
  );
}
