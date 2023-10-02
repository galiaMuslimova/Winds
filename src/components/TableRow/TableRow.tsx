import React, { useCallback, useEffect, useState } from "react";
import {
  StyledBucket,
  StyledIconGroup,
  StyledInput,
  StyledLevelTd,
  StyledTd,
  StyledTr,
} from "./TableRow.style";
import { ExtendedEntity } from "types/entity";
import { ReactComponent as CreateIcon } from "icons/CreateIcon.svg";
import { ReactComponent as Bucket } from "icons/Bucket.svg";
import { TableRowProps } from "./TableRow.type";

export const TableRow: React.FC<TableRowProps> = ({
  initialEntity,
  onAddRow,
  onDeleteRow,
  onCreateRow,
  onUpdateRow,
}) => {
  const [entity, setEntity] = useState<ExtendedEntity>(initialEntity);
  const [isEditMode, setIsEditMode] = useState<boolean>(false);

  const handleAddRow = useCallback(
    () => onAddRow?.(entity.id),
    [entity.id, onAddRow]
  );
  const handleEditRow = useCallback(() => setIsEditMode(true), []);
  const handleDeleteRow = useCallback(() => {
    onDeleteRow?.(entity.id);
  }, [entity.id, onDeleteRow]);

  const handleKeyUp = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.keyCode === 13) {
        setIsEditMode(false);
        if (entity.isNew) {
          onCreateRow?.({ ...entity, parentId: entity.parentId });
        } else {
          onUpdateRow?.(entity.id, entity);
        }
      }
    },
    [entity, onCreateRow, onUpdateRow]
  );
  const handleChangeRowName = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) =>
      setEntity((prev) => ({ ...prev, rowName: e.target.value })),
    []
  );
  const handleChangeSalary = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) =>
      setEntity((prev) => ({ ...prev, salary: Number(e.target.value) })),
    []
  );
  const handleChangeEquipmentCosts = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) =>
      setEntity((prev) => ({
        ...prev,
        equipmentCosts: Number(e.target.value),
      })),
    []
  );
  const handleChangeOverheads = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) =>
      setEntity((prev) => ({
        ...prev,
        overheads: Number(e.target.value),
      })),
    []
  );
  const handleChangeEstimatedProfit = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) =>
      setEntity((prev) => ({
        ...prev,
        estimatedProfit: Number(e.target.value),
      })),
    []
  );

  useEffect(() => {
    setEntity(initialEntity);
    setIsEditMode(initialEntity.isEdit);
  }, [initialEntity]);

  return (
    <StyledTr onDoubleClick={handleEditRow}>
      <StyledLevelTd level={entity.level}>
        {!isEditMode && (
          <StyledIconGroup>
            <CreateIcon onClick={handleAddRow} />
            <StyledBucket>
              <Bucket onClick={handleDeleteRow} />
            </StyledBucket>
          </StyledIconGroup>
        )}
      </StyledLevelTd>
      {isEditMode ? (
        <>
          <StyledTd>
            <StyledInput
              onKeyUp={handleKeyUp}
              value={entity.rowName}
              onChange={handleChangeRowName}
            />
          </StyledTd>
          <StyledTd>
            <StyledInput
              type="number"
              onKeyUp={handleKeyUp}
              value={entity.salary}
              onChange={handleChangeSalary}
            />
          </StyledTd>
          <StyledTd>
            <StyledInput
              type="number"
              onKeyUp={handleKeyUp}
              value={entity.equipmentCosts}
              onChange={handleChangeEquipmentCosts}
            />
          </StyledTd>
          <StyledTd>
            <StyledInput
              type="number"
              onKeyUp={handleKeyUp}
              value={entity.overheads}
              onChange={handleChangeOverheads}
            />
          </StyledTd>
          <StyledTd>
            <StyledInput
              type="number"
              onKeyUp={handleKeyUp}
              value={entity.estimatedProfit}
              onChange={handleChangeEstimatedProfit}
            />
          </StyledTd>
        </>
      ) : (
        <>
          <StyledTd>{entity.rowName}</StyledTd>
          <StyledTd>{entity.salary}</StyledTd>
          <StyledTd>{entity.equipmentCosts}</StyledTd>
          <StyledTd>{entity.overheads}</StyledTd>
          <StyledTd>{entity.estimatedProfit}</StyledTd>
        </>
      )}
    </StyledTr>
  );
};
