import React from "react";
import {
  Card,
  CardHeader,
  CardImg,
  CardColumns,
  CardSubtitle,
  CardBody,
} from "reactstrap";
// import Moment from "react-moment";
import teamPictures from '../data/pictures'

class MlbOdds extends React.Component {
  render() {
    return (
      <div>
        <h1>MLB Odds</h1>
        <CardColumns>
          {this.props.mlbodds.map((mlbGame) => {
            return (
              <Card key={mlbGame.teams[0]}>
                <CardBody>
                  <CardHeader className="text-center" width="100%">
                    <strong>{mlbGame.teams[0]}</strong>
                  </CardHeader>
                  <br></br>
                  {/* <CardSubtitle>
                    {mlbGame.strTime > Date() && <Moment parse="HH:mm:ss">
                      <strong>{mlbGame.strTime}</strong>
            </Moment>}
                    
                  </CardSubtitle><br></br> */}
                  <CardSubtitle>
                  <CardImg
                      src={teamPictures[mlbGame.teams[1]]}
                      style={{
                        width: "30%",
                            height: "30%",
                      }}
                      alt="Card image cap"
                    />{" "}
                    <CardImg
                      src={teamPictures[mlbGame.teams[0]]}
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

export default MlbOdds;
