import React, { Component, Fragment } from 'react';
// import Link from 'next/link';
import Head from 'next/head';
import { Layout, Divider, Breadcrumb } from 'antd';

import Menu from './Menu';

const theme = 'light';

const { Header, Footer, Sider, Content } = Layout;

type Props = {
  title?: string;
};

const CustomLayout: React.FunctionComponent<Props> = ({
  children,
  title = 'This is the default title',
}) => (
  <Fragment>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Layout>
      <Sider theme={theme}>
        <div>
          <i className="iconfont icon-logo icon-size-logo" />
          <p>I am a Logo</p>
        </div>
        <Divider />
        <Menu />
      </Sider>
      <Layout>
        <Header>{/* <NovaHeader /> */}</Header>
        <Content>{children}</Content>
        <Footer>{/* <NovaFooter /> */}</Footer>
      </Layout>
    </Layout>
  </Fragment>
);

export default CustomLayout;
