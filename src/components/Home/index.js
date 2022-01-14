import { useSelector } from 'react-redux'
import { Table, Space } from 'antd'
import './home.css'
import { deleteProject } from '../../redux/reducers/projects'
import { useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom";

function Home() {
  let projects = useSelector(state => state.projects)
  let navigate = useNavigate();
  const dispatch = useDispatch()

  const onDelete = (projectId) => {
    dispatch(deleteProject(projectId))
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
        <Space size="middle">
          <a onClick={() => onViewDetails(record.id)} >View detail</a>
          <a onClick={() => onDelete(record.id)} >Delete</a>
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
