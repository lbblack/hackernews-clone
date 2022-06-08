
const Util = (date) => {
  var seconds = Math.floor(((new Date().getTime()/1000) - date));

  let interval = seconds / 31536000;

  if (interval > 1) {
    return Math.floor(interval) + " years";
  } else {
  	return Math.floor(interval) + " year";
  }

  interval = seconds / 2592000;
  if (interval > 1) {
    return Math.floor(interval) + " months";
  } else {
  	return Math.floor(interval) + " month";
  }

  interval = seconds / 86400;
  if (interval >= 1) {
    return Math.floor(interval) + " days";
  } else {
  	return Math.floor(interval) + " day";
  }

  interval = seconds / 3600;
  if (interval >= 1) {
    return Math.floor(interval) + " hours";
  } else {
  	return Math.floor(interval) + " hour";
  }

  interval = seconds / 60;
  if (interval >= 1) {
    return Math.floor(interval) + " minutes";
  } else {
  	return Math.floor(interval) + " minute";
  }

  return Math.floor(seconds) + " seconds";
}

export default Util;