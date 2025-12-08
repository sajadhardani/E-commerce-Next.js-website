import { Button } from '@/components/ui';
import Link from 'next/link';
import React from 'react';

function Catalog() {
  return (
    <div className="flex flex-col items-center mx-auto my-4 ">
      {/* <CatalogList /> */}
      catalog exact page
      <Button asChild>
        <Link href="./products">Back To Product List</Link>
      </Button>
    </div>
  );
}

export default Catalog;
