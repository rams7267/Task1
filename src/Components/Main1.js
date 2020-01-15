import React, { Component } from "react";
import axios from "axios";
import Result from "./Result";

export class Main1 extends Component {
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
      document.addEventListener("click",(e)=>{
        //alert(e.target.nodeName);
            const details = document.querySelectorAll("details");
            // Add the onclick listeners.
            details.forEach((targetDetail) => {
              targetDetail.addEventListener("click", () => {
                // Close all the details that are not targetDetail.
                details.forEach((detail) => {
                  if (detail !== targetDetail) {
                    detail.removeAttribute("open");
                  }
                });
              });
            });
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
        {/* <div className="Search">
          <form>
            <input
             style={{float:"left"}}
              className="searchin"
              type="text"
              value={this.state.searchIn}
              placeholder="Find a repository..."
              onChange={this.handleSearch}
            /> */}
             <div id="filter_div">
                <div className="filter_div_item">
                    <input type="text" onChange={this.handleSearch} value={this.state.searchIn} name="filter_search" id="filter_search" placeholder="Find a repository..." />
                </div>
                <div className="filter_div_item" style={{display:"grid", gridTemplateColumns:"1fr 1fr", gridGap:"7px"}}>
                <div style={{float:"left"}}>
              <details id="type_options">
                <summary className = "summary_btn" aria-haspopup="menu" role="button">
                  <font style={{ fontSize: "14px", fontWeight: "100" }}>
                    Type:
                  </font>
                  <span id="type_value">&nbsp;&nbsp;All</span>
                  <span className = "caret"></span>
                </summary>

                <details-menu class="menu_div">
                  <div className = "menu_modal">
                    <header className = "menu_header">
                      <span className = "menu_title">Select type</span>
                    </header>
                    <div className = "menu_list">
                      <label className = "list_item" aria-checked="true" u="0">
                        <input
                          type="radio"
                          onChange={e => {
                            document.getElementById("type_value").innerHTML =
                              "&nbsp;&nbsp;All";
                            document
                              .getElementById("type_options")
                              .removeAttribute("open");

                              this.setState({typeIn : "All",change: true,}, this.fill);
                          }}
                          name="type"
                          id="type_"
                          value=""
                          hidden="hidden"
                          data-autosubmit="true"
                          checked="checked"
                        />

                        <span className = "text-normal" data-menu-button-text="">
                          All
                        </span>
                      </label>
                      <label className = "list_item">
                        <input
                          type="radio"
                          onChange={e => {
                            document.getElementById("type_value").innerHTML =
                              "&nbsp;&nbsp;" + e.target.value;
                            document
                              .getElementById("type_options")
                              .removeAttribute("open");
                              this.setState({typeIn : e.target.value ,change: true,}, this.fill);
                          }}
                          name="type"
                          id="type_source"
                          value="Sources"
                          hidden="hidden"
                          data-autosubmit="true"
                        />

                        <span className = "text-normal" data-menu-button-text="">
                          Sources
                        </span>
                      </label>
                      <label className = "list_item">
                        <input
                          type="radio"
                          onChange={e => {
                            document.getElementById("type_value").innerHTML =
                              "&nbsp;&nbsp;" + e.target.value;
                            document
                              .getElementById("type_options")
                              .removeAttribute("open");
                              this.setState({typeIn : e.target.value ,change: true,}, this.fill);
                          }}
                          name="type"
                          id="type_fork"
                          value="Forks"
                          hidden="hidden"
                          data-autosubmit="true"
                        />

                        <span className = "text-normal" data-menu-button-text="">
                          Forks
                        </span>
                      </label>
                      <label className = "list_item">
                        <input
                          type="radio"
                          onChange={e => {
                            document.getElementById("type_value").innerHTML =
                              "&nbsp;&nbsp;" + e.target.value;
                            document
                              .getElementById("type_options")
                              .removeAttribute("open");
                              this.setState({typeIn : e.target.value ,change: true,}, this.fill);
                          }}
                          name="type"
                          id="type_archived"
                          value="Archived"
                          hidden="hidden"
                          data-autosubmit="true"
                        />

                        <span className = "text-normal" data-menu-button-text="">
                          Archived
                        </span>
                      </label>
                      <label className = "list_item">
                        <input
                          type="radio"
                          onChange={e => {
                            document.getElementById("type_value").innerHTML =
                              "&nbsp;&nbsp;" + e.target.value;
                            document
                              .getElementById("type_options")
                              .removeAttribute("open");
                              this.setState({typeIn : e.target.value ,change: true,}, this.fill);
                          }}
                          name="type"
                          id="type_mirror"
                          value="Mirror"
                          hidden="hidden"
                          data-autosubmit="true"
                        />
                        <span className = "text-normal" data-menu-button-text="">
                          Mirrors
                        </span>
                      </label>
                    </div>
                  </div>
                </details-menu>
              </details>
            </div>
            {/* Language details */}
            <div>
              <details id="language_options">
                <summary className = "summary_btn" aria-haspopup="menu" role="button">
                  <font style={{ fontSize: "14px", fontWeight: "100" }}>
                    Language:
                  </font>
                  <span data-menu-button="" id="language_value">
                    &nbsp;&nbsp;{this.state.langIn != "" ? this.state.langIn : "All"}
                  </span>
                  <span className = "caret"></span>
                </summary>

                <details-menu class="menu_div" role="menu">
                  <div className = "menu_modal">
                    <header className = "menu_header">
                      <span className = "menu_title">Select language</span>
                    </header>
                    <div className = "menu_list">
                      <label className = "list_item" aria-checked="true" tabIndex="0">
                        <input
                          type="radio"
                          onChange={e => {
                            document
                              .getElementById("language_options")
                              .removeAttribute("open");
                            this.setState({langIn : "All",change: true,}, this.fill);
                          }}
                          name="language"
                          id="language_"
                          value="All"
                          hidden="hidden"
                          data-autosubmit="true"
                          checked="checked"
                        />
                        <span className = "text-normal" data-menu-button-text="">
                          All
                        </span>
                      </label>
                      <label className = "list_item">
                        <input
                          type="radio"
                          onChange={e => {
                            document
                              .getElementById("language_options")
                              .removeAttribute("open");
                            this.setState({langIn : e.target.value,change: true,}, this.fill);
                          }}
                          name="language"
                          id="language_html"
                          value="HTML"
                          hidden="hidden"
                          data-autosubmit="true"
                        />
                        <span className = "text-normal" data-menu-button-text="">
                          HTML
                        </span>
                      </label>
                      <label className = "list_item">
                        <input
                          type="radio"
                          onChange={e => {
                            document
                              .getElementById("language_options")
                              .removeAttribute("open");
                              this.setState({langIn : e.target.value,change: true,}, this.fill);                          }}
                          name="language"
                          id="language_javascript"
                          value="JavaScript"
                          hidden="hidden"
                          data-autosubmit="true"
                        />
                        <span className = "text-normal" data-menu-button-text="">
                          JavaScript
                        </span>
                      </label>
                      <label className = "list_item">
                        <input
                          type="radio"
                          onChange={e => {
                            document
                              .getElementById("language_options")
                              .removeAttribute("open");
                              this.setState({langIn : e.target.value,change: true,}, this.fill);                          }}
                          name="language"
                          id="language_css"
                          value="CSS"
                          hidden="hidden"
                          data-autosubmit="true"
                        />
                        <span className = "text-normal" data-menu-button-text="">
                          CSS
                        </span>
                      </label>
                    </div>
                  </div>
                </details-menu>
              </details>
            </div>
                </div>
            
          {/* </form> */}
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

export default Main1;
