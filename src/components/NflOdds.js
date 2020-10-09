import React from "react";
import {
  Button,
  Card,
  CardHeader,
  CardImg,
  CardColumns,
  CardSubtitle,
  CardBody,
  Container,
  UncontrolledCollapse,
} from "reactstrap";
import Moment from "react-moment";
import nflLogos from "../data/nflLogos";

const NflOdds = (props) => {
  return (
    <Container fluid style={{margin: "20px"}}>
      <h1>NFL Odds</h1>

      <CardColumns>
        {props.nflodds && props.nflodds.map((nflGame) => {
          return (
            <Card key={nflGame.teams[0]}>
              <CardBody>
                <CardHeader className="text-center" width="95%" margin="10px">
                  <strong>
                    {nflGame.teams[0]} @ {nflGame.teams[1]}
                  </strong>
                </CardHeader>
                <br></br>
                <CardSubtitle>
                  <Moment unix format="MM/DD/YY">
                    {nflGame.commence_time}
                  </Moment>
                </CardSubtitle>
                <br></br>
                <CardSubtitle>
                  <CardImg
                    src={nflLogos[nflGame.teams[0]]}
                    style={{
                      width: "30%",
                      height: "30%",
                    }}
                    alt="Card image cap"
                  />{" "}
                  <CardImg
                    src={nflLogos[nflGame.teams[1]]}
                    style={{
                      width: "30%",
                      height: "30%",
                    }}
                    alt="Card image cap"
                  />
                </CardSubtitle>
                <Button id={nflGame.home_team.replaceAll(" ", "_")}>Odds</Button>
                <UncontrolledCollapse
                  toggler={`${nflGame.home_team.replaceAll(" ", "_")}`}
                  style={{ marginTop: "10px" }}
                >
                  {nflGame.sites && nflGame.sites
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
                            {nflGame.teams[0]}: {site.odds.spreads.points[0]} {site.odds.spreads.odds[0]}
                          </li>
                          <li>
                            {nflGame.teams[1]}: {site.odds.spreads.points[1]} {site.odds.spreads.odds[1]}
                          </li>
                        </p>
                      );
                    })}
                </UncontrolledCollapse>
              </CardBody>
            </Card>
          );
        })}
      </CardColumns>
    </Container>
  );
};

export default NflOdds;
