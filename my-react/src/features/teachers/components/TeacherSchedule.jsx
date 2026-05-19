const TeacherSchedule = ({
  schedules = [],
}) => {
  if (!schedules.length) {
    return (
      <p className="text-gray-500">
        No schedules available
      </p>
    );
  }

  return (
    <div className="space-y-3">
      {schedules.map((schedule, index) => (
        <div
          key={index}
          className="border rounded-lg p-4 flex justify-between"
        >
          <div>
            <h4 className="font-semibold">
              {schedule.subject}
            </h4>

            <p className="text-sm text-gray-500">
              {schedule.room}
            </p>
          </div>

          <div className="text-sm">
            {schedule.day} |{" "}
            {schedule.time}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TeacherSchedule;