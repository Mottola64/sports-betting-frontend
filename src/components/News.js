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
      <div className="mx-auto bg-gray-600">
        <div class="gap-x-2 sm:grid-cols-1 grid md:grid-cols-3 lg:grid-cols-4">
          {this.props.sportsnews.map((article) => {
            return (
              <div className="sm:w-8/10 p-4 md:w-8/10 p-4 lg:w-11/12 p-4 border-2 border-green-600 mb-1 rounded overflow-hidden shadow-lg" key={article.title}>
                <header class="text-green-600 bg-gray-600 font-extrabold text-xl mb-2 p-2" as="h5">
                  {article.title}
                </header>
                <main className="grid justify-items-stretch">
                  <p className="text-white-700 text-base">{article.description}</p>

                  {(article.urlToImage !== null && article.urlToImage !== "")? (
                    <img className="mt-1 w-full rounded shadow-lg"
                      src={article.urlToImage}
                      alt={article.title}
                    />
                  ) : <img className="mt-1 w-full rounded shadow-lg" src={teamPictures["logo"]}/>}
                  
                  <button class="justify-self-center items-stretch mt-3 bg-green-500 hover:bg-gray-700 text-white font-bold py-2 px-3 rounded"
                    variant="primary"
                    onClick={() => window.open(article.url)}
                  >
                    Read Article
                  </button>
                </main>
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
