// Internal
import { reduceToStats } from '../helpers';

// Styles
import './BarChart.css';

// learning charting apis was too time consuming, will produce simple divs that adjust based on input
const BarChart = ({ data, column }) => {
  const stats = reduceToStats(data, column);
  const maxStat = Math.max.apply(Math, stats.map(({ averageSalary }) => averageSalary))
  const widthOfColumn = stats.length < 20 ? 5 : (stats.length / 100);

  return (
    <div className="barChart">
      {
        stats.map((stat, i) => {
          const { averageSalary, title } = stat; 
          const height = (averageSalary / maxStat) * 100;
          return (
            <div key={i} className="bar" style={{ height: `${height}%`, width: `${widthOfColumn}%` }}>
              {title}
            </div>
          )
        })
      }
    </div>
  );
}

export default BarChart;
