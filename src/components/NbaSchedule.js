import React from "react";
import {
  Card,
  CardHeader,
  CardImg,
  CardColumns,
  CardSubtitle,
  CardBody,
} from "reactstrap";
import Moment from "react-moment";
import nbaLogos from '../data/nbaLogos'

class NbaSchedule extends React.Component {
  render() {
    return (
      <div>
        <h1>Upcoming NBA Games</h1>
        <CardColumns>
          {this.props.nbaschedule.map((nbaScheduledGame) => {
            return (
              <Card id="nbacard" key={nbaScheduledGame.idEvent}>
                <CardBody>
                  <CardHeader className="text-center" width="100%">
                    <strong>{nbaScheduledGame.strEventAlternate}</strong>
                  </CardHeader>
                  <br></br>
                  <CardSubtitle>
                    {nbaScheduledGame.strTime > Date() && <Moment parse="HH:mm:ss">
                      <strong>{nbaScheduledGame.strTime}</strong>
            </Moment>}
                    
                  </CardSubtitle><br></br>
                  <CardSubtitle>
                  <CardImg
                      src={nbaLogos[nbaScheduledGame.strAwayTeam]}
                      style={{
                        width: "30%",
                            height: "30%",
                      }}
                      alt="Card image cap"
                    />{" "}
                    <CardImg
                      src={nbaLogos[nbaScheduledGame.strHomeTeam]}
                      style={{
                        width: "30%",
                        height: "30%",
                      }}
                      alt="Card image cap"
                    />
                  </CardSubtitle>
                </CardBody>
              </Card>
            );
          })}
        </CardColumns>
      </div>
    );
  }
}

export default NbaSchedule;
