import React from 'react';
import { connect } from 'react-redux';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import useStyles from './SearchStyles'

const Search = ({dispatch, setQuery}) => {
    const { search, inputRoot, inputInput, positionRight} = useStyles();

    const handleSearch = (e) => {
        setQuery(e.target.value)
    }
    
    return (
        <div className={search}>
           
            <div className={positionRight}>
                <SearchIcon />
            </div>

            <div className={positionRight}>
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
            />
            </div>
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


