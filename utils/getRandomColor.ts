const colors = [
  "#ffd7d5",
  "#ffe9d6",
  "#ffffd1",
  "#d6ffda",
  "#d7eeff",
  "#dad6ff",
  "#ffd6e8",
  "#f5f5dc",
  "#f4e4e4",
  "#e4e6f4",
];

export const getRandomColor = () =>
  colors[Math.floor(Math.random() * colors.length)];
