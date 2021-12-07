export const formatDate = (dateString) =>
  new Date(dateString).toLocaleString([], {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });

export const formatSum = (sum) =>
  sum === 0 ? "-" : `${sum.toLocaleString()} ₽`;

export const formatCount = (count) =>
  count === 0 ? "-" : count.toLocaleString();

export const capitalize = (string) => string[0].toUpperCase() + string.slice(1);

export const formatDateFilterValue = (string) => {
  const formatString = string.split(".");
  return new Date(formatString[2], formatString[1] - 1, formatString[0]);
};
