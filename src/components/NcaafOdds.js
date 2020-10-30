import React from "react";
import {
  ListGroup,
  ListGroupItem,
  CardBody,
  CardSubtitle,
  Container,
} from "reactstrap";
import Moment from "react-moment";

const NcaafOdds = (props) => {
  return (
    <Container caafuid style={{ margin: "20px" }}>
      <h1>NCAAF Odds</h1>

      <ListGroup>
        {props.ncaafodds &&
          props.ncaafodds.map((ncaafGame) => {
            return (
              <ListGroupItem key={ncaafGame.teams[0]}>
                <CardBody>
                  <CardSubtitle>
                    <strong>
                      <Moment unix format="MM/DD/YY">
                        {ncaafGame.commence_time}
                      </Moment>
                    </strong>
                    <br></br>
                    <strong>
                      <Moment unix format="LT">
                        {ncaafGame.commence_time}
                      </Moment>
                    </strong>
                  </CardSubtitle>
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
                          <p key={site.site_nice}>
                            {site.site_nice}
                            <li>
                              {ncaafGame.teams[0]}:{" "}
                              {site.odds.spreads.points[0]}{" "}
                              {site.odds.spreads.odds[0]}
                            </li>
                            <li>
                              {ncaafGame.teams[1]}:{" "}
                              {site.odds.spreads.points[1]}{" "}
                              {site.odds.spreads.odds[1]}
                            </li>
                          </p>
                        );
                      })}
                </CardBody>
              </ListGroupItem>
            );
          })}
      </ListGroup>
    </Container>
  );
};

export default NcaafOdds;
