import React from "react";
import {
  Card,
  Button,
  CardImg,
  CardHeader,
  CardColumns,
  CardSubtitle,
  CardBody,
} from "reactstrap";

class News extends React.Component {
  handleClick = (url) => {
    window.open(url);
  };

  render() {
    return (
      <div>
        <CardColumns>
          {this.props.sportsnews.map((article) => {
            return (
              <Card key={article.publishedAt}>
                <CardHeader as="h5">
                  <strong>{article.title}</strong>
                </CardHeader>
                <CardBody>
                  <CardSubtitle>{article.description}</CardSubtitle>
                  <br></br>

                  {article.urlToImage !== null && (
                    <CardImg
                      width="100%"
                      src={article.urlToImage}
                      alt={article.title}
                    />
                  )}
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
      </div>
    );
  }
}

export default News;
