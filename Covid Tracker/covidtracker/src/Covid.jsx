import React, { useEffect, useState } from "react";
import "./covid.css";

export default function Covid() {
  const [data, setData] = useState();

  const getCovidData = async () => {
    try {
      const res = await fetch("https://api.covid19india.org/data.json");
      // console.log(res);
      const actualData = await res.json();
      console.log(actualData.statewise[0]);
      setData(actualData.statewise[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCovidData();
  }, []);
  return (
    <>
      <section>
        <h1 className="header"> 🔴 Live</h1>
        <h2 className="covid"> Covide-19 Coronavirus Tracker</h2>

        <div className="cards">
          <div className="card_main">
            <div className="card_inner">
              <p className="card_name">
                <span>OUR</span> COUNTRY
              </p>
              <p className="card_total card">INDIA</p>
            </div>
          </div>

          <div className="card_main">
            <div className="card_inner">
              <p className="card_name">
                <span>TOTAL</span> RECOVERED
              </p>
              <p className="card_total card_small">{data.recovered}</p>
            </div>
          </div>

          <div className="card_main">
            <div className="card_inner">
              <p className="card_name">
                <span>TOTAL</span> CONFIRMED
              </p>
              <p className="card_total card_small">{data.confirmed}</p>
            </div>
          </div>

          <div className="card_main">
            <div className="card_inner">
              <p className="card_name">
                <span>TOTAL</span> DEATHS
              </p>
              <p className="card_total card_small">{data.deaths}</p>
            </div>
          </div>

          <div className="card_main">
            <div className="card_inner">
              <p className="card_name">
                <span>TOTAL</span> ACTIVE
              </p>
              <p className="card_total card_small">{data.active}</p>
            </div>
          </div>

          <div className="card_main">
            <div className="card_inner">
              <p className="card_name">
                <span>LAST</span> UPDATE
              </p>
              <p className="card_total card_small">{data.lastupdatedtime}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
