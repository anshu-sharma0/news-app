import React, { Component } from 'react';
import NewsItem from './newsitem';
import Variants from './common/loader';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import PropTypes from 'prop-types'
export default class News extends Component {
    static defaultProps = {
        country: "in",
        pageSize: 9
    }
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number
    }

    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalResults: 0
        };
    }

    async componentDidMount() {
        await this.fetchArticles();
        // this.setState({loading: true,})
    }

    async fetchArticles() {
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=8310857f796b4e19a4e694ba68d47372&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        const response = await fetch(url);
        const data = await response.json();
        this.setState({
            articles: data.articles,
            totalResults: data.totalResults
        });
    }

    handlePrev = async () => {
        if (this.state.page > 1) {
            // this.setState({loading: true,})
            this.setState(prevState => ({
                page: prevState.page - 1,
                // loading: false,
            }));
            await this.fetchArticles();
        }
    };

    handleNext = async () => {
        if ((this.state.page + 1) <= Math.ceil(this.state.totalResults / this.props.pageSize)) {
            // this.setState({loading: true,})
            this.setState(prevState => ({
                page: prevState.page + 1,
                // loading: false,
            }));
            await this.fetchArticles();
        }
    };

    render() {
        return (
            <div className='container my-3'>
                {/* {this.state.loading && <Skeleton />} */}
                <div className="row">
                    {this.state.articles.map(element => (
                        <div className="col-sm-6 col-md-4  d-flex justify-content-center" key={element?.url}>
                            <NewsItem title={element?.title} description={element?.description} imgUrl={element?.urlToImage} newsUrl={element?.url} />
                        </div>
                    ))}
                </div>
                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrev}>&#8592; Previous</button>
                    <button disabled={this.state.page >= Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNext}>Next &rarr;</button>
                </div>
            </div>
        );
    }
}
