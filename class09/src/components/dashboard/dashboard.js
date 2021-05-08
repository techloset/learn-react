import {useFetchDashboard} from "./customHooks/useFetchDashboard";

function Dashboard(params) {
const [students, setStatudents] = useFetchDashboard()

// start of views / user view
  return (<div>

        {students.map((student, index)=> {
            return <p> No.#{index}  - Name: {student.name}</p>
        })}

         </div>);
}
// end of views
export default Dashboard;
