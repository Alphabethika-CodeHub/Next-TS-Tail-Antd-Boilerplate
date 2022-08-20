import DesktopLayout from "./DesktopLayout/DesktopLayout";
import TailwindLayout from "./TailwindLayout/TailwindLayout";

const DefaultLayout = (props: any) => {
  if (props.type === "tailwind") {
    return <TailwindLayout {...props} />;
  } else {
    return <DesktopLayout {...props} />;
  }
};

export default DefaultLayout;
