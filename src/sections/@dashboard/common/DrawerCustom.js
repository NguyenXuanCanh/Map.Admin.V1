import { Box, Button, Divider, Drawer, IconButton, Input, Stack, Typography } from '@mui/material';
import { sentenceCase } from 'change-case';
import React, { useEffect, useState } from 'react';
import Iconify from '../../../components/iconify/Iconify';
import Scrollbar from '../../../components/scrollbar/Scrollbar';
import CreatePackages from './CreatePackages';
import EditUser from './EditUser';

export default function DrawerCustom(props) {
  const { menu, open, value, onClose, onSubmit } = props;
  const [submitValue, setSubmitValue] = useState();

  useEffect(() => {
    if (value) {
      setSubmitValue(value);
    }
  }, [value]);

  const onChange = (key, value) => {
    setSubmitValue({ ...submitValue, [key]: value });
  };

  const onSave = () => {
    if (onSubmit) onSubmit(submitValue);
  };

  return (
    <Drawer anchor={'right'} open={open} onClose={onClose}>
      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ px: 1, py: 2, width: 350 }}>
        <Typography variant="subtitle1" sx={{ ml: 1 }}>
          {menu && sentenceCase(menu)}
        </Typography>
        <IconButton onClick={onClose}>
          <Iconify icon="eva:close-fill" width={20} height={20} />
        </IconButton>
      </Stack>

      <Divider />

      <Scrollbar sx={{ overflowY: 'auto' }}>
        {menu === 'createPackages' ? (
          <CreatePackages onChange={onChange} value={submitValue} />
        ) : menu === 'editUser' ? (
          <EditUser onChange={onChange} value={submitValue} />
        ) : null}
      </Scrollbar>

      <Box sx={{ p: 3 }}>
        {false ? (
          <>
            <Button
              fullWidth
              size="large"
              type="submit"
              color="primary"
              variant="contained"
              className="text-white border"
              startIcon={<Iconify icon="bx:save" />}
              onClick={() => console.log('a')}
            >
              Update
            </Button>
          </>
        ) : (
          <Button
            fullWidth
            size="large"
            type="submit"
            color="primary"
            variant="contained"
            className="text-white border"
            startIcon={<Iconify icon="material-symbols:add-box-outline" />}
            onClick={onSave}
          >
            Submit
          </Button>
        )}
      </Box>
    </Drawer>
  );
}
