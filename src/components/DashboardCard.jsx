export default function DashboardCard({ title, value }) {
  return (
    <div className="bg-white shadow-md p-6 rounded-lg">
      <h3 className="text-gray-500">{title}</h3>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
}
