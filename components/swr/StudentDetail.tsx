import * as React from 'react';
import useSWR from 'swr';

export interface StudentDetailProps {
  studentId: string;
}

export function StudentDetail({ studentId }: StudentDetailProps) {
  const { data, error, mutate, isValidating } = useSWR(`/students/${studentId}`, {
    revalidateOnFocus: false,
  });

  const hanldeMutateClick = () => {
    mutate({ name: 'Thienluc' }, true);
  };

  return (
    <div>
      Name: {data?.name || '--'} <button onClick={hanldeMutateClick}>mutate</button>
    </div>
  );
}
