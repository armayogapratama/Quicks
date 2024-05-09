function separateDate(date) {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const formatDate = `${year}/${month}/${day}`;
  return formatDate;
}

module.exports = separateDate;
