import React from "react";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";
import "./Header.css";
function Header() {
  return (
    <header className="gpt3__header section__padding">
      <div className="gpt3__header-content" id="home">
        <h1 className="gradient__text">
          Let's Build Something amazing with GPT-3 OpenAI
        </h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam autem
          quasi consequuntur iste soluta excepturi explicabo maxime illum
          debitis minima, eligendi fugiat aliquam dicta cupiditate doloribus,
          sit quae dignissimos totam!
        </p>
        <div className="gpt3__header-content__input">
          <input type="email" placeholder="Your email address" />
          <button type="button">Get Started</button>
        </div>
        <div className="gpt3__header-content__people">
          <img src={people} alt="People" />
          <p>1.600 people required access a visit in last 24 hours </p>
        </div>
      </div>
      <div className="gpt3__header-image">
        <img src={ai} alt="ai" />
      </div>
    </header>
  );
}

export default Header;
