import moment from "moment";

export function dateFromNow(date: string) {
  const fromNow = moment(date, "YYYYMMDD").fromNow();

  return fromNow;
}
