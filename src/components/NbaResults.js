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
import nbaLogos from '../data/nbaLogos'

class NbaResults extends React.Component {
  
  render() {
  //   function getEmbedString(str) {
  //     return str.split('=')[1];
  // }
    return (
      <div>
        <h1>NBA Results</h1>
        <CardColumns>
          {this.props.nbaresults.map((nbaResult) => {
            return (
              <Card style={{width: "420px", height: "375px"}} key={nbaResult.idEvent}>
                <CardBody>
                  <CardHeader className="text-center" width="100%" margin="10px">
                    <strong>{nbaResult.strEventAlternate}</strong>
                  </CardHeader>
                  
                  <CardSubtitle>
                  <CardImg
                      src={nbaLogos[nbaResult.strAwayTeam]}
                      style={{
                        width: "30%",
                            height: "30%",
                      }}
                      alt="Card image cap"
                    />{" "}
                    <CardImg
                      src={nbaLogos[nbaResult.strHomeTeam]}
                      style={{
                        width: "30%",
                        height: "30%",
                      }}
                      alt="Card image cap"
                    /><br></br>
                    <strong>{nbaResult.dateEventLocal}</strong><br></br>
                      <strong>{nbaResult.strAwayTeam}</strong>: {nbaResult.intAwayScore}<br></br>
                      <strong>{nbaResult.strHomeTeam}</strong>: {nbaResult.intHomeScore}<br></br>
                  </CardSubtitle>
                  {/* <CardSubtitle style={{marginTop: "10px"}}><iframe style={{maxWidth: '640px', maxHeight: '360px', margin: '0px'}} className="embed-responsive-item" title="videoplayer" src={`https://www.youtube.com/embed/${nbaResult.strVideo.split('=')[1]}`} gesture="media" allow="encrypted-media" allowFullScreen/></CardSubtitle>  */}
                  {/* <Button
                    style={{padding: "10px", margin: "10px"}}
                    variant="primary"
                    onClick={() => window.open(nbaResult.strVideo)}
                  >
                    Highlights
                  </Button> */}
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
