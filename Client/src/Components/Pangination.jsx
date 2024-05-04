import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function BasicPagination() {
  return (
    <div className="justify-center flex mb-10" >
      
        <Stack spacing={2}>
          <Pagination count={3} color="primary" />
        </Stack>
      
    
    </div>
  );
}
