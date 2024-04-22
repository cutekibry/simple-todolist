export const searchTypeEnum = Object.freeze({
  ALL: 0,
  DONE: 1,
  UNDONE: 2,
});
export const searchTypeNames = Object.freeze({
  [searchTypeEnum.ALL]: "全选",
  [searchTypeEnum.DONE]: "仅已完成",
  [searchTypeEnum.UNDONE]: "仅未完成"
})