const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */

function getSeason(date) {
  if (arguments.length === 0) {
    return "Unable to determine the time of year!";
  }
  if (
    !(date instanceof Date) ||
    Object.getOwnPropertyNames(date).length > 0 ||
    Object.prototype.toString.call(date) !== "[object Date]"
  ) {
    throw new Error("Invalid date!");
  }

  let Month = {
    Jan: "winter",
    Feb: "winter",
    Mar: "spring",
    Apr: "spring",
    May: "spring",
    Jun: "summer",
    Jul: "summer",
    Aug: "summer",
    Sep: "autumn",
    Oct: "autumn",
    Nov: "autumn",
    Dec: "winter",
  };
  const monthName = date.toLocaleString("en-US", { month: "short" });
  return Month[monthName];
}

module.exports = {
  getSeason,
};

