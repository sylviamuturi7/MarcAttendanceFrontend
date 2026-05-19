import { LineChart, Line, XAxis, YAxis } from "recharts";
import { useRef, useEffect, useState } from "react";

function AttendanceChart({ data, title = "Attendance Trends", height = 250 }) {
  const containerRef = useRef(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (containerRef.current) setWidth(containerRef.current.offsetWidth);
  }, []);

  if (!data || data.length === 0) 
    return <p>No data</p>;

  return (
    <div className="attendance-chart" ref={containerRef}>
      <h3>{title}</h3>
      <LineChart width={width} height={height} data={data}>
        <XAxis dataKey="week" />
        <YAxis />
        <Line type="monotone" dataKey="attendance" stroke="#3d6b4f" />
      </LineChart>
    </div>
  );
}

export default AttendanceChart;
