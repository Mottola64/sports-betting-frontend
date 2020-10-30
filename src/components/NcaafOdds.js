import React from "react";
import { Container, Table } from "reactstrap";
import Moment from "react-moment";

const NcaafOdds = (props) => {
  return (
    <Container fluid style={{ margin: "20px" }}>
      <h1>NCAAF Odds</h1>
      {props.ncaafodds &&
        props.ncaafodds.map((ncaafGame) => {
          return (
            <Table cellspacing="0" cellpadding="0" width="100%" border="0">
              <tbody>
                <tr>
                  <td>
                    {ncaafGame.teams[0]} @ {ncaafGame.teams[1]}
                  </td>
                </tr>
                <tr>
                  <td>
                    <table
                      cellspacing="0"
                      cellpadding="0"
                      width="100%"
                      border="0"
                    >
                      <tbody>
                        <tr>
                          <td width="30%">
                            <Moment unix format="MM/DD/YY">
                              {ncaafGame.commence_time}
                            </Moment>
                            <Moment unix format="LT">
                              {ncaafGame.commence_time}
                            </Moment>
                          </td>

                          <td width="20%" colspan="2">
                            Record
                          </td>
                          <td width="20%" colspan="2">
                            Line
                          </td>
                          <td width="20%" colspan="3">
                            Betting Trend
                          </td>
                        </tr>
                        <tr>
                          <td>Teams</td>
                          <td width="14%" nowrap="nowrap">
                            Win-Loss
                          </td>
                          <td width="7%">Streak&nbsp;</td>
                          <td width="7%">Open</td>
                          <td width="7%">Current</td>
                          <td width="7%">Spread</td>
                          <td width="7%">Money</td>
                          <td width="7%">O/U</td>
                        </tr>
                        <tr>
                          <td nowrap="nowrap">{ncaafGame.teams[0]}</td>
                          <td nowrap="nowrap">(2-2) (1-0 A)&nbsp;</td>
                          <td nowrap="nowrap">&nbsp;</td>
                          <td nowrap="nowrap">54.5</td>
                          <td nowrap="nowrap">52</td>
                          <td nowrap="nowrap">&nbsp;</td>
                          <td nowrap="nowrap">&nbsp;</td>
                          <td nowrap="nowrap">&nbsp;</td>
                        </tr>
                        <tr>
                          <td nowrap="nowrap">{ncaafGame.teams[1]}</td>
                          <td nowrap="nowrap">(2-2) (1-0 H)&nbsp;</td>
                          <td nowrap="nowrap">W-1&nbsp;</td>
                          <td nowrap="nowrap">-7</td>
                          <td nowrap="nowrap">-3.5</td>
                          <td nowrap="nowrap">&nbsp;</td>
                          <td nowrap="nowrap">&nbsp;</td>
                          <td nowrap="nowrap">&nbsp;</td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </Table>
          );
        })}
    </Container>
  );
};
export default NcaafOdds;
