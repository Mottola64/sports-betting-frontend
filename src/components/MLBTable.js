import React, { useState } from "react";
import { Table } from "react-bootstrap";
import teamPictures from "../data/pictures";

export const MLBTable = (props) => {
  const [group] = useState(props.group);
  const [teams] = useState(props.teams);
  
  return (
  
    <div className="flex flex-col">
    <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
    <h3><strong>{group}</strong></h3>
    <table className="min-w-full divide-y divide-gray-200">
  <thead className="min-w-full divide-y divide-gray-200">
    <tr>
      <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
      <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Team</th>
      <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Wins</th>
      <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Losses</th>
      <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Win Percentage</th>
      <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last 5</th>
    </tr>
  </thead>
  <tbody class="bg-white divide-y divide-gray-200">
          {teams.map((team) => (
            <tr key={team.team.name}>
              <td class="px-6 py-4 whitespace-nowrap">
                <div className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                      <div className="flex-shrink-0 h-20  w-20">

                      <img
                        className="h-20 w-20"
                        src={teamPictures[team.team.name]}

                        alt=""
                      />
                      </div>
                      </div>
                  
                </div>
                
              </td>
              <td className="px-6 py-4 whitespace-nowrap" key={team.team.name}>
                {team.team.name}
              </td>

              <td className="px-6 py-4 whitespace-nowrap" >{team.games.win.total}</td>
              <td className="px-6 py-4 whitespace-nowrap" >{team.games.lose.total}</td>
              <td className="px-6 py-4 whitespace-nowrap" >{team.games.win.percentage}</td>
              <td className="px-6 py-4 whitespace-nowrap" >{team.form}</td>
            </tr>
          ))}
        </tbody>
</table>
</div>
</div>
</div>
</div>

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
