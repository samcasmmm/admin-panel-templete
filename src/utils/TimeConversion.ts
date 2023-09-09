export function timestampToCustomFormat(timestamp: number | string) {
  const date = new Date(timestamp);
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  const currentDate = new Date();
  const isToday =
    currentDate.getDate() === date.getDate() &&
    currentDate.getMonth() === date.getMonth() &&
    currentDate.getFullYear() === date.getFullYear();
  let formattedDate = '';
  if (isToday) {
    formattedDate = `Today ${hours}:${minutes}:${seconds} ${day}/${month}/${year}`;
  } else {
    formattedDate = `${hours}:${minutes}:${seconds} ${day}/${month}/${year}`;
  }
  return formattedDate;
}
