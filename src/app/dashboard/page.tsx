import { Props } from "../providers";
import AddProduct from "./add-product/page";
import DashboardLayout from "./layout";

const Dashboard = ({ children }: Props) => {
  return (
    <>
      <DashboardLayout>{children}</DashboardLayout>
    </>
  );
};

export default Dashboard;
