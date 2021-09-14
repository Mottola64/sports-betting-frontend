import React, { useState } from "react";
import { Table } from "react-bootstrap";
import teamPictures from "../data/pictures";

export const MLBTable = (props) => {
  const [group] = useState(props.group);
  const [teams] = useState(props.teams);
  
  return (
    <>
    <h3><strong>{group}</strong></h3>
    <table className="table-auto">
  <thead>
    <tr>
      <th>Team</th>
      <th>Wins</th>
      <th>Losses</th>
      <th>Win Percentage</th>
      <th>Last 5</th>
    </tr>
  </thead>
  <tbody>
          {teams.map((team) => (
            <tr key={team.team.name}>
              <td>
                <img
                  class="w-1/2 h-1/2 max-w-xs max-h-xs"
                  src={teamPictures[team.team.name]}

                  alt=""
                />
              </td>
              <td className="font-bold" key={team.team.name}>
                {team.team.name}
              </td>

              <td>{team.games.win.total}</td>
              <td>{team.games.lose.total}</td>
              <td>{team.games.win.percentage}</td>
              <td>{team.form}</td>
            </tr>
          ))}
        </tbody>
</table>
</>
  )
}
            
// export const MLBTable = (props) => {
//   const [group] = useState(props.group);
//   const [teams] = useState(props.teams);

//   return (
//     <>
//       <h3><strong>{group}</strong></h3>
//       <Table
//         striped
//         hover
//         style={{
//           display: "flexbox",
//           flexDirection: "row",
//           contentAlignment: "middle-center"
//         }}
//       >
//         <thead>
//           <tr>
//             <th style={{ padding: "0px" }}></th>
//             <th className="th">Team</th>
//             <th className="th">Wins</th>
//             <th className="th">Losses</th>
//             <th className="th">Win Percentage</th>
//             <th className="th">Last 5</th>
//           </tr>
//         </thead>
//         <tbody>
//           {teams.map((team) => (
//             <tr key={team.team.name}>
//               <td
//                 style={{
//                   margin: "0px",
//                   padding: "0px",
//                   verticalAlign: "top",
//                 }}
//               >
//                 <img
//                   src={teamPictures[team.team.name]}
//                   style={{
//                     width: "15vw",
//                     height: "15vh",
//                     margin: "0px",
//                     padding: "0px",
//                   }}
//                   alt=""
//                 />
//               </td>
//               <td style={{ marginTop: "25px" }} key={team.team.name}>
//                 <strong>{team.team.name}</strong>
//               </td>

//               <td>{team.games.win.total}</td>
//               <td>{team.games.lose.total}</td>
//               <td>{team.games.win.percentage}</td>
//               <td>{team.form}</td>
//             </tr>
//           ))}
//         </tbody>
//       </Table>
//     </>
//   );
// };
