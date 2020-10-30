import React from "react";
import { Container, Table } from "reactstrap";
import Moment from "react-moment";

const NcaafOdds = (props) => {
  return (
    <Container fluid>
      <h1>NCAAF Odds</h1>
      {props.ncaafodds &&
        props.ncaafodds.map((ncaafGame) => {
          return (
            <Table
              bordered
              hover
              key={ncaafGame.home_team}
              style={{ margin: "20px" }}
            >
              <tbody>
                <tr>
                  <th colSpan="3">
                    {ncaafGame.teams[0]} @ {ncaafGame.teams[1]}
                  </th>
                </tr>
                <tr colSpan="3">
                  <Moment unix format="MM/DD/YY">
                    {ncaafGame.commence_time}
                  </Moment>
                  :
                  <Moment unix format="LT">
                    {ncaafGame.commence_time}
                  </Moment>
                </tr>
              </tbody>
              <tbody>
                {ncaafGame.sites &&
                  ncaafGame.sites
                    .filter(
                      (betsite) =>
                        betsite.site_nice === "FanDuel" ||
                        betsite.site_nice === "DraftKings" ||
                        betsite.site_nice === "PointsBet (US)"
                    )
                    .map((site) => {
                      return (
                        <React.Fragment key={site.site_nice}>
                          <tr>
                            <td>{site.site_nice}</td>
                            <td>Spread</td>
                            <td>Odds</td>
                          </tr>
                          <tr>
                            <td>{ncaafGame.teams[0]}</td>
                            <td>{site.odds.spreads.points[0]}</td>
                            <td>{site.odds.spreads.odds[0]}</td>
                          </tr>
                          <tr>
                            <td>{ncaafGame.teams[1]}</td>
                            <td>{site.odds.spreads.points[1]}</td>
                            <td>{site.odds.spreads.odds[1]}</td>
                          </tr>
                        </React.Fragment>
                      );
                    })}
              </tbody>
            </Table>
          );
        })}
    </Container>
  );
};
export default NcaafOdds;
