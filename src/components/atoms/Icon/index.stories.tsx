import Icon from ".";
import { AccessTime, KeyboardArrowDownOutlined } from "@mui/icons-material";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Atoms/Icon",
  component: Icon,
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const AccessTimeIcon = Template.bind({});
AccessTimeIcon.args = {
  icon: <AccessTime />,
};

export const KeyboardArrowDownIcon = Template.bind({});
KeyboardArrowDownIcon.args = {
  icon: <KeyboardArrowDownOutlined />,
};
