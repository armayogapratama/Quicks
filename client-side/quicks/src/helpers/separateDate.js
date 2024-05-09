export default function separateDate(date) {
  const formatter = new Intl.DateTimeFormat("id-ID", { dateStyle: "short" });
  const formattedDate = formatter.format(date);

  return formattedDate;
}

export function dateFormat(date) {
  const year = date.getFullYear();
  let month = (1 + date.getMonth()).toString().padStart(2, "0");
  let day = date.getDate().toString().padStart(2, "0");

  return `${year}-${month}-${day}`;
}

export function countDown(date) {
  const differenceInTime = new Date(date) - new Date();

  const differenceInDay = Math.ceil(differenceInTime / (1000 * 60 * 60 * 24));

  const countDownMessage = `${differenceInDay} day${
    differenceInDay !== 1 ? "s" : ""
  } left`;

  return countDownMessage;
}
