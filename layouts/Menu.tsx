import React from 'react';
import { Menu, Icon } from 'antd';

const SubMenu = Menu.SubMenu;

const CustomMenu: React.FunctionComponent<{}> = () => (
  <Menu
    // onClick={this.handleClick}
    style={{ textAlign: 'left' }}
    // defaultSelectedKeys={key}
    defaultOpenKeys={['sub1', 'sub2', 'sub3']}
    mode="inline"
  >
    <SubMenu
      key="sub1"
      title={
        <span>
          <Icon type="shop" />
          <span>店铺管理</span>
        </span>
      }
    >
      <Menu.Item key="1">店铺信息</Menu.Item>
      <Menu.Item key="2">公告管理</Menu.Item>
    </SubMenu>
    <SubMenu
      key="sub2"
      title={
        <span>
          <Icon type="mail" />
          <span>商品管理</span>
        </span>
      }
    >
      <Menu.Item key="3">分类管理</Menu.Item>
      <Menu.Item key="4">商品管理</Menu.Item>
    </SubMenu>
    <SubMenu
      key="sub3"
      title={
        <span>
          <Icon type="appstore" />
          <span>订单管理</span>
        </span>
      }
    >
      <Menu.Item key="5">订单列表</Menu.Item>
    </SubMenu>
    <SubMenu
      key="sub4"
      title={
        <span>
          <Icon type="setting" />
          <span>供应链管理</span>
        </span>
      }
    >
      <Menu.Item key="5">骑手管理</Menu.Item>
    </SubMenu>
  </Menu>
);

export default CustomMenu;
