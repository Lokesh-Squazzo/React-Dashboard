import Navbar from "./components/Navbar";
import DashboardCard from "./components/DashboardCard";
import Chart from "./components/Chart";
import {Sddd} from "./components/Sidebar";

export default function App() {
  return (
    <div className="flex">
      <Sddd />
      <div className="flex-1">
        <Navbar />
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-6">Welcome to Dashboard</h1>

          {/* Dashboard Cards */}
          <div className="grid grid-cols-3 gap-6 mt-6">
            <DashboardCard title="Users" value="120" />
            <DashboardCard title="Sales" value="₹50,000" />
            <DashboardCard title="Orders" value="320" />
          </div>

          {/* Chart Section */}
          <div className="mt-8">
            <h2 className="text-xl font-bold mb-4">User Growth</h2>
            <Chart />
          </div>
          <table className="w-full border mt-6">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-2 border">ID</th>
                <th className="p-2 border">Name</th>
                <th className="p-2 border">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 border">1</td>
                <td className="p-2 border">Lokesh</td>
                <td className="p-2 border">Active</td>
              </tr>
              <tr>
                <td className="p-2 border">2</td>
                <td className="p-2 border">Sanjeevni</td>
                <td className="p-2 border">Inactive</td>
              </tr>
            </tbody>
          </table>
          {/* Hello everyone we are learning github */}
        </div>
      </div>
    </div>
  );
}
