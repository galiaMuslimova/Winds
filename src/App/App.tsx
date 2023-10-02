import React from "react";
import { Header } from "components/Header";
import { StyledApp, StyledMain, StyledTableBlock } from "./App.style";
import { Sidebar } from "components/Sidebar";
import { TableHead } from "components/TableHead";
import { Table } from "components/Table";

export const App: React.FC = () => {
  return (
    <StyledApp>
      <Header />
      <StyledMain>
        <Sidebar />
        <StyledTableBlock>
          <TableHead></TableHead>
          <Table />
        </StyledTableBlock>
      </StyledMain>
    </StyledApp>
  );
};
