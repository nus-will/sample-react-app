import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend
} from 'recharts'
import {
  useParams
} from "react-router-dom"
import { useSelector } from 'react-redux'
import './detail.css'

function Detail() {
  let { id } = useParams();
  let nValues = useSelector(
    state => state.projects.find(prj => prj.id == id).nValues
  )

  return (
    <div id="project-detail">
        <LineChart
          width={500}
          height={300}
          data={nValues}
        >
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="budget"/>
        </LineChart>
    </div>
  );
}

export default Detail;
