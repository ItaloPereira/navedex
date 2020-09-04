import * as moment from 'moment';
import 'moment-precise-range-plugin';

export const getAge = (dateString) => {
  const today = new Date();
  const birthDate = new Date(dateString);
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age -= age;
  }
  return age;
}

const formatDateString = (years, months) => {
  const ptBrYears = years > 1 ? 'anos' : 'ano';
  const ptBrMonths = months > 1 ? 'meses' : 'mês';
  let string;

  if (years && !months) {
    string = `${years} ${ptBrYears}`
  } else if (!years && months) {
    string = `${months} ${ptBrMonths}`
  } else {
    string = `${years} ${ptBrYears} e ${months} ${ptBrMonths}`;
  }

  return string;
}

export const getDateRange = (date) => {
  const today = new Date().toString();
  const diff = moment.preciseDiff(today, date, true);
  return formatDateString(diff.years, diff.months);
}

export default getAge;