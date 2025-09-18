import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

const data = [
  { month: "Jan", users: 100 },
  { month: "Feb", users: 300 },
  { month: "Mar", users: 500 },
  { month: "Apr", users: 700 },
];

export default function Chart() {
  return (
    <LineChart width={500} height={300} data={data}>
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="users" stroke="#8884d8" />
    </LineChart>
  );
}
