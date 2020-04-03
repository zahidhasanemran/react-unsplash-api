import React, { Component } from 'react'
import axios from 'axios'

export default class LatestPhotos extends Component {
    
    state = {
        photos: [],
        page: 1,
        photosLoading: true
    }

    componentDidMount(){
        axios.get('https://api.unsplash.com/photos/?client_id=7e76dc944a56a4f7316202dda24c45c5f481c4997d02ce179de0d99fd122fc13&per_page=16&page='+this.state.page)
        .then(res => {
            this.setState({
                photos: res.data,
                photosLoading: false
            })
        })
        .catch(
            err => {
                alert("Failed")
            }
        )
        this.setState({page: this.state.page + 1 })
    }

    nextPage = () => {
        this.setState({page: this.state.page + 1 })
        axios.get('https://api.unsplash.com/photos/?client_id=7e76dc944a56a4f7316202dda24c45c5f481c4997d02ce179de0d99fd122fc13&per_page=16&page='+this.state.page)
        .then(res => {
            this.setState({photos: res.data})
        })
        .catch(
            err => {
                alert("Failed")
            }
        )
        // this.setState({page: this.state.page + 1 })
    }

    render() {

        

        return(
            <React.Fragment>
                {
                    this.state.photos.map((photo)=>(
                        <div key={photo.id} className="col-lg-3">
                            <div className="single_photo_item">
                                <a href="/" className="d-block">
                                    <div className="img_wrapper" style={{height: "200px", width: "100%", objectFit: "cover"}}>
                                        <img style={{width: "100%", height: "100%", objectFit: "cover"}} src={photo.urls.small} alt={photo.description}/>
                                    </div>
                                    <h5>Image Description</h5>
                                <p className="cat-name">by - {photo.user.first_name} {photo.user.last_name}</p>
                                </a>
                            </div>
                        </div>
                    ))
                }

                <div className="col-lg-12">
                    <div className="load-more-btn text-center mt-5">
                        <button onClick={this.nextPage} className="btn btn-primary">Load Page {this.state.page}</button>
                    </div>
                </div>

            </React.Fragment>
        )
        


        // console.log(this.state.photos)
        
        // return (
        //     <div className="single_photo_item">
        //         <a href="/" className="d-block">
        //             <img src="http://placehold.it/600x350" alt=""/>
        //             <h5>Photo Name</h5>
        //             <p className="cat-name">Nature</p>
        //         </a>
        //     </div>
        // )


        
    }
}
