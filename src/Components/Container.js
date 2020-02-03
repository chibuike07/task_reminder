import React from "react";
const Article = () => {
  const StylesForArt = {
    marginRight: 30,
    width: 65 + "%",
    lineHeight: 1.5,
    backgroundColor: "darkcyan",
    boxSizing: "border-box",
    height: 300,
    padding: 15,
    overflowY: "scroll"
  };
  return (
    <div>
      <h1
        style={{
          textAlign: "center",
          textTransform: "uppercase",
          marginTop: 14,
          marginBottom: 14
        }}
      >
        princewill
      </h1>
      <section style={{ display: "flex" }}>
        <article style={StylesForArt}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum,
            exercitationem voluptates! Quas debitis harum, explicabo blanditiis
            unde rem minus molestiae facilis itaque, dolorem voluptas
            praesentium inventore officia ex earum aut.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            dignissimos perspiciatis saepe minus ab numquam? Eius molestiae,
            ratione id exercitationem pariatur, culpa eveniet aliquam libero
            nobis aut modi voluptatum repudiandae!
          </p>
        </article>
        <AsideBar />
      </section>
    </div>
  );
};

const AsideBar = () => {
  const Side = {
    marginLeft: 10,
    width: 35 + "%",
    backgroundColor: "darkgrey",
    boxSizing: "border-box",
    padding: 15,
    overflowY: "scroll",
    height: 300
  };
  return (
    <aside style={Side}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur modi,
      sint quis iusto repellat est dolorem? Quisquam animi pariatur doloribus
      voluptas, tempora perspiciatis recusandae non voluptatem quo sunt illo
      laboriosam!
    </aside>
  );
};

export default Article;
