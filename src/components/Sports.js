import React from "react";
// import sport from "./sport";
import {
  Card,
  CardHeader,
  CardText,
  CardColumns,
  CardSubtitle,
  CardBody,
} from "reactstrap";

class Sports extends React.Component {
  render() {
    return (
      <div>
        <CardColumns>
          {this.props.sports.map((sport) => {
            return (
              <Card key={sport.payload}>
                <CardBody>
                  <CardHeader className="text-center" width="100%">
                    <strong>{sport.sport_nice}</strong>
                  </CardHeader>
                  <br></br>
                  <CardSubtitle>
                    {sport.teams[1]} vs. {sport.teams[0]}
                  </CardSubtitle>

                  <br></br>
                  <CardText>{sport.commence_time}</CardText>
                  <CardSubtitle>
                    {sport.teams[1]}:{" "}
                    {sport.sites.map((site) => {
                      return (
                        <CardText key={site.site_nice}>
                          {site.site_nice}
                        </CardText>
                      );
                    })}
                    {/* <CardSubtitle>
                      {odds.h2h.map((odds) => {
                        return <CardText key={odds.h2h}>{odds.h2h}</CardText>;
                      })}
                    </CardSubtitle> */}
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

export default Sports;
