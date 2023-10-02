import { CreateEntity, UpdateEntity, ExtendedEntity } from "types/entity";

export interface TableRowProps {
  initialEntity: ExtendedEntity;
  onAddRow?: (parentId: string) => void;
  onDeleteRow?: (rID: string) => void;
  onCreateRow?: (entity: CreateEntity) => void;
  onUpdateRow?: (id: string, entity: UpdateEntity) => void;
}

export interface StyledLevelProps {
  level: number;
  hasChild: boolean;
  hasParent: boolean;
  hasSibling: boolean;
}
