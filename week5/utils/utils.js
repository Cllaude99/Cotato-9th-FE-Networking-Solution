export function makeImagePath(id, format = null) {
  return `https://image.tmdb.org/t/p/${format ? format : 'original'}/${id}`;
}

export function formatNumber(number) {
  if (!number || number === 0) return '0';

  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(number);
}
