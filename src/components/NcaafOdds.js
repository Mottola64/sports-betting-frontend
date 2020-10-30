import React from "react";
import { Container, Table } from "reactstrap";
import Moment from "react-moment";

const NcaafOdds = (props) => {
  return (
    <Container>
      <h1>NCAAF Odds</h1>
      {props.ncaafodds &&
        props.ncaafodds.map((ncaafGame) => {
          return (
            <Table key={ncaafGame.teams[1]}>
              <tbody>
                <tr>
                  <td>
                    {ncaafGame.teams[0]} @ {ncaafGame.teams[1]}
                  </td>
                  <td>
                    <Moment unix format="MM/DD/YY">
                      {ncaafGame.commence_time}
                    </Moment>
                  </td>
                  <td>
                    <Moment unix format="LT">
                      {ncaafGame.commence_time}
                    </Moment>
                  </td>
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
                        <>
                          <tbody>
                            <tr key={site.site_nice}>
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
                          </tbody>
                        </>
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
