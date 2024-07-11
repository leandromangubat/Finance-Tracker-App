import {
  useGetTransactionsQuery,
  useGetProductsQuery,
  useGetKpisQuery,
} from "../../state/api";
import Dashboardbox from "../../components/Dashboardbox";
import React from "react";
import { DataGrid, GridCellParams } from "@mui/x-data-grid";
import BoxHeader from "../../components/BoxHeader";
import { Box, useTheme } from "@mui/material";

const Row3 = () => {
  const { palette } = useTheme();
  const { data: kpiData } = useGetKpisQuery();
  const { data: productData } = useGetProductsQuery();
  const { data: transactionData } = useGetTransactionsQuery();

  const productColumns = [
    {
      field: "_id",
      headerName: "id",
      flex: 1,
    },
    {
      field: "expense",
      headerName: "Expense",
      flex: 0.5,
      renderCell: (params: GridCellParams) => `$${params.value}`,
    },
    {
      field: "price",
      headerName: "Price",
      flex: 0.5,
      renderCell: (params: GridCellParams) => `$${params.value}`,
    },
  ];
  return (
    <>
      <Dashboardbox gridArea="g">
        <BoxHeader
          title="List of Products"
          sideText={`${productData?.length} products}`}
        />
        <Box
          mt="0.5rem"
          p="0 0.5rem"
          height="75%"
          sx={{
            "& .MuiDataGrid-root": {
              color: palette.grey[300],
              border: "none",
            },
          }}
        >
          <DataGrid rows={productData || []} columns={productColumns} />
        </Box>
      </Dashboardbox>
      <Dashboardbox gridArea="h"></Dashboardbox>
      <Dashboardbox gridArea="i"></Dashboardbox>
      <Dashboardbox gridArea="j"></Dashboardbox>
    </>
  );
};

export default Row3;
