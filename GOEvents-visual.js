import React from "react";

const dList = [
  <div>
    <h2>{"WELCOME TO TOPPERS"}</h2>
    <p>
      {
        "We're throwing the ultimate pizza party. Join us for one of our grand opening events and if you’re one of the first 50 fanatics in line, you’ll win Free Food for a Year on us! The first 50 spots fill up quickly, so fans show up early, sometimes even “the night before” early."
      }
    </p>
    <p>
      {
        "And if winning Free Food for a Year wasn't enough, our Fanatics line-up to help celebrate each new store opening with pizza, games, and prizes."
      }
    </p>
    <p>
      {
        "From complimentary pizza and our World-Famous Topperstix to intense pizza-inspired challenges, the evening is sure to be legendary - the kind of evening your friends will talk about after it's over."
      }
    </p>
    <p>
      {
        "Pitch a tent, stay the night with our Team, and wake up to our grand opening (and the smell of pizza), a celebration of Toppers in your community."
      }
    </p>
    <p>
      <em>{"Together, we're building Toppers Nation."}</em>
    </p>
  </div>,
  <div>
    <h2>{"Upcoming Events"}</h2>
    <p>{"Come back soon!"}</p>
  </div>,
  <div>
    <h2>{"#First50 Event Rules"}</h2>
    <h3>{"How to win free food for a year and keep the pizza peace:"}</h3>
    <ol>
      <li className={"rules"}>{"Rule#1: Have FUN!"}</li>
      <li className={"rules"}>{"Rule#2: Join the First 50 line."}</li>
      <ul>
        <li>{"Must be at least 18 in order to be among the first 50"}</li>
        <li>
          {"Already 50 in line? Don't worry, there's more prizes to win!"}
        </li>
      </ul>
      <li className={"rules"}>{"Rule#3: Stay in line - DON'T leave"}</li>
      <li className={"rules"}>
        {"Rule#4: Make a $10 purchase once the store opens to"}
        <em>{"WIN FREE FOOD FOR A YEAR!"}</em>
      </li>
      <li>
        <small>{"Can only be redeemed at the location of the event"}</small>
      </li>
    </ol>
  </div>,
  <div>
    <h2>{"#First50 Event FAQs"}</h2>
    <h3>{'What does "Free Food for a Year" mean?'}</h3>
    <p>
      {
        "Free Food for a Year consists of one menu item (either Any Single Order of Topperstix, Single Order of Original Topperstix, Any House MyZA, or Any 2-Topping MyZA) every week for one year (equating to 52 meals)."
      }
    </p>
    <h3>
      {"My child is under 18 but still wants to participate. Is that cool?"}
    </h3>
    <p>
      {
        "They can certainly wait in line with you but you must be 18 years old to receive the prize. Once you have it, it is your yours to do whatever you want with it."
      }
    </p>
    <h3>{"When does the line start?"}</h3>
    <p>
      {
        "The line starts 24 hours before the store’s official opening. Check in with a Team Member once you arrive."
      }
    </p>
    <h3>{"Are we allowed to camp out?"}</h3>
    <p>{"Yes! It is encouraged. Bring your own tents and sleeping bags."}</p>
    <h3>{"Am I allowed to use the bathroom inside if I need to?"}</h3>
    <p>{"Yes. We don’t want anyone peeing their pants."}</p>
    <h3>
      {
        "What if I forget something at home? Am I allowed to leave the line and come back?"
      }
    </h3>
    <p>
      {
        "We suggest having a friend or family member bring you whatever you need, instead. If you leave, you forfeit your spot in line and will have to rejoin at the end of the line when you return."
      }
    </p>
    <h3>
      {
        "I'm not from around here. Can I use the prize at other Toppers locations?"
      }
    </h3>
    <p>
      {
        "Free food coupons may only be redeemed at the location that awarded them to you."
      }
    </p>
    <h3>{"Still have questions?"}</h3>
    <p>
      {"Email us at "}
      <a href="mailto: first50@toppers.com">{"first50@toppers.com"}</a>
    </p>
  </div>,
];
let goList = [
  "About Grand Openings",
  "Upcoming Events",
  "#First50 Event Rules",
  "#First50 Event FAQs",
];

export class GOEventsVisual extends React.Component {
  render() {
    var goNav = [];
    for (let i = 0; i < goList.length; ++i) {
      goNav.push(
        <button key={i} onClick={() => this.props.onClick(i)}>
          {goList[i]}
        </button>
      );
    }
    return (
      <div>
        <h1>{this.props.src}</h1>
        <nav>{goNav}</nav>
        <div>{dList[this.props.display]}</div>
      </div>
    );
  }
}
