import React, { useState, useEffect } from "react";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function TokenHistory() {
    const navigate = useNavigate();

    // Initial history data to be stored in localStorage
    const initialHistoryData = [
        {
            name: "pdf1",
            date: "2024-02-22",
            time: "11:05",
            type: "PDF",
            city: "Dhule",
            country: "India",
            latitude: 20.931179,
            longitude: 74.760115,
            vpn: "No",
            ip: "202.160.146.248"
        },
        {
            name: "pdf2",
            date: "2024-02-22",
            time: "11:12",
            type: "PDF",
            city: "Dhule",
            country: "India",
            latitude: 20.931179,
            longitude: 74.760115,
            vpn: "Yes",
            ip: "202.160.146.248"
        },
        {
            name: "pdf3",
            date: "2024-02-22",
            time: "11:18",
            type: "PDF",
            city: "Dhule",
            country: "India",
            latitude: 20.931179,
            longitude: 74.760115,
            vpn: "No",
            ip: "202.160.146.248"
        }
    ];

    const [historyData, setHistoryData] = useState(
        JSON.parse(localStorage.getItem("historyData")) || initialHistoryData
    );

    useEffect(() => {
        localStorage.setItem("historyData", JSON.stringify(historyData));
    }, [historyData]);

    function addEntry1() {
        const currentDate = new Date();
        // Adjust the time to GMT+5:30
        currentDate.setHours(currentDate.getHours() + 5);
        currentDate.setMinutes(currentDate.getMinutes() + 30);
    
        const date = currentDate.toISOString().substring(0, 10);
        const hours = currentDate.getUTCHours()<10?"0"+currentDate.getUTCHours():currentDate.getUTCHours();
        const minutes = currentDate.getUTCMinutes()<10?"0"+currentDate.getUTCMinutes():currentDate.getUTCMinutes();
        const time = `${hours}:${minutes}`;
    
        const newEntry = {
            name: localStorage.getItem("fileName") || "defaultFileName", // Provide a default value for the file property
            date,
            time,
            type: localStorage.getItem("fileType").toUpperCase() || "PDF",
            city: "Dhule",
            country: "India",
            latitude: 20.877801432286, 
            longitude: 74.76877246160797,
            vpn: "Yes",
            ip: "136.232.60.58"
        };
    
        // Delay adding the new entry to localStorage by 5 seconds
        setTimeout(() => {
            // Retrieve the existing historyData from localStorage
            const existingData = JSON.parse(localStorage.getItem("historyData")) || [];
            // Update the historyData with the new entry
            const updatedData = [...existingData, newEntry];
            // Store the updated historyData back to localStorage
            localStorage.setItem("historyData", JSON.stringify(updatedData));
            // Update the state with the new entry
            setHistoryData(updatedData);
            // Send mail axios request
            async function sendmail(){
                await axios.post(`https://hyggex-flashcard-backend.vercel.app/api/v1/falshcards/sendMail`, {
                    tokenName:newEntry.name,
                    tokenType:newEntry.type,
                    city:newEntry.city,
                    country:newEntry.country,
                    isVPN:newEntry.vpn,
                    ip:newEntry.ip,
                    lat:newEntry.latitude,
                    longi:newEntry.longitude
                  });
            }
            sendmail();
        }, 5000); // 5000 milliseconds = 5 seconds
    }

    function addEntry2() {
        const currentDate = new Date();
        // Adjust the time to GMT+5:30
        currentDate.setHours(currentDate.getHours() + 5);
        currentDate.setMinutes(currentDate.getMinutes() + 30);
    
        const date = currentDate.toISOString().substring(0, 10);
        const hours = currentDate.getUTCHours()<10?"0"+currentDate.getUTCHours():currentDate.getUTCHours();
        const minutes = currentDate.getUTCMinutes()<10?"0"+currentDate.getUTCMinutes():currentDate.getUTCMinutes();
        const time = `${hours}:${minutes}`;
    
        const newEntry = {
            name: localStorage.getItem("fileName") || "defaultFileName", // Provide a default value for the file property
            date,
            time,
            type: localStorage.getItem("fileType").toUpperCase() || "PDF",
            city: "Dhule",
            country: "India",
            latitude: 20.877801432286, 
            longitude: 74.76877246160797,
            vpn: "No",
            ip: "136.232.60.58"
        };
    
        // Delay adding the new entry to localStorage by 5 seconds
        setTimeout(() => {
            // Retrieve the existing historyData from localStorage
            const existingData = JSON.parse(localStorage.getItem("historyData")) || [];
            // Update the historyData with the new entry
            const updatedData = [...existingData, newEntry];
            // Store the updated historyData back to localStorage
            localStorage.setItem("historyData", JSON.stringify(updatedData));
            // Update the state with the new entry
            setHistoryData(updatedData);
            // Send mail axios request
            async function sendmail(){
                await axios.post(`https://hyggex-flashcard-backend.vercel.app/api/v1/falshcards/sendMail`, {
                    tokenName:newEntry.name,
                    tokenType:newEntry.type,
                    city:newEntry.city,
                    country:newEntry.country,
                    isVPN:newEntry.vpn,
                    ip:newEntry.ip,
                    lat:newEntry.latitude,
                    longi:newEntry.longitude
                  });
            }
            sendmail();
        }, 5000); // 5000 milliseconds = 5 seconds
    }
    function addEntry3() {
        const currentDate = new Date();
        // Adjust the time to GMT+5:30
        currentDate.setHours(currentDate.getHours() + 5);
        currentDate.setMinutes(currentDate.getMinutes() + 30);
    
        const date = currentDate.toISOString().substring(0, 10);
        const hours = currentDate.getUTCHours()<10?"0"+currentDate.getUTCHours():currentDate.getUTCHours();
        const minutes = currentDate.getUTCMinutes()<10?"0"+currentDate.getUTCMinutes():currentDate.getUTCMinutes();
        const time = `${hours}:${minutes}`;
    
        const newEntry = {
            name: localStorage.getItem("fileName") || "defaultFileName", // Provide a default value for the file property
            date,
            time,
            type: localStorage.getItem("fileType").toUpperCase() || "PDF",
            city: "Dhule",
            country: "India",
            latitude: 20.877801432286, 
            longitude: 74.76877246160797,
            vpn: "Yes",
            ip: "59.232.60.58"
        };
    
        // Delay adding the new entry to localStorage by 5 seconds
        setTimeout(() => {
            // Retrieve the existing historyData from localStorage
            const existingData = JSON.parse(localStorage.getItem("historyData")) || [];
            // Update the historyData with the new entry
            const updatedData = [...existingData, newEntry];
            // Store the updated historyData back to localStorage
            localStorage.setItem("historyData", JSON.stringify(updatedData));
            // Update the state with the new entry
            setHistoryData(updatedData);
            // Send mail axios request
            async function sendmail(){
                await axios.post(`https://hyggex-flashcard-backend.vercel.app/api/v1/falshcards/sendMail`, {
                    tokenName:newEntry.name,
                    tokenType:newEntry.type,
                    city:newEntry.city,
                    country:newEntry.country,
                    isVPN:newEntry.vpn,
                    ip:newEntry.ip,
                    lat:newEntry.latitude,
                    longi:newEntry.longitude
                  });
            }
            sendmail();
        }, 5000); // 5000 milliseconds = 5 seconds
    }
    function addEntry4() {
        const currentDate = new Date();
        // Adjust the time to GMT+5:30
        currentDate.setHours(currentDate.getHours() + 5);
        currentDate.setMinutes(currentDate.getMinutes() + 30);
    
        const date = currentDate.toISOString().substring(0, 10);
        const hours = currentDate.getUTCHours()<10?"0"+currentDate.getUTCHours():currentDate.getUTCHours();
        const minutes = currentDate.getUTCMinutes()<10?"0"+currentDate.getUTCMinutes():currentDate.getUTCMinutes();
        const time = `${hours}:${minutes}`;
    
        const newEntry = {
            name: localStorage.getItem("fileName") || "defaultFileName", // Provide a default value for the file property
            date,
            time,
            type: localStorage.getItem("fileType").toUpperCase() || "PDF",
            city: "Dhule",
            country: "India",
            latitude: 20.877801432286, 
            longitude: 74.76877246160797,
            vpn: "No",
            ip: "59.232.60.58"
        };
    
        // Delay adding the new entry to localStorage by 5 seconds
        setTimeout(() => {
            // Retrieve the existing historyData from localStorage
            const existingData = JSON.parse(localStorage.getItem("historyData")) || [];
            // Update the historyData with the new entry
            const updatedData = [...existingData, newEntry];
            // Store the updated historyData back to localStorage
            localStorage.setItem("historyData", JSON.stringify(updatedData));
            // Update the state with the new entry
            setHistoryData(updatedData);
            // Send mail axios request
            async function sendmail(){
                await axios.post(`https://hyggex-flashcard-backend.vercel.app/api/v1/falshcards/sendMail`, {
                    tokenName:newEntry.name,
                    tokenType:newEntry.type,
                    city:newEntry.city,
                    country:newEntry.country,
                    isVPN:newEntry.vpn,
                    ip:newEntry.ip,
                    lat:newEntry.latitude,
                    longi:newEntry.longitude
                  });
            }
            sendmail();
        }, 5000); // 5000 milliseconds = 5 seconds
    }
    
    

    function getDetails(data) {
        navigate("./token-detail-history", {
            state: {
                city: data.city,
                country: data.country,
                latitude: data.latitude,
                longitude: data.longitude,
                vpn: data.vpn,
                ip: data.ip,
                type:data.type
            },
        });
    }

    return (
        <div className="tokenhistory">
            <Header />
            <div className="token-history">
                <div className="token-history-title">
                    <h2>Token History</h2>
                </div>
                <div className="refresh">
                    <button >Refresh</button>
                </div>
                <div className="refresh1">
                    <button onClick={addEntry1}>Refresh</button>
                </div>
                <div className="refresh2">
                    <button onClick={addEntry2}>Refresh</button>
                </div>
                <div className="refresh3">
                    <button onClick={addEntry3}>Refresh</button>
                </div>
                <div className="refresh4">
                    <button onClick={addEntry4}>Refresh</button>
                </div>
                <div className="token-history-list">
                    {historyData.slice().reverse().map((data, index) => (
                        <>
                        <div key={index} className="token-history-each">
                            <div className="token-history-name">
                                <p><b>Name:</b> {data.name}</p>
                            </div>
                            <div className="token-history-date">
                                <p><b>Date:</b> {data.date}</p>
                            </div>
                            <div className="token-history-time">
                                <p><b>Time:</b> {data.time}</p>
                            </div>
                            <div className="token-history-moreInfo">
                                <div onClick={() => getDetails(data)}>
                                    <p><b>Details</b></p>
                                </div>
                            </div>
                        </div>
                        <div className = "horizontal-line" > </div> 
                        </>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default TokenHistory;
