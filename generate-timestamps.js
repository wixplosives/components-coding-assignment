const startDate = new Date('2019-01-06T00:00:00.000Z');
const timeSpanInWeeks = 52;

const millisInDay = 24 * 60 * 60 * 1000;
const timeSpanInMillis = timeSpanInWeeks * 7 * millisInDay;

const randomInterval = () => 
  Math.floor((Math.random() ** 5) * 3 * millisInDay);

const timestamps = [];
for (let i = randomInterval(); i < timeSpanInMillis; i += randomInterval()) {
  const date = new Date(startDate.getTime() + i);
  const dayOfWeek = date.getUTCDay();
  if (dayOfWeek !== 0 && dayOfWeek !== 6) {
    timestamps.push(date.toISOString());
  }
}

console.log(JSON.stringify(timestamps, null, 2));
