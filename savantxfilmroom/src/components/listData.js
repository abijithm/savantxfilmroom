import React, { Fragment, useEffect, useState} from "react"
//import { listenerCount } from "../../../pg-api/db";

const ListData = () => {

    const link = 'https://www.mlb.com/video/search?utm=club-film-room&q=Player+%3D+%5B%22Clayton+Kershaw%22%5D+Order+By+Timestamp+DESC';
    const [listData, setListData] = useState([]);
    const getSavantData = async () => {
        try {
            const response = await fetch("http://localhost:5000/savantData");
            const jsonData = await response.json();

            setListData(jsonData);
        } catch (err) {
            console.error(err.message);

        }
    }

    useEffect(() => {
        getSavantData();
    });

    function getUniquePlayers(playerList){
        var uniquePlayerList = [];
        
        // Loop through array values
        for(var i=0; i < playerList.length; i++){
            if(uniquePlayerList.indexOf(playerList[i]) === -1) {
                uniquePlayerList.push(playerList[i]);
            }
        }
        return uniquePlayerList;
    }

    let playerList = [];

    listData.forEach(player => {
        playerList.push(player.first_name+"+"+player.last_name)
    });

    var uniquePlayers = getUniquePlayers(playerList);

    let playerString = "https://www.mlb.com/video/search?utm=club-film-room&q=PitchType+%3D+%5B%22FF%22%5D+AND+Player+%3D+%5B%22"+uniquePlayers[0];
    
    for (let i = 1; i < uniquePlayers.length; i++) {
        playerString += "%22%2C%22"+uniquePlayers[i]
        playerString = playerString.replace(" ","");
    }
    playerString += "%22%5D+Order+By+Timestamp+DESC";
    let resultUrl = playerString;
    return (
        <Fragment>
            <h1 class="mt-5 text-center">Baseball Savant Data</h1>
            <table class="table mt-5 text-center">
                <thead>
                    <tr>
                        <button onClick=""><th>Last Name</th></button>
                        <th>First Name</th>
                        <th>Year</th>
                        <th>Strikeout Percentage</th>
                        <th>4-seam Fastball Average Speed</th>
                        <th>4-seam Fastball Average Spin</th>
                        <th>4-seam Fastball Average Break</th>
                        <th>Slider Average Speed</th>
                        <th>Slider Average Spin</th>
                        <th>Slider Average Break</th>
                        <th>Changeup Average Speed</th>
                        <th>Changeup Average Spin</th>
                        <th>Changeup Average Break</th>
                        <th>Curveball Average Speed</th>
                        <th>Curveball Average Spin</th>
                        <th>Curveball Average Break</th>
                        <th>Sinker Average Speed</th>
                        <th>Sinker Average Spin</th>
                        <th>Sinker Average Break</th>
                        <th>Cutter Average Speed</th>
                        <th>Cutter Average Spin</th>
                        <th>Cutter Average Break</th>
                        <th>Splitter Average Speed</th>
                        <th>Splitter Average Spin</th>
                        <th>Splitter Average Break</th>
                        <th>Fastball Average Speed</th>
                        <th>Fastball Average Spin</th>
                        <th>Fastball Average Break</th>
                        <th>Breaking Average Speed</th>
                        <th>Breaking Average Spin</th>
                        <th>Breaking Average Break</th>
                        <th>Offspeed Average Speed</th>
                        <th>Offspeed Average Spin</th>
                        <th>Offspeed Average Break</th>
                    </tr>
                </thead>
                <tbody>
                    {listData.map(data => (
                        <tr>
                            <td>{data.last_name}</td>
                            <td>{data.first_name}</td>
                            <td>{data.year}</td>
                            <td>{data.p_k_percent}</td>

                            <td>{data.ff_avg_speed}</td>
                            <td>{data.ff_avg_spin}</td>
                            <td>{data.ff_avg_break}</td>

                            <td>{data.sl_avg_speed}</td>
                            <td>{data.sl_avg_spin}</td>
                            <td>{data.sl_avg_break}</td>

                            <td>{data.ch_avg_speed}</td>
                            <td>{data.ch_avg_spin}</td>
                            <td>{data.ch_avg_break}</td>

                            <td>{data.cu_avg_speed}</td>
                            <td>{data.cu_avg_spin}</td>
                            <td>{data.cu_avg_break}</td>

                            <td>{data.si_avg_speed}</td>
                            <td>{data.si_avg_spin}</td>
                            <td>{data.si_avg_break}</td>

                            <td>{data.fc_avg_speed}</td>
                            <td>{data.fc_avg_spin}</td>
                            <td>{data.fc_avg_break}</td>

                            <td>{data.fs_avg_speed}</td>
                            <td>{data.fs_avg_spin}</td>
                            <td>{data.fs_avg_break}</td>

                            <td>{data.fastball_avg_speed}</td>
                            <td>{data.fastball_avg_spin}</td>
                            <td>{data.fastball_avg_break}</td>

                            <td>{data.breaking_avg_speed}</td>
                            <td>{data.breaking_avg_spin}</td>
                            <td>{data.breaking_avg_break}</td>

                            <td>{data.offspeed_avg_speed}</td>
                            <td>{data.offspeed_avg_spin}</td>
                            <td>{data.offspeed_avg_break}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <a href={resultUrl} target="_blank">MLB film room link</a>
        </Fragment>
    );
};

export default ListData;