import './App.css';
import EventsHighlight from './components/eventsHighlight/eventsHighlight';
import EventsOverview from './components/EventsOverview/eventsOverview';
import Footer from './components/footer/Footer';
import Hero from './components/hero/hero';
import Slider from './components/slider/slider';
import Timeline from './components/timeline/timeline';
import VideoSection from './components/videoSection/videoSection';

function App() {
  return (
    <div className="main">
      <Hero/>
      <EventsOverview/>
      <VideoSection/>
       <Slider/>
       <Timeline/>
       <EventsHighlight/>
       <Footer/>
    </div>
  );
}

export default App;
