export interface Entity {
  id: string;
  equipmentCosts: number;
  estimatedProfit: number;
  machineOperatorSalary: number;
  mainCosts: number;
  materials: number;
  mimExploitation: number;
  overheads: number;
  rowName: string;
  salary: number;
  supportCosts: number;
  total: number;
  child: Entity[];
}

export interface EntityResponce {
  changed: Entity[];
  current: Entity;
}

export interface CreateEntity extends Omit<Entity, "id" | "total"> {
  parentId: string | null;
}

export interface UpdateEntity extends Omit<Entity, "id" | "total"> {}

export interface ExtendedEntity extends Entity {
  level: number;
  isEdit: boolean;
  isNew: boolean;
  parentId: string | null;
}
