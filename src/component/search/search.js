import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import axios from 'axios';
import ImageResult from '../image-result/image-result';

class Search extends Component {
    state = {
        searchText: '',
        amount: 15,
        apiURL: 'https://pixabay.com/api/',
        apiKey: '19738631-90c6b231fd7ade9f936910257',
        images: []
    }

    onSearchTextChangeHandler = e => {
        const val = e.target.value;
        this.setState({ [e.target.name]: val });
        if (val === '') {
            this.setState({ images: [] })
        } else {
            axios.get(`${this.state.apiURL}/?key=${this.state.apiKey}&q=${this.state.searchText}
                &image_type=photo&per_page=${this.state.amount}&safesearch=true`)
                .then(res => this.setState({ images: res.data.hits }))
                .catch(err => console.log("Error Found", err))
        }
    }


    onAmountChange = (e) => {
        this.setState({ amount: e.target.value });
        console.log(this.state.amount);
    }

    render() {
        console.log(this.state.images);
        return (
            <div style={{ marginTop: 70 }}>
                <TextField
                    onChange={this.onSearchTextChangeHandler}
                    label="Search For Images"
                    fullWidth={true}
                    name="searchText"
                    value={this.state.searchText} />
                <br />
                <div style={{ marginTop: 10 }}>
                    <InputLabel>Amount</InputLabel>
                    <Select
                        name="amount"
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        // defaultValue={this.state.amount}
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                    >
                        <MenuItem value={5}>Five</MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={15}>Fifteen</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                        <MenuItem value={50}>Fifty</MenuItem>
                    </Select>
                </div>
                <br />
                {this.state.images.length > 0 ? (<ImageResult images={this.state.images} />) : null}
            </div >
        )
    }
}

export default Search;