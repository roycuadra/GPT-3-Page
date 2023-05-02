import React from "react";
import { Article } from "../../components";
import { blog01, blog02, blog03, blog04, blog05 } from "./imports";
import "./Blog.css";
function Blog() {
  return (
    <section className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__bog-heading">
        <h1 className="gradient__text">
          A lot is happening, We are blogging about it.
        </h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container__groupA">
          <Article
            image={blog01}
            alt="photo1"
            date={"Sep 26, 2021"}
            title={"GPT-3 and Open  AI is the future. Let us exlore how it is?"}
          />
        </div>

        <div className="gpt3__blog-container__groupB">
          <Article
            image={blog02}
            alt="photo2"
            date={"Sep 26, 2021"}
            title={"GPT-3 and Open  AI is the future. Let us exlore how it is?"}
          />
          <Article
            image={blog03}
            alt="photo3"
            date={"Sep 26, 2021"}
            title={"GPT-3 and Open  AI is the future. Let us exlore how it is?"}
          />
          <Article
            image={blog04}
            alt="photo4"
            date={"Sep 26, 2021"}
            title={"GPT-3 and Open  AI is the future. Let us exlore how it is?"}
          />
          <Article
            image={blog05}
            alt="photo5"
            date={"Sep 26, 2021"}
            title={"GPT-3 and Open  AI is the future. Let us exlore how it is?"}
          />
        </div>
      </div>
    </section>
  );
}

export default Blog;
