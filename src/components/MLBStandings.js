import React from "react";
import { Table } from "react-bootstrap";
const useSortableData = (items, config = null) => {
  const [sortConfig, setSortConfig] = React.useState(config);

  const sortedItems = React.useMemo(() => {
    let sortableItems = [...items];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [items, sortConfig]);

  const requestSort = (key) => {
    let direction = "ascending";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "ascending"
    ) {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  return { items: sortedItems, requestSort, sortConfig };
};
const MLBStandings = (props) => {
  const { items, requestSort, sortConfig } = useSortableData(props.mlbstandings);
  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };
  return (
    <div>
      <Table hover>
        <thead>
          <tr>
            <th>
              <button
                type="button"
                onClick={() => requestSort("team.name")}
                className={getClassNamesFor("team.name")}
              >
                Team
              </button>
            </th>
            <th>
              <button
                type="button"
                onClick={() => requestSort("group.name")}
                className={getClassNamesFor("group.name")}
              >
                Division
              </button>
            </th>
            <th>
              <button
                type="button"
                onClick={() => requestSort("games.win.total")}
                className={getClassNamesFor("games.win.total")}
              >
                Wins
              </button>
            </th>
            <th>
              <button
                type="button"
                onClick={() => requestSort("games.lose.total")}
                className={getClassNamesFor("games.lose.total")}
              >
                Losses
              </button>
            </th>
            <th>
              <button
                type="button"
                onClick={() => requestSort("games.win.percentage")}
                className={getClassNamesFor("games.win.percentage")}
              >
                Win Percentage
              </button>
            </th>
            <th>Last 5</th>
          </tr>
        </thead>
        <tbody>
          {items.length > 0 &&
            items.map((item) => (
              <tr key={item.team.name}>
                <td>{item.team.name}</td>
                <td>{item.group.name}</td>
                <td>{item.games.win.total}</td>
                <td>{item.games.lose.total}</td>
                <td>{item.games.win.percentage}</td>
                <td>{item.form}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};

export default MLBStandings;
