import { Breadcrumb } from "antd";
import DefaultLayout from "../components/Layouts/DefaultLayout";

const Home = () => {
  return (
    <>
      <Breadcrumb style={{ margin: "16px 0" }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <div className="site-layout-content">
        <p className="text-center">Content</p>
      </div>
    </>
  );
};

// Home.getLayout = function Layout(page: any) {
//   return <DefaultLayout>{page}</DefaultLayout>;
// };

export default Home;
