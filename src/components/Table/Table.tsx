import React, { useCallback, useEffect, useState } from "react";
import {
  StyledTr,
  StyledTable,
  StyledTh,
  StyledTableWrap,
} from "./Table.style";
import {
  useCreateEntityMutation,
  useDeleteEntityMutation,
  useGetListQuery,
  useUpdateEntityMutation,
} from "services/entityApi";
import { TableRow } from "components/TableRow";
import { addRow, defaultEntity, deleteRow, getFlatList } from "./Table.service";
import {
  CreateEntity,
  Entity,
  ExtendedEntity,
  UpdateEntity,
} from "types/entity";

export const Table: React.FC = () => {
  const { data } = useGetListQuery();
  const [createEntity] = useCreateEntityMutation();
  const [updateEntity] = useUpdateEntityMutation();
  const [deleteEntity] = useDeleteEntityMutation();

  const [list, setList] = useState<ExtendedEntity[]>([defaultEntity]);

  const handleAddRow = useCallback(
    (parentId: string) => {
      if (data) {
        setList((prev) => addRow(prev, parentId, defaultEntity));
      }
    },
    [data]
  );

  const handleChangeList = useCallback(
    (changed: Entity[], current: Entity | null) => {
      setList((prev) =>
        prev.map((item) => {
          const changedEntity = changed.find(
            (changedItem) => item.id === changedItem.id
          );
          const isCurrent = current?.id === item.id || !item.id;
          const isChanged = Boolean(changedEntity);

          if (isChanged) {
            return { ...item, ...changedEntity };
          } else if (isCurrent) {
            return { ...item, ...current, isNew: false, isEdit: false };
          }
          return item;
        })
      );
    },
    []
  );

  const handleCreateRow = useCallback(
    (entity: CreateEntity) => {
      createEntity(entity)
        .unwrap()
        .then(({ changed, current }) => handleChangeList(changed, current))
        .catch((error) => console.error(error));
    },
    [createEntity, handleChangeList]
  );

  const handleUpdateRow = useCallback(
    (id: string, entity: UpdateEntity) => {
      updateEntity({ rID: id, body: entity })
        .unwrap()
        .then(({ changed, current }) => handleChangeList(changed, current))
        .catch((error) => console.error(error));
    },
    [handleChangeList, updateEntity]
  );

  const handleDeleteRow = useCallback(
    (id: string) => {
      deleteEntity(id)
        .unwrap()
        .then(({ changed, current }) => handleChangeList(changed, current))
        .then(() => setList((prev) => deleteRow(prev, id)))
        .catch((error) => console.error(error));
    },
    [deleteEntity, handleChangeList]
  );

  useEffect(() => {
    if (data && data.length > 0) {
      setList(getFlatList(data, 0, null));
    }
  }, [data]);

  return (
    <StyledTableWrap>
      <StyledTable>
        <thead>
          <StyledTr>
            <StyledTh>Уровень</StyledTh>
            <StyledTh>Наименование работ</StyledTh>
            <StyledTh>Основная з/п</StyledTh>
            <StyledTh>Оборудование</StyledTh>
            <StyledTh>Накладные расходы</StyledTh>
            <StyledTh>Сметная прибыль</StyledTh>
          </StyledTr>
        </thead>
        <tbody>
          {list ? (
            list.map((item) => (
              <TableRow
                key={item.id}
                initialEntity={item}
                onAddRow={handleAddRow}
                onDeleteRow={handleDeleteRow}
                onCreateRow={handleCreateRow}
                onUpdateRow={handleUpdateRow}
              />
            ))
          ) : (
            <TableRow initialEntity={defaultEntity} />
          )}
        </tbody>
      </StyledTable>
    </StyledTableWrap>
  );
};
