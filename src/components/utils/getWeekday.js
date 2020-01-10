export function getWeekday(dayInd) {
  if (dayInd === 0) return "Today";
  if (dayInd === 1) return "Tomorrow";

  const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  const todayFullFormat = new Date();
  const today = todayFullFormat.getDay();

  const indexDay = today + dayInd <= 6 ? today + dayInd : today + dayInd - 7;

  return weekDays[indexDay];
}
