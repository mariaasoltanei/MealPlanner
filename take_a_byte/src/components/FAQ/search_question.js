import React from "react";
import './css/search_question.css'
import {InputAdornment, TextField} from "@mui/material";
import searchIcon from '../../assets/images/search_icon.png'

function SearchQuestion() {
    //TODO 2: IMPLEMENT SEARCH BAR
    return (
        <div className="div_search_area">
            <div className="div_search_gradient">
                <div className="div_search_opaque">
                    <div className="div_search_bar">
                    <h3>Search what you are looking for</h3>
                        <TextField
                            id="input-with-icon-textfield"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="end">
                                        <img alt="" id="search_icon" src={searchIcon}/>
                                    </InputAdornment>
                                ),
                            }}
                            variant="standard"
                        />
                    </div>

                </div>
            </div>
        </div>
    );
}

export default SearchQuestion;
