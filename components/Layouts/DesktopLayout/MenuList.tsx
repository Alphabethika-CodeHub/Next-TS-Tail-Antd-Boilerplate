import { Menu } from "antd";
import { useRouter } from "next/router";

const MenuList = () => {
  const router = useRouter();
  return (
    <Menu mode="inline">
      <Menu.Item onClick={() => router.push("/home")} key="1">
        Dashboard
      </Menu.Item>
      <Menu.Item onClick={() => router.push("/about")} key="2">
        Option 2
      </Menu.Item>
      <Menu.Item onClick={() => router.push("/about")} key="3">
        Option 3
      </Menu.Item>
      <Menu.Item onClick={() => router.push("/about")} key="4">
        Option 4
      </Menu.Item>
      {/* <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
            <Menu.Item key="1">Option 1</Menu.Item>
            <Menu.Item key="2">Option 2</Menu.Item>
            <Menu.Item key="3">Option 3</Menu.Item>
            <Menu.Item key="4">Option 4</Menu.Item>
          </SubMenu> */}
    </Menu>
  );
};

export default MenuList;
