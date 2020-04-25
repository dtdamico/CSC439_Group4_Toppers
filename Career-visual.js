import React from "react";

export class CareerVisual extends React.Component {
  render() {
    return (
      <div className="pageBody">
        <div className="pageTitle"></div>
        <div id="jobIntro"></div>
        <div className="menuItemGroup">
          <div className="menuItemTitle">{"Apply to a Local Toppers"}</div>
          <div className="flavor">
            <p>
              <a
                href="https://www.toppers.com/Portals/0/Documents/Toppers_Application.pdf"
                rel="noopener noreferrer"
                target="_blank"
              >
                {"Download"}
              </a>
              {" the application"}
            </p>
            <button onClick={() => this.props.onClick(4)}>
              {"Find a Local Toppers"}
            </button>
          </div>
        </div>
        <div className="menuItemGroup">
          <div className="menuItemTitle">
            <a
              href="https://toppersmadison.applicantstack.com/x/openings"
              rel="noopener noreferrer"
              target="_blank"
            >
              {"Apply for Toppers Corporate Here"}
            </a>
          </div>
        </div>
        <div className="menuItemGroup">
          <div className="menuItemTitle">
            <a
              href="https://www.toppersfranchise.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              {"Apply to Own a Toppers Franchise Here"}
            </a>
          </div>
        </div>
      </div>
    );
  }
}
