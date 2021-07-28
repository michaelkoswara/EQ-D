import React from 'react';
import { Layout as AntLayout, Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import Title from 'antd/lib/typography/Title';
import messages from '../../utils/messages';


const { Header, Content, Footer } = AntLayout;

const Layout:React.FC = ({children}) => {
    const location = useLocation();
    
    return (
        <AntLayout className="layout">
            <Header data-testid="header">
                <Title style={{float:"left",color:"white",fontSize:"1.5rem",padding:"1rem 2rem 0 0"}}>{messages.appTitle}</Title>
                <Menu theme="dark" mode="horizontal" selectedKeys={[location.pathname]}>
                    <Menu.Item key="/">
                        <Link to="/">{`Home`}</Link>
                    </Menu.Item>
                    <Menu.Item key="/list">
                        <Link to="/list">{`List`}</Link>
                    </Menu.Item>
                </Menu>
            </Header>
            <Content style={{ padding: '2rem 50px' }}>
                {children}
            </Content>
            <Footer style={{ textAlign: 'center' }}>Michael Koswara ©{new Date().getFullYear()}</Footer>
      </AntLayout>
    );
};

export default Layout;