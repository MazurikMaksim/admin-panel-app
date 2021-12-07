import AirDatepicker from "air-datepicker";
import "air-datepicker/air-datepicker.css";

export const datePicker = (id, minDate) => {
  new AirDatepicker(id, {
    maxDate: Date.now(),
    minDate: minDate,
  });
};
