const ConvertTimestamp = ({ timestamp, time }) => {
  let currentDate, finalDate;

  if (timestamp) {
    currentDate = new Date(timestamp);
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();

    finalDate = day + '. ' + month + '. ' + year;

    if (time) {
      finalDate += ' ' + hours + ':' + minutes;
    }
  }

  return finalDate.toString();
};

export default ConvertTimestamp;
