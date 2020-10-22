import React, { useState } from 'react';
import { connect } from 'react-redux';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import useStyles from './SearchStyles'
// import LinearProgress from '@material-ui/core/LinearProgress';

const Search = ({dispatch, query}) => {
    const { search, searchIcon, inputRoot, inputInput} = useStyles();
    const [keyword, setKeyword] = useState();

    const handleSearch = (e) => {
       setKeyword(e.target.value)
    }
    
    const handleSubmit = (e) => { 
        e.preventDefault();
        setKeyword(query.value);
        query.value = "";
        dispatch({type: 'SET_KEYWORD', payload: keyword})
    }
    return (
        <div className={search}>
            <div className={searchIcon}>
                <SearchIcon />
            </div>
            
             <form onSubmit={handleSubmit}> 
             <InputBase
                placeholder="search"
                classes={{
                    root: inputRoot,
                    input: inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
                onChange={handleSearch}
                id="query"
                inputComponent="input"
                inputRef={el => (query = el)} 
            />
            </form>
            {/* {query && <LinearProgress />} */}
        </div>
    )
}

const mapStoreToProps = (reduxState) => {
    return {
        songs: reduxState.songs,
        search: reduxState.search
    };
  };
export default connect(mapStoreToProps)(Search);


/* <SearchBar 
                onChange={(value) => setKeyword(value)}
                onRequestSearch={handleSearch}
                placeholder="search"
                inputProps={{ 'aria-label': 'search' }}
                className={inputInput}
                searchIcon={<></>}
                // autoFocus
            /> */




