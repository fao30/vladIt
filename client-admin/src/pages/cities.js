import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCities } from "../store/actionCreator/itemAction";
import Select from 'react-select';


export default function Cities() {
  const { cities, isLoading } = useSelector((state) => state.city);
  const dispatch = useDispatch();
  const [cat, setCat] = useState([]);

  useEffect(() => {
    dispatch(fetchCities());
  }, []);

  useEffect(() => {
    let temporary = cities.map((e) => {
      return {
        value: e?.name,
        label: e?.name,
      }
    })
    temporary.shift()
    setCat(temporary)
  }, [cities])
  
  return (
    <>
      {isLoading ? (
        <>
          LOADING
          <br />
          BOSKU
          <br />
          HARAP
          <br />
          SABAR
        </>
      ) : (
        <>
        
          <br />
          <div>
            <label> PLEASE SELECT YOUR CITY</label>
                <Select
                  className="basic-single"
                  classNamePrefix="select"
                  isDisabled={false}
                  isLoading={false}
                  isSearchable={true}
                  name="color"
                  options={cat}
                  />
          </div>
        </>
      )}
    </>
  );
}
