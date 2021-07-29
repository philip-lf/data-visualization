// Vendor
import { useEffect, useState } from 'react';

// Internal
import csvToJson from './csv/csv.json'; // need to call api to convert it in the browser - do it later
import BarChart from './components/BarChart';

// Styles
import './App.css';

// help our client visualize pay differences among their employees.

const App = () => {
  // const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([{}]);
  const [selectedChart, setSelectedChart] = useState('bar');
  const [column, setColumn] = useState('country');

  useEffect(() => {
    // extract relevant data
    const filteredSet = csvToJson.map(({ city, country, department, email, employmentType, gender, level, salary, startDate }) => {
      return { city, country, department, email, employmentType, gender, level, salary, startDate };
    })
    setData(filteredSet);
  }, []);

  return (
    <div className="container">
      <div className="options">
        <label>Choose a chart type:</label>
        <select value={selectedChart} onChange={(e) => setSelectedChart(e.target.value)}>
          <option value="bar">Bar</option>
        </select>
        <label>Pick column to compare by:</label>
        <select value={column} onChange={(e) => setColumn(e.target.value)}>
          {
            Object.keys(data[0]).map(header => {
              return (
                <option key={header} value={header}>{header}</option>
              );
            })
          }
        </select>
      </div>
      {
        (selectedChart === 'bar' && column.length && data.length > 1)
          ? <BarChart data={data} column={column} />
          : null
      }
    </div>
  );
}

export default App;
