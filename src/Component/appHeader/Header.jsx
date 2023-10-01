import { Badge, Image, Space, Typography } from "antd";
import React from "react";
import { MailOutlined, BellFilled } from "@ant-design/icons";

const Header = () => {
  return (
    <div className="AppHeader">
      <Image
        src="https://pbs.twimg.com/media/D7TItJJW0AUFEvO.jpg"
        width={40}
      ></Image>

      <Typography.Title>DashBoard</Typography.Title>
      <Space>
        <Badge count={4}>
          <MailOutlined style={{ fontSize: 24 }} />
        </Badge>
        <Badge count={5}>
          <BellFilled style={{ fontSize: 24 }} />
        </Badge>
      </Space>
    </div>
  );
};

export default Header;
