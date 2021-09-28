import React, { useState } from 'react';

const Collapse = ({ game }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div>{isActive ? '-' : '+'}</div>
      </div>
      <div class={game.home_team.replaceAll(" ", "_")}>
                        </div>
                    {isActive && <div class={game.home_team.replaceAll(" ", "_")}> {game.sites &&
                      game.sites
                        .filter(
                          (betsite) =>
                            betsite.site_nice === "FanDuel" ||
                            betsite.site_nice === "DraftKings" ||
                            betsite.site_nice === "PointsBet (US)"
                        )
                        .map((site) => {
                          return (
                             <> {site.odds.spreads ?
                            <p key={site.site_nice}>
                              {site.site_nice}
                              <li>
                                {game.teams[0]}:{" "}
                                {site.odds.spreads.points[0]}{" "}
                                {site.odds.spreads.odds[0]}
                              </li>
                              <li>
                                {game.teams[1]}:{" "}
                                {site.odds.spreads.points[1]}{" "}
                                {site.odds.spreads.odds[1]}
                              </li>
                            </p> : <p key={site.site_nice}>
                            {site.site_nice}
                            <li>
                              {game.teams[0]}: {site.odds.h2h[0]}
                            </li>
                            <li>
                              {game.teams[1]}: {site.odds.h2h[1]}
                            </li>
                          </p>}
                            </>
                          );
                        })}</div>}
                  </div>
  );
};

export default Collapse;