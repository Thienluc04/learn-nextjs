import { StudentDetail } from '@/components/swr';
import { useState } from 'react';

export default function SWRPage() {
  const [detailList, setDetailList] = useState([1, 1, 1]);

  const handleAddClick = () => {
    setDetailList((prev) => [...prev, 1]);
  };

  return (
    <div>
      <h1>SWR Playground</h1>
      <button onClick={handleAddClick}>Add detail</button>
      <ul>
        {detailList.map((_, index) => (
          <li key={index}>
            <StudentDetail studentId="lea11ziflg8xoiza" />
          </li>
        ))}
      </ul>
    </div>
  );
}
