import React from 'react'
import '../App.css';
import img from "../Assets/img/cloud.png";

function Details({ avgTem, weather, highTem, wind, humidity, lowTem, rain, pressure, country, cityName, feelsLike }) {

    // console.log(avgTem, weather, highTem, wind, humidity, lowTem, rain, pressure, cityName, country);

    return (
        <>
            <div className="wrapper">
                <main className="container max-width-center">
                    <div className="columns even-columns">
                        <div className="col col-1">
                            <div className="header city max-width-center">
                                <h2>{`${cityName}, ${country}`}</h2>
                            </div>
                            <div className="temperature">
                                <div className="temperature__img">
                                    <img src={img} alt='icon' className="img-cloud" />
                                </div>
                                <div className="temperature__text">
                                    <h3>{avgTem}<span className="temperat-unit"><sup>o</sup>c</span></h3>
                                    <p>{weather}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col col-2">
                            <div className="days grid-container">
                                <div className="item item-1">
                                    <h3>{highTem}&#8451;</h3>
                                    <p>High</p>
                                </div>
                                <div className="item item-4">
                                    <h3>{lowTem}&#8451;</h3>
                                    <p>Low</p>
                                </div>
                                <div className="item item-5">
                                    <h3>{feelsLike}&#8451;</h3>
                                    <p>Feels Like</p>
                                </div>
                                <div className="item item-2">
                                    <h3>{Math.round((wind * 2.23694) * 100) / 100} mph</h3>
                                    <p>Wind</p>
                                </div>
                                <div className="item item-3">
                                    <h3>{humidity}%</h3>
                                    <p>Humidity</p>
                                </div>
                                <div className="item item-6">
                                    <h3>{pressure} hPa</h3>
                                    <p>Presure</p>
                                </div>
                            </div>
                        </div>
                    </div>


                </main>
            </div>
        </>
    )
}

export default Details;