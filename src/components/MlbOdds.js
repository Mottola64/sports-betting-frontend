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
import teamPictures from "../data/pictures";

const MlbOdds = (props) => {
  return (
    <div>
      <h1>MLB Odds</h1>
      <Container>
        <CardColumns>
          {props.mlbodds &&
            props.mlbodds.map((mlbGame) => {
              return (
                <Card key={mlbGame.teams[0]}>
                  <CardBody>
                    <CardHeader
                      className="text-center"
                      width="100%"
                      margin="10px"
                    >
                      <strong>
                        {mlbGame.teams[0]} @ {mlbGame.teams[1]}
                      </strong>
                    </CardHeader>
                    <br></br>
                    <CardSubtitle>
                      <Moment unix format="MM/DD/YY">
                        {mlbGame.commence_time}
                      </Moment>
                    </CardSubtitle>
                    <br></br>
                    <CardSubtitle>
                      <CardImg
                        src={teamPictures[mlbGame.teams[0]]}
                        style={{
                          width: "30%",
                          height: "30%",
                        }}
                        alt="Card image cap"
                      />{" "}
                      <CardImg
                        src={teamPictures[mlbGame.teams[1]]}
                        style={{
                          width: "30%",
                          height: "30%",
                        }}
                        alt="Card image cap"
                      />
                    </CardSubtitle>
                    <Button id={mlbGame.home_team.replaceAll(" ", "_")}>
                      Odds
                    </Button>
                    <UncontrolledCollapse
                      toggler={`${mlbGame.home_team.replaceAll(" ", "_")}`}
                      style={{ marginTop: "10px" }}
                    >
                      {mlbGame.sites
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
                                {mlbGame.teams[0]}: {site.odds.h2h[0]}
                              </li>
                              <li>
                                {mlbGame.teams[1]}: {site.odds.h2h[1]}
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
    </div>
  );
};

export default MlbOdds;
