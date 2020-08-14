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

class NbaResults extends React.Component {
  render() {
    return (
      <div>
        <h1>NBA Results</h1>
        <CardColumns>
          {this.props.nbaresults.map((nbaResult) => {
            return (
              <Card key={nbaResult.idEvent}>
                <CardBody>
                  <CardHeader className="text-center" width="100%" margin="10px">
                    <strong>{nbaResult.strEventAlternate}</strong>
                  </CardHeader>
                  
                  <CardSubtitle style={{margin: "10px", marginBottom:"15px"}}>
                      <strong>{nbaResult.strAwayTeam}</strong>: {nbaResult.intAwayScore}<br></br>
                      <strong>{nbaResult.strHomeTeam}</strong>: {nbaResult.intHomeScore}<br></br>
                  </CardSubtitle>
                  <CardSubtitle>
                    <CardImg
                      top
                      src={nbaResult.strThumb}
                      style={{
                        width: "100%",
                        height: "100%",
                        backgroundColor: "white",
                      }}
                      alt="Card image cap"
                    />{" "}
                  </CardSubtitle>
                  <Button
                    style={{padding: "10px", margin: "10px"}}
                    variant="primary"
                    onClick={() => window.open(nbaResult.strVideo)}
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

export default NbaResults;
