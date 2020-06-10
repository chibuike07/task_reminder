export const timeTo12HrFormat = time => {
  // Take a time in 24 hour format and format it in 12 hour format
  let time_part_array = time.split(":");
  let ampm = "AM";

  if (time_part_array[0] >= 12) {
    ampm = "PM";
  }

  if (time_part_array[0] > 12) {
    time_part_array[0] = time_part_array[0] - 12;
  }

  let formatted_time =
    time_part_array[0] +
    ":" +
    time_part_array[1] +
    ":" +
    time_part_array[2] +
    " " +
    ampm;
  return formatted_time;
};
