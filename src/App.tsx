import HistoricalTimeline from './components/HistoricalTimeline/HistoricalTimeline';
import { timelineData } from './data/timelineData';

function App() {
  return (
    <div className="App">
      <HistoricalTimeline periods={timelineData.periods} />
    </div>
  );
}

export default App;
