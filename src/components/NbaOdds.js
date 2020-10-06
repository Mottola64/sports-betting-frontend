import React from "react";
import {
  Button,
  Card,
  CardHeader,
  CardImg,
  CardColumns,
  CardSubtitle,
  CardBody,
  UncontrolledCollapse,
} from "reactstrap";
import Moment from "react-moment";
import nbaLogos from "../data/nbaLogos";

const NbaOdds = (props) => {
  return (
    <div>
      <h1>NBA Odds</h1>
      <CardColumns>
        {props.nbaodds.map((nbaGame) => {
          return (
            <Card key={nbaGame.teams[0]}>
              <CardBody>
                <CardHeader className="text-center" width="100%">
                  <strong>
                    {nbaGame.teams[0]} @ {nbaGame.teams[1]}
                  </strong>
                </CardHeader>
                <br></br>
                <CardSubtitle>
                  <Moment unix format="LT">
                    {nbaGame.commence_time}
                  </Moment>
                </CardSubtitle>
                <br></br>
                <CardSubtitle>
                  <CardImg
                    src={nbaLogos[nbaGame.teams[0]]}
                    style={{
                      width: "30%",
                      height: "30%",
                    }}
                    alt="Card image cap"
                  />{" "}
                  <CardImg
                    src={nbaLogos[nbaGame.teams[1]]}
                    style={{
                      width: "30%",
                      height: "30%",
                    }}
                    alt="Card image cap"
                  />
                </CardSubtitle>
                <Button id="toggler">Odds</Button>
                <UncontrolledCollapse toggler={"toggler"} style={{marginTop: "10px"}}>
                  {nbaGame.sites
                    .filter(
                      (betsite) =>
                        betsite.site_nice === "FanDuel" ||
                        betsite.site_nice === "DraftKings" || betsite.site_nice === "PointsBet (US)"
                    )
                    .map((site) => {
                      return (
                        <p key={site.site_nice}>
                          {site.site_nice}
                          <li>
                            {nbaGame.teams[0]}: {site.odds.h2h[0]}
                          </li>
                          <li>
                            {nbaGame.teams[1]}: {site.odds.h2h[1]}
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
    </div>
  );
};

export default NbaOdds;
