import React, { Component } from "react";
import axios from "axios";
import Result from "./Result";

export class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      display: [],
      final: [],
      change: false,
      searchIn: "",
      lang: [],
      langIn: "All",
      typeIn: "All",
      owner: "",
      types: ["All", "Sources", "Forks", "Archived", "Mirror"]
    };
  }
  componentDidMount() {
    axios
      .get(`https://api.github.com/users/supreetsingh247/repos`)
      .then(resp => {
        this.setState(
          {
            display: resp.data,
            owner: resp.data[0].owner.login
          },
          () => {
            const list = [
              ...new Set(
                this.state.display.map(item => {
                  {
                    return item.language;
                  }
                })
              )
            ].filter(a => {
              return a !== null;
            });
            this.setState({ lang: list });
          }
        );
      })

      .catch(error => {
        console.log(error);
      });
  }
  handleSearch = e => {
    this.setState(
      {
        change: true,
        searchIn: e.target.value
      },
      this.fill
    );
  };
  handleLang = e => {
    this.setState(
      {
        change: true,
        langIn: e.target.value
      },
      this.fill
    );
  };
  Clear = () => {
    this.setState(
      {
        change: true,
        searchIn: "",
        langIn: "All",
        typeIn: "All"
      },
      this.fill
    );
  };
  handleType = e => {
    this.setState(
      {
        change: true,
        typeIn: e.target.value
      },
      this.fill
    );
  };
  fill = () => {
    const temp = this.state.display.filter(item => {
      return (
        (this.state.searchIn.length === 0 ||
          (item.name &&
            item.name
              .toLowerCase()
              .indexOf(this.state.searchIn.toLowerCase()) !== -1) ||
          (item.description &&
            item.description
              .toLowerCase()
              .indexOf(this.state.searchIn.toLowerCase()) !== -1)) &&
        (this.state.langIn === "All" ||
          (item.language &&
            item.language.toLowerCase() === this.state.langIn.toLowerCase())) &&
        (this.state.typeIn === "All" ||
          (item.has_issues && this.state.typeIn === "Sources") ||
          (item.fork && this.state.typeIn === "Forks") ||
          (item.archived && this.state.typeIn === "Archived") ||
          (item.mirror_url && this.state.typeIn === "Mirror"))
      );
    });
    this.setState({ final: temp });
  };

  render() {
    return (
      <div className="main">
        <div className="Search">
          <form>
            <input
              className="searchin"
              type="text"
              value={this.state.searchIn}
              placeholder="Find a repository..."
              onChange={this.handleSearch}
            />
            <span id="drop">
              Type :{" "}
              <select
                type="type"
                value={this.state.typeIn}
                onChange={this.handleType}
              >
                {this.state.types.map(opt => {
                {
                  return (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  );
                }
              })}
              </select>
            </span>
            <span id="drop">
              Language :{" "}
              <select
                type="language"
                value={this.state.langIn}
                onChange={this.handleLang}
              >
                <option value="All">All</option>
                {this.state.lang.map(lan => {
                  {
                    return (
                      <option key={lan} value={lan}>
                        {lan}
                      </option>
                    );
                  }
                })}
              </select>
            </span>
          </form>
        </div>
        {this.state.change &&
          (this.state.searchIn.length !== 0 ||
            this.state.typeIn !== "All" ||
            this.state.langIn !== "All") && (
            <div className="resultStatistics">
              <div className="res">
                {" "}
                <b>{this.state.final.length}</b> result for{" "}
                <b>{this.state.typeIn !== "All" ? this.state.typeIn : null}</b>{" "}
                repositories matching <b>{this.state.searchIn}</b>{" "}
                {this.state.langIn !== "All" ? `written in` : null}
                <b>
                  {this.state.langIn !== "All" ? ` ${this.state.langIn}` : null}
                </b>
              </div>
              <button id="clear" onClick={this.Clear}>
                <svg
                  className="octicon octicon-x issues-reset-query-icon mt-1"
                  viewBox="0 0 12 16"
                  version="1.1"
                  width="12"
                  height="16"
                  aria-hidden="true"
                >
                  <path d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z" />
                </svg>
                Clear filter
              </button>
            </div>
          )}
        {this.state.change ? (
          <Result owner={this.state.owner} data={this.state.final} />
        ) : (
          <Result data={this.state.display} />
        )}
      </div>
    );
  }
}

export default Main;
