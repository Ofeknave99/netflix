import React, { FunctionComponent } from 'react';
import Series from '../interfaces/series';
import { series } from '../services/seriesService';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

interface TopSeriesProps {}

const TopSeries: FunctionComponent<TopSeriesProps> = () => {
  const navigate = useNavigate();

  const handleRankClick = (rank: number) => {
    navigate(`/series/${rank}`);
  };

  return (
    <>
      <Navbar />
      <>
      {series.length ? (
        <table className="table">
          <thead>
            <tr>
              <th>Rank</th>
              <th>Image</th>
              <th>Name</th>
              <th>Start Year</th>
            </tr>
          </thead>
          <tbody>
            {series.map((series: Series) => (
              <tr key={series.rank}>
                <td>
                  <Link to={`/top-series/${series.rank}`}>{series.rank}</Link>
                </td>
                <td>
                  <img src={series.img} alt={series.name} />
                </td>
                <td>
                  <Link to={`/top-series/${series.rank}`}>{series.name}</Link>
                </td>
                <td>{series.startYear}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No series</p>
      )}
    </>
    </>
  );
};

export default TopSeries;
