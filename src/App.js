import React, { useEffect, useState } from "react";
import Header from "./components/header";
import Board from "./components/board";
import Cookies from 'js-cookies';
import './App.css';
import loader from './assets/loader.gif'

// App component is the main component rendering Header and Board
export default function App() {
    // State to store tickets, users, filter, and loading status
    const [tickets, setTickets] = useState([]);
    const [users, setUsers] = useState([]);
    const [filter, setFilter] = useState({ "grouping": "status", "ordering": "title" });
    const [loading, setLoading] = useState(false);

    // Function to update filter based on key and value
    const changeFilter = (key, val) => {
        if (key === 'grouping') {
            setFilter(prvFilter => {
                return {
                    ...prvFilter,
                    grouping: val,
                }
            })
        } else if (key === 'ordering') {
            setFilter(prvFilter => {
                return {
                    ...prvFilter,
                    ordering: val,
                }
            })
        }
    }

    // Effect to load saved filter from localStorage on component mount
    useEffect(() => {
        const saved_filter = JSON.parse(localStorage.getItem('filter'));
        if (saved_filter) {
            setFilter(saved_filter);
        }
    }, []);

    // Effect to save filter to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem('filter', JSON.stringify(filter));
    }, [filter]);

    // Effect to fetch data (tickets and users) from the API on component mount
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                // Fetch data from API
                const _data = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment');
                const obj = await _data.json();
                setLoading(false);

                // Set tickets and users state with the fetched data
                setTickets(obj.tickets);
                setUsers(obj.users);
            } catch (err) {
                setLoading(false);
                console.log(err);
            }
        };

        // Invoke fetchData function
        fetchData();
    }, []);

    // Render Header and Board components
    return (
        <>
            <Header filter={filter} changeFilter={changeFilter} />
            {loading ? (
                // Loader component when data is being fetched
                <div className="loader-div">
                    <img src={loader} alt="Loading" />
                </div>
            ) : (
                // Board component displaying tickets based on filter
                <Board filter={filter} tickets={tickets} users={users} />
            )}
        </>
    )
}