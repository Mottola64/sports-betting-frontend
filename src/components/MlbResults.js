import React from "react";
import {
  Card,
  CardHeader,
  Button,
  CardImg,
  CardColumns,
  CardSubtitle,
  CardBody,
} from "reactstrap";
import teamPictures from '../data/pictures'

class MlbResults extends React.Component {
  
  render() {

    return (
      <div>
        <h1>MLB Results</h1>
        <CardColumns>
          {this.props.mlbresults.map((mlbResult) => {
            return (
              <Card style={{width: "420px", height: "375px"}} key={mlbResult.idEvent}>
                <CardBody>
                  <CardHeader className="text-center" width="100%" margin="10px">
                    <strong>{mlbResult.strEventAlternate}</strong>
                  </CardHeader>
                  
                  <CardSubtitle>
                  <CardImg
                      src={teamPictures[mlbResult.strAwayTeam]}
                      style={{
                        width: "30%",
                            height: "30%",
                      }}
                      alt="Card image cap"
                    />{" "}
                    <CardImg
                      src={teamPictures[mlbResult.strHomeTeam]}
                      style={{
                        width: "30%",
                        height: "30%",
                      }}
                      alt="Card image cap"
                    /><br></br>
                    <strong>{mlbResult.dateEventLocal}</strong><br></br>
                      <strong>{mlbResult.strAwayTeam}</strong>: {mlbResult.intAwayScore}<br></br>
                      <strong>{mlbResult.strHomeTeam}</strong>: {mlbResult.intHomeScore}<br></br>
                  </CardSubtitle>
                  
                  <Button
                    style={{padding: "10px", margin: "10px"}}
                    variant="primary"
                    onClick={() => window.open(mlbResult.strVideo)}
                  >
                    Highlights
                  </Button>
                </CardBody>
              </Card>
            );
          })}
        </CardColumns>
      </div>
    );
  }
}

export default MlbResults;
