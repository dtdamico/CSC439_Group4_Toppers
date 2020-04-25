import React from "react";

export class About extends React.Component {
  render() {
    return (
      <div className="pageBody">
        <h2 style={{ textAlign: "center" }}>ABOUT TOPPERS</h2>
        <div className="flavor" style={{ color: "black" }}>
          <p className="flavorInfo">
            That’s because at Toppers Pizza we believe decisions about what goes
            into your pizza should be made in a kitchen, not a boardroom. In
            fact, we don’t just believe it—we live it. Ask anyone on Team
            Toppers and they’ll tell you:
          </p>
          <p className="flavorInfo">
            Those details begin with a friendly face, making dough fresh daily
            and insisting on real Wisconsin cheese (and nothing but real
            Wisconsin cheese), and they don’t stop until we’ve double-checked
            your order and run (literally run) to your door so the food is still
            hot. Some place “corporate” might say we do this by sticking to a
            set of core values. Maybe so, but at Toppers, it’s just who we are.
            We:
          </p>
          <p className="flavorInfo">
            Our belief in doing pizza right—respecting pizza—has been central to
            Toppers since before we even opened our doors. And we’re not the
            only ones who feel this way. See how Toppers has caught on over the
            years:
          </p>
        </div>
      </div>
    );
  }
}
