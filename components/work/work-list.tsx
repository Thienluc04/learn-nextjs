import { Work } from '@/models';
import { Box, Divider } from '@mui/material';
import { Fragment } from 'react';
import { WorkCard } from './work-card';

export interface WorkListProps {
  workList: Work[];
}

export function WorkList({ workList }: WorkListProps) {
  if (workList.length === 0) return null;
  return (
    <Box>
      {workList.map((work) => (
        <Fragment key={work.id}>
          <WorkCard work={work}></WorkCard>
          <Divider sx={{ my: 3 }}></Divider>
        </Fragment>
      ))}
    </Box>
  );
}
