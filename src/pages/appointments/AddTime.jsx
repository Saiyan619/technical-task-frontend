import React, { useState } from "react";

const AddTime = () => {
  const [timeSlots, setTimeSlots] = useState([
    {
      startTime: { hour: "", minute: "", period: "AM" },
      endTime: { hour: "", minute: "", period: "AM" },
      days: [],
    },
  ]);

  const daysOfWeek = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"];

  // Add a new time slot
  const addTimeSlot = () => {
    setTimeSlots([
      ...timeSlots,
      {
        startTime: { hour: "", minute: "", period: "AM" },
        endTime: { hour: "", minute: "", period: "AM" },
        days: [],
      },
    ]);
  };

  // Remove a specific time slot
  const removeTimeSlot = (index) => {
    const updatedSlots = timeSlots.filter((_, i) => i !== index);
    setTimeSlots(updatedSlots);
  };

  // Handle time input change (hour or minute)
  const handleTimeInputChange = (index, type, field, value) => {
    const updatedSlots = [...timeSlots];
    if (field === "hour" && (value < 1 || value > 12)) return; // Restrict hours to 1-12
    if (field === "minute" && (value < 0 || value > 59)) return; // Restrict minutes to 0-59
    updatedSlots[index][type][field] = value;
    setTimeSlots(updatedSlots);
  };

  // Toggle AM/PM
  const togglePeriod = (index, type) => {
    const updatedSlots = [...timeSlots];
    updatedSlots[index][type].period =
      updatedSlots[index][type].period === "AM" ? "PM" : "AM";
    setTimeSlots(updatedSlots);
  };

  // Handle day selection
  const handleDayToggle = (index, day) => {
    const updatedSlots = [...timeSlots];
    const currentDays = updatedSlots[index].days;

    if (currentDays.includes(day)) {
      updatedSlots[index].days = currentDays.filter((d) => d !== day);
    } else {
      updatedSlots[index].days = [...currentDays, day];
    }

    setTimeSlots(updatedSlots);
  };

  return (
    <div>
      <h3 className="text-lg font-bold">Time Slots</h3>
      {timeSlots.map((slot, index) => (
        <div key={index} className="mb-6 border p-4 rounded-md bg-base-200">
          {/* Start Time */}
          <div className="mb-4 flex items-center justify-between">
            <span className="label-text block mb-2">Start Time</span>
            <div className="flex gap-2 items-center">
              {/* Hour Input */}
              <input
                type="number"
                value={slot.startTime.hour}
                onChange={(e) =>
                  handleTimeInputChange(
                    index,
                    "startTime",
                    "hour",
                    e.target.value
                  )
                }
                placeholder="Hour"
                className="input input-bordered w-16"
                min="1"
                max="12"
              />
              :{/* Minute Input */}
              <input
                type="number"
                value={slot.startTime.minute}
                onChange={(e) =>
                  handleTimeInputChange(
                    index,
                    "startTime",
                    "minute",
                    e.target.value
                  )
                }
                placeholder="Minute"
                className="input input-bordered w-16"
                min="0"
                max="59"
              />
              {/* AM/PM Toggle */}
              <button
                type="button"
                onClick={() => togglePeriod(index, "startTime")}
                className="btn btn-outline"
              >
                {slot.startTime.period}
              </button>
            </div>
          </div>

          {/* End Time */}
          <div className="mb-4 flex items-center justify-between">
            <span className="label-text block mb-2">End Time</span>
            <div className="flex gap-2 items-center">
              {/* Hour Input */}
              <input
                type="number"
                value={slot.endTime.hour}
                onChange={(e) =>
                  handleTimeInputChange(
                    index,
                    "endTime",
                    "hour",
                    e.target.value
                  )
                }
                placeholder="Hour"
                className="input input-bordered w-16"
                min="1"
                max="12"
              />
              :{/* Minute Input */}
              <input
                type="number"
                value={slot.endTime.minute}
                onChange={(e) =>
                  handleTimeInputChange(
                    index,
                    "endTime",
                    "minute",
                    e.target.value
                  )
                }
                placeholder="Minute"
                className="input input-bordered w-16"
                min="0"
                max="59"
              />
              {/* AM/PM Toggle */}
              <button
                type="button"
                onClick={() => togglePeriod(index, "endTime")}
                className="btn btn-outline"
              >
                {slot.endTime.period}
              </button>
            </div>
          </div>

          {/* Applicable Days */}
          <div className="mb-4">
            <span className="label-text block mb-2">Applicable for Days</span>
            <div className="flex flex-wrap gap-2">
              {daysOfWeek.map((day) => (
                <button
                  key={day}
                  type="button"
                  className={`btn btn-sm ${
                    slot.days.includes(day) ? "btn-primary" : "btn-outline"
                  }`}
                  onClick={() => handleDayToggle(index, day)}
                >
                  {day}
                </button>
              ))}
            </div>
          </div>

          {/* Remove Time Slot Button */}
          <button
            type="button"
            onClick={() => removeTimeSlot(index)}
            className="btn btn-link text-red-600 mt-4"
          >
            Remove Time Slot
          </button>
        </div>
      ))}

      {/* Add Time Slot Button */}
      <div className="flex items-center justify-between">
        <button type="button" onClick={addTimeSlot} className="btn btn-link">
          Add Another Time Slot
        </button>

        <button className="btn btn-link">Clear</button>
      </div>
    </div>
  );
};

export default AddTime;
