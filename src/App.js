import React , { useEffect, useState} from "react";
import Header from "./components/header";
import Board from "./components/board";
import Cookies from 'js-cookies';
import './App.css';
import loader from './assets/loader.gif'


export default function App() {


    const [tickets , setTickets] = useState([]);
    const [users , setUsers] = useState([]);
    const [filter , setFilter] = useState({"grouping":"status","ordering":"title"});
    const [loading , setLoading] = useState(false);

    const changeFilter = (key , val) => {
        if(key === 'grouping'){
            setFilter( prvFilter => {
                return {
                    ...prvFilter,
                    grouping : val,
                }
            } )
        }else if(key === 'ordering'){
            setFilter( prvFilter => {
                return {
                    ...prvFilter,
                    ordering : val,
                }
            } )
        }
    }

    useEffect(() => {
        const saved_filter = JSON.parse(localStorage.getItem('filter'));
        if (saved_filter) {
            setFilter(saved_filter);
        }
      }, []);
    
    useEffect(() => {
        localStorage.setItem('filter' , JSON.stringify(filter));
    } , [filter]);


    useEffect(() => {
        const fetchData = async () => {
          try {

            setLoading(true);
            const _data = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment');
            const obj = await _data.json();
            setLoading(false);

            setTickets(obj.tickets);
            setUsers(obj.users);


          } catch (err) {
            setLoading(false);
            console.log(err);
          }
        };
        
        fetchData();
      }, []);


    return (
        <>
            <Header filter={filter} changeFilter={changeFilter}/>
            {loading ? (
                <div className="loader-div">
                    <img src={loader} alt="Loading" />
                </div>
            ) : (
                <Board filter={filter} tickets={tickets} users={users}/>
            )}
            
        </>
    )
}