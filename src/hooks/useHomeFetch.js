import { useEffect, useState } from "react";
import API from '../API';
import { isPersistedState } from "../helpers";

const initialState = {
    page: 0,
    results: [],
    total_pages: 0,
    total_result: 0
};

export  const useHomeFetch = () => {
const [state, setState] = useState(initialState);
const [loading, setLoading] = useState(false);
const [error, setError] = useState(false);
const [searchTerm, setSearchTerm] = useState('');
const [isLoadMore, setIsLoadMore] = useState(false);

const fetchMovies = async (searchTerm, page) => {
    try {
        setError(false);
        setLoading(true);

        const movies = await API.fetchMovies(searchTerm,page);

        setState(prev => ({
            ...movies,
            result : page > 1 ? [...prev.results, ...movies.results] : [...movies.results]
        }));

    } catch (error) {
        setError(true);        
    }
    setLoading(false);
}

useEffect(() => {
    if(!searchTerm) {
        const sessionState = isPersistedState('homeState');

        if(sessionState) {
            console.log('data from session storage');
            setState(sessionState);
            return;
        }
    }
    console.log('data from API');
    setState(initialState);
    fetchMovies(searchTerm,1);
}, [searchTerm])

useEffect(() => {
    if(!isLoadMore) {
        return;
    }
    fetchMovies(searchTerm,state.page + 1);
    setIsLoadMore(false);
}, [isLoadMore,searchTerm,state.page])

useEffect(() => {
    if(!searchTerm) {
        sessionStorage.setItem('homeState',JSON.stringify(state))
    }
}, [searchTerm, state])

return {state, loading, error, searchTerm, setSearchTerm, setIsLoadMore};

}