const WORKSPACE_COLORS = [
  '#FF6B6B',
  '#38B2AC',
  '#3182CE',
  '#48BB78',
  '#ECC94B',
  '#D53F8C',
  '#805AD5',
  '#3182CE',
  '#DD6B20',
  '#319795',
];

export const getWorkspaceColor = (name: string): string => {
  const charSum = name
    .split('')
    .reduce((sum, char) => sum + char.charCodeAt(0), 0);
  return WORKSPACE_COLORS[charSum % WORKSPACE_COLORS.length];
};
