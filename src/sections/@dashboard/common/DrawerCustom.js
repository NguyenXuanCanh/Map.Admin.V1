import { Box, Button, Divider, Drawer, IconButton, Input, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Iconify from '../../../components/iconify/Iconify';
import Scrollbar from '../../../components/scrollbar/Scrollbar';

export default function DrawerCustom(props) {
  const { menu, open, onClose } = props;
  const [children, setChildren] = useState();
  useEffect(() => {
    let children = {};
    if (menu) {
      switch (menu) {
        case 'packages': {
          children = (
            <Stack spacing={1} sx={{ p: 3 }}>
              <Typography variant="subtitle1">Discription</Typography>
              <Input margin="none" value={''} onChange={(e) => {}} />
              <Typography variant="subtitle1" style={{ marginTop: 20 }}>
                Price
              </Typography>
              <Input margin="none" type="number" value={''} onChange={(e) => {}} />
              <Typography variant="subtitle1" style={{ marginTop: 20 }}>
                Weight
              </Typography>
              <Input margin="none" type="number" value={''} onChange={(e) => {}} />
            </Stack>
          );
          break;
        }
        default: {
          break;
        }
      }
      setChildren(children);
    }
  }, menu);
  return (
    <Drawer anchor={'right'} open={open} onClose={onClose}>
      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ px: 1, py: 2, width: 350 }}>
        <Typography variant="subtitle1" sx={{ ml: 1 }}>
          {false ? 'Edit' : 'Add'}
        </Typography>
        <IconButton onClick={onClose}>
          <Iconify icon="eva:close-fill" width={20} height={20} />
        </IconButton>
      </Stack>

      <Divider />

      <Scrollbar sx={{ overflowY: 'auto' }}>{children}</Scrollbar>

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
            onClick={() => {
              console.log('b');
            }}
          >
            Add
          </Button>
        )}
      </Box>
    </Drawer>
  );
}
