import React from "react";
import {
  Card,
  Button,
  CardImg,
  CardHeader,
  CardColumns,
  CardSubtitle,
  CardBody,
  Container
} from "reactstrap";
import teamPictures from "../data/pictures";

class News extends React.Component {
  handleClick = (url) => {
    window.open(url);
  };

  render() {
    return (
      <Container style={{marginTop: "20px"}}fluid>
        <CardColumns>
          {this.props.sportsnews.map((article) => {
            return (
              <Card key={article.title}>
                <CardHeader as="h5">
                  <strong>{article.title}</strong>
                </CardHeader>
                <CardBody>
                  <CardSubtitle>{article.description}</CardSubtitle>
                  <br></br>

                  {(article.urlToImage !== null && article.urlToImage !== "")? (
                    <CardImg
                      src={article.urlToImage}
                      alt={article.title}
                    />
                  ) : <CardImg style={{width: "60%", height: "60%"}} src={teamPictures["logo"]}/>}
                  
                  <br></br><br></br>
                  <Button
                    variant="primary"
                    onClick={() => window.open(article.url)}
                  >
                    Read Article
                  </Button>
                </CardBody>
              </Card>
            );
          })}
        </CardColumns>
      </Container>
    );
  }
}

export default News;
