import React, { Component } from 'react';
import { API_KEY, PATH_BASE, PATH_MOVIE } from '../../api';
import { Link } from 'react-router-dom';
import CircularProgressbar from 'react-circular-progressbar';
import CastList from '../../components/Cast_list';
import { NavLink } from 'react-router-dom';
import { imgSrc } from '../../utils';
import ModalVideo from 'react-modal-video'
import './index.css';

class Movie extends Component {

  constructor(props) {
    super(props);

    this.state = {
       isOpen: false,  
      movie: {
        genres: [],
        videos: {
          results: []
        },
        credits: {
          cast: []
        },
        images: {
          backdrops: []
        }
      },
      favorited: false,
      toWatchLater: false,
       credits: {},      
    };
     this.openVedioModal = this.openVedioModal.bind(this)
  }

  favoriteMovie = () => {
    this.setState({ favorited: true });
    this.props.onFavoriteSelect(this.state.movie.id, 'favorites');
  }

  unfavoriteMovie = () => {
    this.setState({ favorited: false });
    this.props.onFavoriteDeselect(this.state.movie.id, 'favorites');
  }

  addWatchLaterMovie = () => {
    this.setState({ toWatchLater: true });
    this.props.onFavoriteSelect(this.props.id, 'watchLater');
  }

  removeWatchLaterMovie = () => {
    this.setState({ toWatchLater: false });
    this.props.onFavoriteDeselect(this.props.id, 'watchLater');
  }

  processLists = (listObj, id, state) => {
    if (listObj) {
      Object.keys(listObj).forEach((key) => {
        const stateObject = () => {
          const obj = {};
          obj[state] = true;
          return obj;
        }
        if (listObj[key] === Number(id)) {
          this.setState(stateObject);
        }
      });
    }
  }

  componentWillMount = () => {
    const MOVIE_ID = this.props.match.params.id;

    fetch(`${PATH_BASE}${PATH_MOVIE}/${MOVIE_ID}?api_key=${API_KEY}&append_to_response=videos,credits,images`)
    .then(response => response.json())
    .then(movie => (
      this.setState({ movie })
    ));
  }

  componentWillReceiveProps = (nextProps) => {
    if (nextProps.authenticated){
      this.processLists(nextProps.watchLater, nextProps.id, 'toWatchLater');
      this.processLists(nextProps.favorites, this.props.id, 'favorited');
    }
  }

  componentDidMount = () => {
    if (this.props.authenticated){
      this.processLists(this.props.favorites, this.props.id, 'favorited');
      this.processLists(this.props.watchLater, this.props.id, 'toWatchLater');
    }
  }

  renderFavHeart = () => {
    if (this.props.authenticated){
      return (
        this.state.favorited ?
          <svg onClick={() => this.unfavoriteMovie()} className="movie__action action__favorite is-true" viewBox="0 0 13 12" xmlns="http://www.w3.org/2000/svg"><path d="M12.903 3.583C12.713 1.507 11.245 0 9.405 0 8.18 0 7.058.66 6.427 1.717 5.8.647 4.725 0 3.52 0 1.68 0 .21 1.507.02 3.583c-.015.092-.076.574.11 1.362.267 1.135.886 2.168 1.79 2.986l4.502 4.087 4.58-4.086c.902-.817 1.52-1.85 1.79-2.985.185-.787.124-1.27.11-1.362z"/></svg>
        :
          <svg onClick={() => this.favoriteMovie()} className="movie__action action__favorite" viewBox="0 0 13 12" xmlns="http://www.w3.org/2000/svg"><path d="M12.903 3.583C12.713 1.507 11.245 0 9.405 0 8.18 0 7.058.66 6.427 1.717 5.8.647 4.725 0 3.52 0 1.68 0 .21 1.507.02 3.583c-.015.092-.076.574.11 1.362.267 1.135.886 2.168 1.79 2.986l4.502 4.087 4.58-4.086c.902-.817 1.52-1.85 1.79-2.985.185-.787.124-1.27.11-1.362z"/></svg>
      )
    }
    else {
      return (
        <Link to="/login">
          <svg className="movie__action action__favorite" viewBox="0 0 13 12" xmlns="http://www.w3.org/2000/svg"><path d="M12.903 3.583C12.713 1.507 11.245 0 9.405 0 8.18 0 7.058.66 6.427 1.717 5.8.647 4.725 0 3.52 0 1.68 0 .21 1.507.02 3.583c-.015.092-.076.574.11 1.362.267 1.135.886 2.168 1.79 2.986l4.502 4.087 4.58-4.086c.902-.817 1.52-1.85 1.79-2.985.185-.787.124-1.27.11-1.362z"/></svg>
        </Link>
      )
    }
  }

