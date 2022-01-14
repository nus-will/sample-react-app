import { useSelector } from 'react-redux'
import { Table, Space } from 'antd'
import './home.css'

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Created By',
    dataIndex: 'createdBy',
    key: 'createdBy',
  },
  {
    title: 'Created Date',
    dataIndex: 'createdDate',
    key: 'createdDate',
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <Space size="middle">
        <a>View details</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

function Home() {
  let projects = useSelector(state => state.projects)

  return (
    <div id="home-projects">
      <Table columns={columns} dataSource={projects} />
    </div>
  );
}

export default Home;
