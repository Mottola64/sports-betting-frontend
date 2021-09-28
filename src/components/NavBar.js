import React from "react";

class NavBar extends React.Component {
  render() {
    return (
      <header className="bg-gray-800 md:sticky top-0 z-10" light expand="lg">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <div>
          <a href="/"className="title-font font-medium text-white mb-4 md:mb-0">
            
              The Underdog
          
          </a>
              <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-1 md:border-gray-700 flex flex-wrap items-center text-base justify-center">
                    <a href="/news" className="mr-5 hover:text-white">
                        News
                    </a>
                    <a href="/nfl" className="mr-5 hover:text-white">
                        NFL
                    </a>
                    <a href="/mlb" className="mr-5 hover:text-white">
                        MLB
                    </a>
                    <a href="/ncaaf" className="mr-5 hover:text-white">
                        NCAAF
                    </a>
                    <a href="/mlbstandings" className="mr-5 hover:text-white">
                        MLB Standings
                    </a>
              </nav>
          </div>
        </div>
      </header>
    );
  }
}

export default NavBar;
