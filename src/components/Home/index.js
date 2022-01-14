import { useSelector } from 'react-redux'
import { Table, Space } from 'antd'
import { DeleteOutlined, LineChartOutlined } from '@ant-design/icons'
import './home.css'
import { deleteProject } from '../../redux/reducers/projects'
import { useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom";

function Home() {
  let projects = useSelector(state => state.projects)
  let navigate = useNavigate();
  const dispatch = useDispatch()

  const onDelete = (projectId) => {
    let result = window.confirm("Are you sure?")
    result && dispatch(deleteProject(projectId))
  }

  const onViewDetails = (projectId) => {
    navigate("/detail/" + projectId);
  }

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
        <Space size="middle" className='actions'>
          <LineChartOutlined onClick={() => onViewDetails(record.id)} />
          <DeleteOutlined onClick={() => onDelete(record.id)} />
        </Space>
      ),
    },
  ];

  return (
    <div id="home-projects">
      <Table columns={columns} dataSource={projects} />
    </div>
  );
}

export default Home;
