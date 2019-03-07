```js
// Date objects in ECMAScript ignore leap seconds. It is assumed that there are
// exactly 86,400,000 milliseconds per day, which simplifies adding and
// subtracting days or weeks from a given date.

// Parse date from string
new Date("2020-12-31T14:30:59.000Z")

// Convert date to string
date.toISOString()

// Convert date to the number of milliseconds since Jan 1, 1970
date.getTime()

// Create date from the number of milliseconds since Jan 1, 1970
new Date(numOfMillis)

// Create date from year, month, and day. Note: the argument month is 0-based.
new Date(Date.UTC(2020, 0, 31))

// Get year
date.getUTCFullYear()

// Get month: 0 - January, 11 - December
date.getUTCMonth()

// Get day of the month, 1 to 31
date.getUTCDate()

// Get day of the week: 0 - Sunday, 6 - Saturday
date.getUTCDay()

// Add days with correct wrap-around to the previous/next month
new Date(Date.UTC(2019, 0,  1 - 1)) // => Dec 31, 2018
new Date(Date.UTC(2019, 1, 28 + 1)) // => Mar  1, 2019
new Date(Date.UTC(2020, 1, 28 + 1)) // => Feb 29, 2020

// Add days when working directly with milliseconds
const millisPerDay = 24 * 60 * 60 * 1000
Date.UTC(2019, 1, 28) + millisPerDay

// Compare two dates
date1.getTime() === date2.getTime()
date1.getTime()  <  date2.getTime()
```
