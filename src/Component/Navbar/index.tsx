"use client"
import { Menu, Input, Badge, Button } from 'antd';
import { SearchOutlined, HeartOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import styles from './styles.module.css';

const { SubMenu } = Menu;

const Header: React.FC = () => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.logo}>
        <span>Estore</span>
      </div>
      <Menu mode="horizontal" className={styles.menu}>
        <Menu.Item key="home">Home</Menu.Item>
        <Menu.Item key="category">Category</Menu.Item>
        <Menu.Item key="latest">
          <Badge count="HOT" style={{ backgroundColor: '#f5222d' }}>
            Latest
          </Badge>
        </Menu.Item>
        <Menu.Item key="blog">Blog</Menu.Item>
        <Menu.Item key="pages">Pages</Menu.Item>
        <Menu.Item key="contact">Contact</Menu.Item>
      </Menu>
      <div className={styles.search}>
        <Input
          placeholder="Search products"
          prefix={<SearchOutlined />}
          className={styles.searchInput}
        />
      </div>
      <div className={styles.icons}>
        <Badge count={2}>
          <HeartOutlined className={styles.icon} />
        </Badge>
        <Badge count={2}>
          <ShoppingCartOutlined className={styles.icon} />
        </Badge>
      </div>
      <Button type="primary" className={styles.signInButton}>
        Sign In
      </Button>
    </div>
  );
};

export default Header;
