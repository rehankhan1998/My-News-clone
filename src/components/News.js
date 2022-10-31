import React, { Component, useSyncExternalStore } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 8,
    category: "Genral",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  yescapital = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  // articles = [
  //   {
  //     source: { id: "bbc-sport", name: "BBC Sport" },
  //     author: "BBC Sport",
  //     title: "Shane Warne memorial - watch & follow updates",
  //     description:
  //       "Watch live coverage and follow text updates and tributes from the state memorial for Australian cricket legend Shane Warne at the Melbourne Cricket Ground.",
  //     url: "http://www.bbc.co.uk/sport/live/cricket/60916236",
  //     urlToImage:
  //       "https:////m.files.bbci.co.uk/modules/bbc-morph-sport-seo-meta/1.22.0/images/bbc-sport-logo.png",
  //     publishedAt: "2022-03-30T08:22:26.498888Z",
  //     content:
  //       "Former England bowler and BBC cricket presenter Isa Guha, who became a colleague of Warne's in the commentary box: \"It has been a strange few weeks - a lot of shock and then we did our own tribute at… [+396 chars]",
  //   },
  //   {
  //     source: { id: "espn-cric-info", name: "ESPN Cric Info" },
  //     author: null,
  //     title:
  //       "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
  //     description:
  //       "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
  //     url: "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
  //     urlToImage:
  //       "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
  //     publishedAt: "2020-04-27T11:41:47Z",
  //     content:
  //       "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]",
  //   },
  //   {
  //     source: { id: "espn-cric-info", name: "ESPN Cric Info" },
  //     author: null,
  //     title:
  //       "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
  //     description:
  //       "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
  //     url: "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
  //     urlToImage:
  //       "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
  //     publishedAt: "2020-03-30T15:26:05Z",
  //     content:
  //       "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]",
  //   },
  // ];
  constructor(props) {
    super(props);
    console.log("hello this is from news component");
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
    };
    document.title = `${this.yescapital(this.props.category)}-NewsMonkey`;
  }

  async updatenews() {
    this.props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedata = await data.json();
    this.setState({
      articles: parsedata.articles,
      totalResults: parsedata.totalResults,
      loading: false,
    });
    this.props.setProgress(100);
  }

  async componentDidMount() {
    this.updatenews();
    // console.log("Hello");
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&category=${this.props.category}&apiKey=083a0567a8fc464f8a03c4f028aa50d9&page=1&pageSize=${this.props.pageSize}`;
    // this.setState({ loading: true });
    // let data = await fetch(url);
    // let parsedata = await data.json();
    // console.log(parsedata);
    // this.setState({
    //   articles: parsedata.articles,
    //   totalResults: parsedata.totalResults,
    //   loading: false,
    // });
  }
  handleNextclick = async () => {
    this.setState({ page: this.state.page + 1 });
    this.updatenews();

    // if (
    //   !this.state.page + 1 >
    //  Math.ceil(this.state.totalResults / this.props.pageSize)
    // ) {
    //  }
    //  let url = `https://newsapi.org/v2/top-headlines?country=${
    //   this.props.country
    //  }&category=${this.props.category}&category=${
    // this.props.category
    //  }&apiKey=083a0567a8fc464f8a03c4f028aa50d9&page=${
    //    this.state.page + 1
    // }&pageSize=${this.props.pageSize}`;
    // this.setState({ loading: true });
    //  let data = await fetch(url);
    //   let parsedata = await data.json();
    // console.log(parsedata);
    // this.setState({
    //   page: this.state.page + 1,
    //  articles: parsedata.articles,
    //  loading: false,
    // totalResults: totalResults,
    //});
    // this.setState({ page: this.state + 1 });
    // this.updatenews();
  };

  handlePrevclick = async () => {
    //   let url = `https://newsapi.org/v2/top-headlines?country=${
    //     this.props.country
    //  }&category=${this.props.category}&category=${
    //    this.props.category
    //  }&apiKey=083a0567a8fc464f8a03c4f028aa50d9&page=${
    //   this.state.page - 1
    // }&pageSize=${this.props.pageSize}`;
    //    this.setState({ loading: true });
    //  let data = await fetch(url);
    //   let parsedata = await data.json();
    //  this.setState({
    //    page: this.state.page - 1,
    //   articles: parsedata.articles,
    //   loading: false,
    //   });
    this.setState({ page: this.state.page - 1 });
    this.updatenews();
  };

  fetchMoreData = async () => {
    this.setState({
      page: this.state.page + 1,
    });
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedata = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedata.articles),
      totalResults: parsedata.totalResults,
      loading: false,
    });
  };

  render() {
    return (
      <>
        <h2 className="text-center">
          NewsMonkey-Top Headlines from {this.yescapital(this.props.category)}
        </h2>
        {/* {this.state.loading && <Spinner />} */}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner />}
        >
          <div className="container">
            <div className="container my-3">
              <div className="row">
                {this.state.articles.map((element) => {
                  return (
                    <div className="col-md-4" key={element.url}>
                      <NewsItem
                        title={element.title ? element.title : ""}
                        description={element.description}
                        imageUrl={element.urlToImage}
                        newsUrl={element.url}
                        author={element.author}
                        date={element.publishedAt}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </InfiniteScroll>

        {/* <div className="container d-flex justify-content-between">
          <button
            type="button"
            className="btn btn-primary"
            onClick={this.handlePrevclick}
            disabled={this.state.page <= 1}
          >
            &larr; Previous
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={this.handleNextclick}
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
          >
            Next &rarr;
          </button>
        </div> */}
      </>
    );
  }
}

export default News;
