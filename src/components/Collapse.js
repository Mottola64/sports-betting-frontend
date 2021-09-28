import React, { useState } from 'react';

const Collapse = ({ nflGame }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div>{isActive ? '-' : '+'}</div>
      </div>
      <div class={nflGame.home_team.replaceAll(" ", "_")}>
                        </div>
                    {isActive && <div class={nflGame.home_team.replaceAll(" ", "_")}> {nflGame.sites &&
                      nflGame.sites
                        .filter(
                          (betsite) =>
                            betsite.site_nice === "FanDuel" ||
                            betsite.site_nice === "DraftKings" ||
                            betsite.site_nice === "PointsBet (US)"
                        )
                        .map((site) => {
                          return (
                            <p key={site.site_nice}>
                              {site.site_nice}
                              <li>
                                {nflGame.teams[0]}:{" "}
                                {site.odds.spreads.points[0]}{" "}
                                {site.odds.spreads.odds[0]}
                              </li>
                              <li>
                                {nflGame.teams[1]}:{" "}
                                {site.odds.spreads.points[1]}{" "}
                                {site.odds.spreads.odds[1]}
                              </li>
                            </p>
                          );
                        })}</div>}
                  </div>
  );
};

export default Collapse;