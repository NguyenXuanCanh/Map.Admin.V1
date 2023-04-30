import React from 'react';
import { Input, Stack, Typography } from '@mui/material';

export default function EditUser(props) {
  const { value, onChange } = props;
  return (
    <Stack spacing={1} sx={{ p: 3 }}>
      <Typography variant="subtitle1">Username</Typography>
      <Input
        margin="none"
        value={value?.username ? value?.username : ''}
        onChange={(e) => {
          onChange('username', e.target.value);
        }}
        disabled
        readOnly
      />
      <Typography variant="subtitle1">Display Name</Typography>
      <Input
        margin="none"
        value={value?.displayName ? value?.displayName : ''}
        onChange={(e) => {
          onChange('displayName', e.target.value);
        }}
      />
      <Typography variant="subtitle1">Email</Typography>
      <Input
        margin="none"
        value={value?.email ? value?.email : ''}
        onChange={(e) => {
          onChange('email', e.target.value);
        }}
      />
      <Typography variant="subtitle1">Phone Number</Typography>
      <Input
        margin="none"
        type="number"
        value={value?.phoneNumber ? value?.phoneNumber : ''}
        onChange={(e) => {
          onChange('phoneNumber', e.target.value);
        }}
      />
    </Stack>
  );
}
