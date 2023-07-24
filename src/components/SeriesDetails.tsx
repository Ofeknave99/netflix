import { useParams } from "react-router-dom";
import { series } from "../services/seriesService";
import Series from "../interfaces/series";
import { FunctionComponent } from "react";
import Navbar from "./Navbar";

interface SeriesDetailsProps {
    
}
 
const SeriesDetails: FunctionComponent<SeriesDetailsProps> = () => {
  let { rank } = useParams();
  let currentSeries: Series = series.find(
    (s) => s.rank == Number(rank)
  ) as Series;

  return <>  <Navbar />
  {currentSeries.name}
  <div className="container" style={{textAlign:"center"}}>
      <div className="card" style={{ width: '18rem', textAlign:"center",marginLeft:"500px" }} >
        {currentSeries ? (
          <>
            <img src={currentSeries.img} className="card-img-top" alt={currentSeries.name} />
            <div className="card-body">
              <h5 className="card-title">{currentSeries.name}</h5>
              <p className="card-text">{currentSeries.description}</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Rank: {currentSeries.rank}</li>
              <li className="list-group-item">Start Year: {currentSeries.startYear}</li>
              <li className="list-group-item">Rate: {currentSeries.rate}</li>
              <li className="list-group-item">Running: {currentSeries.running}</li>
            </ul>
          </>
        ) : (
          <p>Series not found</p>
        )}
      </div>
    </div>
  
  </>;
    
    
 
};
 
export default SeriesDetails;











































