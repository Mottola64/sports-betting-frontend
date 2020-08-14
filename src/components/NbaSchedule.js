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

class NbaSchedule extends React.Component {
  render() {
    return (
      <div>
        <h1>Upcoming NBA Games</h1>
        <CardColumns>
          {this.props.nbaschedule.map((nbaScheduledGame) => {
            return (
              <Card key={nbaScheduledGame.idEvent}>
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
                      top
                      src={nbaScheduledGame.strThumb}
                      style={{
                        width: "100%",
                        height: "100%",
                        backgroundColor: "white",
                      }}
                      alt="Card image cap"
                    />{" "}
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
