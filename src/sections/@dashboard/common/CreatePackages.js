import React from 'react';
import { Input, Stack, Typography } from '@mui/material';

export default function CreatePackages(props) {
  const { value, onChange } = props;
  return (
    <Stack spacing={1} sx={{ p: 3 }}>
      <Typography variant="subtitle1">Address to ship</Typography>
      <Input
        margin="none"
        value={value?.description ? value?.description : ''}
        onChange={(e) => {
          onChange('description', e.target.value);
        }}
      />
      <Typography variant="subtitle1" style={{ marginTop: 20 }}>
        Price (VND)
      </Typography>
      <Input
        margin="none"
        type="number"
        value={value?.price ? value?.price : ''}
        onChange={(e) => {
          onChange('price', e.target.value);
        }}
      />
      <Typography variant="subtitle1" style={{ marginTop: 20 }}>
        Weight (KG)
      </Typography>
      <Input
        margin="none"
        type="number"
        value={value?.weight ? value?.weight : ''}
        onChange={(e) => {
          onChange('weight', e.target.value);
        }}
      />
    </Stack>
  );
}
