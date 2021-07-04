import React,{useState,useEffect} from 'react';
import {NativeSelect, FormControl} from '@material-ui/core';
import { fetchCountries } from '../../api/index';
import styles from './CountryPicker.module.css';



const CountryPicker = ({handleCountryChange}) => {
    //usestatte hooks
    const [fetchedCountries, setFethchedCountries] = useState([]);
    //useEffect hooks
    useEffect(() =>{
        const fetchAPI = async () =>{
            setFethchedCountries(await fetchCountries());
        }
        fetchAPI();
    }, [setFethchedCountries]);
    console.log(fetchedCountries);
    return (
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)} >
                <option value="">Global</option>
                {fetchedCountries.map((country,i) => <option key={i} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    );
};

export default CountryPicker;