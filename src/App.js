import './App.css';
import EventsHighlight from './components/eventsHighlight/eventsHighlight';
import EventsOverview from './components/EventsOverview/eventsOverview';
import Hero from './components/hero/hero';
import Slider from './components/slider/slider';
import Timeline from './components/timeline/timeline';

function App() {
  return (
    <div className="main">
      <Hero/>
      <EventsOverview/>
       <Slider/>
       <Timeline/>
       <EventsHighlight/>
    </div>
  );
}

export default App;
