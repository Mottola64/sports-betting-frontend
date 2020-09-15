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
      <Container fluid>
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

                  {(article.urlToImage !== null)? (
                    <CardImg
                      width="100%"
                      src={article.urlToImage}
                      alt={article.title}
                    />
                  ) : <CardImg width="100%" src={teamPictures["New York Mets"]}/>}
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
