import { Entity, ExtendedEntity } from "types/entity";

export const defaultEntity = {
  id: "",
  total: 0,
  rowName: "",
  salary: 0,
  equipmentCosts: 0,
  overheads: 0,
  estimatedProfit: 0,
  parentId: null,
  machineOperatorSalary: 0,
  mainCosts: 0,
  materials: 0,
  mimExploitation: 0,
  supportCosts: 0,
  child: [],
  isEdit: true,
  isNew: true,
  level: 1,
};

export function getFlatList(
  list: Entity[],
  level: number,
  parentId: string | null
): ExtendedEntity[] {
  level++;
  return list.reduce((acc, cur) => {
    const { child, id } = cur;
    let newArr = acc;
    newArr.push({
      ...cur,
      level,
      parentId,
      isEdit: false,
      isNew: false,
    });
    if (child && child.length > 0) {
      newArr = newArr.concat(getFlatList(child, level, id));
    }
    return newArr;
  }, [] as ExtendedEntity[]);
}

export function addRow(
  list: ExtendedEntity[],
  parentId: string,
  entity: Entity
): ExtendedEntity[] {
  const index = list.findIndex((item) => item.id === parentId);
  const level = list[index]?.level + 1;
  const newEntity = {
    ...entity,
    level,
    parentId,
    isEdit: true,
    isNew: true,
    hasSibling: false,
  };
  return [...list.slice(0, index + 1), newEntity, ...list.slice(index + 1)];
}

export function deleteRow(
  list: ExtendedEntity[],
  id: string
): ExtendedEntity[] {
  const removeIds = list.reduce(
    (acc, cur) => {
      const isMatchId = acc.includes(cur.id);
      const isMatchParentId = cur.parentId && acc.includes(cur.parentId);
      if (isMatchId || isMatchParentId) {
        acc.push(cur.id);
      }
      return acc;
    },
    [id]
  );
  return list.filter((item) => !removeIds.includes(item.id));
}
