import React, { Component, Fragment } from 'react'
import axios from 'axios'

export default class LatestPhotos extends Component {
    
    constructor(){
        super()
        this.state = {
            photos: [],
            page: 1,
            loading: true,
            keyword: '',
            searching: false,
            totalSearchPage: 0,
            totalSeachImg: 0
        }
    }
    

    componentDidMount(){
        axios.get('https://api.unsplash.com/photos/?client_id=7e76dc944a56a4f7316202dda24c45c5f481c4997d02ce179de0d99fd122fc13&per_page=12')
        .then(res => this.setState({
            photos: res.data,
            loading: false
        }))
        .catch()

        this.setState({page : this.state.page + 1})
        window.scrollTo(0, 0)
    }

    nextPage = () => {
        this.setState({loading : true})
        axios.get('https://api.unsplash.com/photos/?client_id=7e76dc944a56a4f7316202dda24c45c5f481c4997d02ce179de0d99fd122fc13&per_page=12&page='+this.state.page)
        .then(res => this.setState({
            photos: res.data,
            loading: false
        }))
        .catch()

        this.setState({page : this.state.page + 1})
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    prevPage = () => {
        axios.get('https://api.unsplash.com/photos/?client_id=7e76dc944a56a4f7316202dda24c45c5f481c4997d02ce179de0d99fd122fc13&per_page=12&page='+this.state.page-1)
        .then(res => this.setState({
            photos: res.data
        }))
        .catch()

        this.setState({page : this.state.prePage})
    }

    storeKeyword = (event) => {
        this.setState({
            keyword: event.target.value
            // console.log()
        })
    }

    doSearch = (event) => {
        event.preventDefault();
        
        axios.get('https://api.unsplash.com/search/photos/?client_id=7e76dc944a56a4f7316202dda24c45c5f481c4997d02ce179de0d99fd122fc13&query=' + this.state.keyword + '&per_page=12&page='+this.state.page)
        .then(res => this.setState({
            photos: res.data.results,
            loading: false,
            searching: true,
            totalSearchPage: res.data.total_pages,
            totalSeachImg: res.data.total
        }))
        .catch()
        this.setState({page : 2})
    }

    searchNext = () => {
        this.setState({loading : true})
        axios.get('https://api.unsplash.com/search/photos/?client_id=7e76dc944a56a4f7316202dda24c45c5f481c4997d02ce179de0d99fd122fc13&query=' + this.state.keyword + '&per_page=12&page='+this.state.page)
        .then(res => this.setState({
            photos: res.data.results,
            loading: false,
            searching: true,
            totalSearchPage: res.data.total_pages,
            totalSeachImg: res.data.total
        }))

        this.setState({page : this.state.page + 1})
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }



    render() { 

        var searcHeading = '';
        var loadBtn = '';
        var searchInfo = ''

        if(this.state.searching){
        searcHeading = <h2 style={{textAlign: 'left', marginBottom: '10px'}}>You search for {this.state.keyword}</h2>
        loadBtn = <button onClick={this.searchNext} className="btn btn-primary mx-3">Search Page {this.state.page}</button>
        searchInfo = <p>Total Pages: {this.state.totalSeachImg} | Page {this.state.page - 1} of {this.state.totalSearchPage}</p>
        }else{
            searcHeading = <h2 style={{textAlign: 'left', marginBottom: '10px'}}>Latest Photos</h2>
            loadBtn = <button onClick={this.nextPage} className="btn btn-primary mx-3">Load Page {this.state.page}</button>
            searchInfo = ''
        }

        // if(this.state.searching){
        //     
        // }else{
        //     
        // }

        if(this.state.loading === false){
            return (
                <Fragment>

                    <div className="row mb-4">
                        <div className="col-md-6 text-left d-flex flex-column">
                            {searcHeading} {searchInfo}
                        </div>
                        <div className="col-md-6 my-auto text-right">
                            <form onSubmit={this.doSearch}>
                                <input onChange={this.storeKeyword} value={this.state.keyword} type="text" />
                                <input type="submit" value="search"/>
                            </form>
                        </div>
                    </div>


                    <div className="row">
                        {
                            this.state.photos.map( (photo) => (
                                <div className="col-md-4" key={photo.id}>
                                <div className="single-photo-item">
                                    <a href="/" className="d-block">
                                        <div className="img_wrapper" style={{height: "250px", width: "100%", objectFit: "cover"}}>
                                            <img style={{width: "100%", height: "100%", objectFit: "cover"}} src={photo.urls.small} alt={photo.description}/>
                                        </div>
                                        <h5>Username: {photo.user.username}</h5>
                            <p className="cat-name">Likes: {photo.likes}</p>
                                    </a>
                                </div>
                            </div>
                            ))
                        }
                    </div>

                    <div className="col-lg-12">
                        <div className="load-more-btn text-center mt-5">
                            <button onClick={this.prevPage} className="btn btn-success">{this.state.page - 1}</button>
                            {loadBtn}
                            {/* <button className="btn btn-danger">Next Page</button> */}
                        </div>
                    </div>
                </Fragment>
            )

        }else{
            return( <div>
                <h2>Photo Loading ... :D </h2>
            </div>

            )
        }

        
            
        
        
    }
}