  renderWatchLaterClock = () => {
    if (this.props.authenticated){
      return (
        this.state.toWatchLater ?
          <svg onClick={() => this.removeWatchLaterMovie()} className="movie__action action__watchlater is-true" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg"><path d="M7.52.1C3.44.1.14 3.4.14 7.5c0 4.06 3.3 7.37 7.38 7.37s7.38-3.3 7.38-7.4C14.9 3.42 11.6.1 7.52.1zm3.26 9.52c-.12.18-.36.24-.55.12l-2.95-1.9-.05-.03H7.2l-.02-.04-.02-.03-.02-.03-.02-.03v-.04-.08-.05l.02-4.8c0-.23.18-.4.4-.4.2 0 .37.17.38.38l-.02 4.6 2.76 1.78c.2.12.24.37.12.55v.02z"/></svg>
        :
          <svg onClick={() => this.addWatchLaterMovie()} className="movie__action action__watchlater" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg"><path d="M7.52.1C3.44.1.14 3.4.14 7.5c0 4.06 3.3 7.37 7.38 7.37s7.38-3.3 7.38-7.4C14.9 3.42 11.6.1 7.52.1zm3.26 9.52c-.12.18-.36.24-.55.12l-2.95-1.9-.05-.03H7.2l-.02-.04-.02-.03-.02-.03-.02-.03v-.04-.08-.05l.02-4.8c0-.23.18-.4.4-.4.2 0 .37.17.38.38l-.02 4.6 2.76 1.78c.2.12.24.37.12.55v.02z"/></svg>
      )
    }
    else {
      return (
        <Link to="/login">
          <svg className="movie__action action__watchlater" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg"><path d="M7.52.1C3.44.1.14 3.4.14 7.5c0 4.06 3.3 7.37 7.38 7.37s7.38-3.3 7.38-7.4C14.9 3.42 11.6.1 7.52.1zm3.26 9.52c-.12.18-.36.24-.55.12l-2.95-1.9-.05-.03H7.2l-.02-.04-.02-.03-.02-.03-.02-.03v-.04-.08-.05l.02-4.8c0-.23.18-.4.4-.4.2 0 .37.17.38.38l-.02 4.6 2.76 1.78c.2.12.24.37.12.55v.02z"/></svg>
        </Link>
      )
    }
  }

  //modal for vedio play
  openVedioModal () {  
    this.setState({isOpen: true})
  }

  render () {

    const { movie } = this.state;

     //backdrops images
    const trialor = this.state.movie.videos.results.slice(0, 1); 

    const movieBackdropStyles = {
      backgroundImage: `url(https://image.tmdb.org/t/p/w1000${movie.backdrop_path})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover"
    };
    const overviewImages = movie.images.backdrops.slice(0, 4);  
    const detailList = (title, content) => {
      const contentText = Array.isArray(content) ? content.join(', ') : content;
      return (
        <div className="flex">
          <div className="bold-white-text list-title">{title}</div>
          <div className="list-content">{contentText}</div>
        </div>
      );
    };  

    return (
     <div className="modal" id={this.state.movie.id} key={this.state.movie.id}>              
              <div className="Movie-wrapper">  
               <NavLink exact={true} to="/" className="go-back go-back-top">
                Back to list
              </NavLink>    
                <div className="movie-content">
                  <div className="poster">
                    <img className="movie-poster" src={`https://image.tmdb.org/t/p/w500${this.state.movie.poster_path}`} alt=""/>
                    <div className="book-watch"><i class="fa fal fa-bookmark"></i>Bookmark</div>
                     {this.state.watch === true ? 
                        <div className="book-watch" onClick={() => this.addWatchList(this.state.movie)}><i class="fa fa-star-o"></i>Add watchlist
                        </div> 
                      :
                        <div className="book-watch" onClick={() => this.removeWatchList(this.state.movie.id)}><i class="fa fa-star-o"></i>Remove watchlist
                        </div>                                      
                    }                     
                               
                  </div>
            <div className="movie-data">
              <h1 className="movie-title">{this.state.movie.title}</h1>
              <div className="flex movie-details">
                <div className="movie-rating">
                  <CircularProgressbar
                    percentage={this.state.movie.vote_average * 10}
                    text={this.state.movie.vote_average}
                    strokeWidth={10}
                  />
                  <div>User Score</div>                  
                </div>
                <div className="vedio-player">
                  {
                    trialor.map((video, i) => (
                      <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId={video.key} onClose={() => this.setState({isOpen: false})} />
                    ))
                  }
                  <div onClick={this.openVedioModal}><i class="fa fas fa-play"></i><span>Play Vedio</span></div>
                  </div>
                <div className="flex detail-list">   
                  {detailList('Genre', this.state.movie.genres.map((genre) => genre.name))}
                  {detailList('Release Year', this.state.movie.release_date)}
                  {detailList('Duration', `${this.state.movie.runtime} min`)}
                </div>
              </div> 
              <div className="line"></div>
             <div className="overview">
              <h3 className="movie-overview-title">Overview</h3>
              <p className="movie-overview">{movie.overview}</p>
            </div>
              <div className="cast line"></div>
              <div className="cast-list">
                <h3 className="cast-title">Top Billed Cast</h3>
                <CastList cast={this.state.movie.credits.cast.slice(0, 5)} />   
              </div>     
              <div className="background line"></div>
              <div className="background-list">
                <h3 className="background-title">Background</h3>   
                <div className="gallery">  
                  {
                    overviewImages.map((image, i) => (
                      <div key={image.file_path}>
                        <img
                          alt="movie images"
                          src={imgSrc(image.file_path, 780)}
                          key={image.file_path}
                        />
                      </div>
                    ))
                  }
                </div>
              </div>
            </div>
          </div>
      </div>       
          
             
      </div>
    );
  }
}

export default Movie;

