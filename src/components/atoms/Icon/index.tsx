import React from "react";
interface IconProps {
  icon: JSX.Element;
  height: string;
  width: string;
}

const Icon: React.FC<IconProps> = ({ icon, height, width }) => {
  return <>{icon}</>;
};

export default Icon;
