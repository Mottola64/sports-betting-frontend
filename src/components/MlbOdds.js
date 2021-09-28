import React from "react";
import Moment from "react-moment";
import teamPictures from "../data/pictures";
import Collapse from "./Collapse";

const MlbOdds = (props) => {
  return (
    <div class="mx-auto">
      <h1>MLB Odds</h1>
      <div class="gap-x-2 sm:grid-cols-1 grid md:grid-cols-3 lg:grid-cols-4">
        {props.mlbodds &&
          props.mlbodds.map((mlbGame) => {
            return (
              <div class="sm:w-8/10 p-4 md:w-8/10 p-4 lg:w-11/12 p-4 border-2 border-green-600 mb-1 rounded overflow-hidden shadow-lg" key={mlbGame.teams[0]}>
                <div>
                  <header class="text-center font-extrabold" width="95%" margin="10px">
                    
                      {mlbGame.teams[0]} @ {mlbGame.teams[1]}
                  </header>
                  <br></br>
                  <div className="text-center mb-1">
                    
                      <Moment unix format="MM/DD/YY  LT">
                        {mlbGame.commence_time}
                      </Moment>
                  
                  </div>
                 <div class="flex justify-center items-center">
                    <img class=""
                      src={teamPictures[mlbGame.teams[0]]}
                      style={{
                        width: "30%",
                        height: "30%",
                      }}
                      alt="team logo"
                    />
                    {" @ "}
                    <img
                      src={teamPictures[mlbGame.teams[1]]}
                      style={{
                        width: "30%",
                        height: "30%",
                      }}
                      alt="team logo"
                    />
                  </div>  
                    <Collapse game={mlbGame}/>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default MlbOdds;


// import React from "react";
// import {
//   Button,
//   Card,
//   CardHeader,
//   CardImg,
//   CardColumns,
//   CardSubtitle,
//   CardBody,
//   Container,
//   UncontrolledCollapse,
// } from "reactstrap";
// import Moment from "react-moment";
// import teamPictures from "../data/pictures";

// const MlbOdds = (props) => {
//   return (
//     <Container style={{marginTop: "20px"}}fluid>
//       <h1>MLB Odds</h1>
//       <CardColumns>
//         {props.mlbodds &&
//           props.mlbodds.map((mlbGame) => {
//             return (
//               <Card key={mlbGame.teams[0]}>
//                 <CardBody>
//                   {/* <CardHeader
//                     className="text-center"
//                     width="100%"
//                     margin="10px"
//                   > */}
//                   <CardHeader as="h5">
//                     <strong>
//                       {mlbGame.teams[0]} @ {mlbGame.teams[1]}
//                     </strong>
//                   </CardHeader>
//                   <br></br>
//                   <CardSubtitle>
//                     <strong>
//                       <Moment unix format="MM/DD/YY">
//                         {mlbGame.commence_time}
//                       </Moment>
//                     </strong>
//                     <br></br>
//                     <strong>
//                       <Moment unix format="LT">
//                         {mlbGame.commence_time}
//                       </Moment>{" "}
//                     </strong>
//                   </CardSubtitle>
//                   <br></br>
//                   <CardSubtitle>
//                     <CardImg
//                       src={teamPictures[mlbGame.teams[0]]}
//                       style={{
//                         width: "30%",
//                         height: "30%",
//                       }}
//                       alt="Card image cap"
//                     />
//                     {" @ "}
//                     <CardImg
//                       src={teamPictures[mlbGame.teams[1]]}
//                       style={{
//                         width: "30%",
//                         height: "30%",
//                       }}
//                       alt="Card image cap"
//                     />
//                   </CardSubtitle>
//                   <Button id={mlbGame.home_team.replaceAll(" ", "_")}>
//                     Odds
//                   </Button>
//                   <UncontrolledCollapse
//                     toggler={`${mlbGame.home_team.replaceAll(" ", "_")}`}
//                     style={{ marginTop: "10px" }}
//                   >
//                     {mlbGame.sites
//                       .filter(
//                         (betsite) =>
//                           betsite.site_nice === "FanDuel" ||
//                           betsite.site_nice === "DraftKings" ||
//                           betsite.site_nice === "PointsBet (US)"
//                       )
//                       .map((site) => {
//                         return (
//                           <p key={site.site_nice}>
//                             {site.site_nice}
//                             <li>
//                               {mlbGame.teams[0]}: {site.odds.h2h[0]}
//                             </li>
//                             <li>
//                               {mlbGame.teams[1]}: {site.odds.h2h[1]}
//                             </li>
//                           </p>
//                         );
//                       })}
//                   </UncontrolledCollapse>
//                 </CardBody>
//               </Card>
//             );
//           })}
//       </CardColumns>
//     </Container>
//   );
// };

// export default MlbOdds;
