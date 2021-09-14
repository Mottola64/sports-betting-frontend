import React from "react";
// import {
//   Card,
//   Button,
//   CardImg,
//   CardHeader,
//   CardColumns,
//   CardSubtitle,
//   CardBody,
//   Container
// } from "reactstrap";
import teamPictures from "../data/pictures";

class News extends React.Component {
  handleClick = (url) => {
    window.open(url);
  };

  render() {
    return (
      <div className="container mx-auto p-6">
        <div class="grid grid-cols-3 items-stretch -mx-4">
          {this.props.sportsnews.map((article) => {
            return (
              <div className="border-2 border-green-600 p-4">
                <div className="rounded overflow-hidden shadow-lg"key={article.title}>
                <header class="text-green-600 font-bold text-xl mb-2" as="h5">
                  {article.title}
                </header>
                <main className="h-full">
                  <p className="text-white-700 text-base">{article.description}</p>
                  <br></br>

                  {(article.urlToImage !== null && article.urlToImage !== "")? (
                    <img className="w-full"
                      src={article.urlToImage}
                      alt={article.title}
                    />
                  ) : <img className="w-full" src={teamPictures["logo"]}/>}
                  
                  <br></br><br></br>
                  <button class="bg-green-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                    variant="primary"
                    onClick={() => window.open(article.url)}
                  >
                    Read Article
                  </button>
                </main>
                </div>
              </div>
            );
          })}
        
          
          </div>  

        
          
      </div>
    
    );
  }
}

export default News;


// import React from "react";
// import {
//   Card,
//   Button,
//   CardImg,
//   CardHeader,
//   CardColumns,
//   CardSubtitle,
//   CardBody,
//   Container
// } from "reactstrap";
// import teamPictures from "../data/pictures";

// class News extends React.Component {
//   handleClick = (url) => {
//     window.open(url);
//   };

//   render() {
//     return (
//       <Container fluid>
//         <CardColumns>
//           {this.props.sportsnews.map((article) => {
//             return (
//               <Card key={article.title}>
//                 <CardHeader as="h5">
//                   <strong>{article.title}</strong>
//                 </CardHeader>
//                 <CardBody>
//                   <CardSubtitle>{article.description}</CardSubtitle>
//                   <br></br>

//                   {(article.urlToImage !== null && article.urlToImage !== "")? (
//                     <CardImg
//                       src={article.urlToImage}
//                       alt={article.title}
//                     />
//                   ) : <CardImg style={{width: "60%", height: "60%"}} src={teamPictures["logo"]}/>}
                  
//                   <br></br><br></br>
//                   <Button
//                     variant="primary"
//                     onClick={() => window.open(article.url)}
//                   >
//                     Read Article
//                   </Button>
//                 </CardBody>
//               </Card>
//             );
//           })}
//         </CardColumns>
//       </Container>
//     );
//   }
// }

// export default News;
