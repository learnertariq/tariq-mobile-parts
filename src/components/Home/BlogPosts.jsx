import React from "react";

const data = [
  {
    img: "https://i.ibb.co/zrftFSY/ics-and-processor.png",
    title: "New IC Released",
    desc: "As we gradually move towards the Internet of Things (IoT), the volume of data is set to skyrocket. With it, the demand for lightweight, high-performance, mobile data processing devices will also increase. To develop such devices, we would first need organic integrated circuits with organic transistors. However, the integration density of these circuits has been low because of incompatibility with existing microfabrication technologies.",
  },
  {
    img: "https://i.ibb.co/58gdZY3/touchscreen.webp",
    title: "Alive Touchscreen",
    desc: "LCD compatible with iPhone XR, (black, with frame, AAA, Tianma, with protective screen for display)",
  },
  {
    img: "https://i.ibb.co/cwKT52W/cameras.webp",
    title: "Best Replaceable Camera",
    desc: "The best iPhone for photography allows you take stunning photographs and video, quickly and easily. You'll benefit from high-class image technology that makes the iPhone one of the leading camera phones of today. But which is the best iPhone for photography for you? It's not necessarily the most recent and expensive one...",
  },
];

const BlogPosts = () => {
  return (
    <section className="container mx-auto my-24">
      <h2 className="text-4xl text-center mb-6">Recent Blog News</h2>
      <div className="posts-container grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {data.map((item, index) => (
          <div key={index} className="blog-post rounded-xl">
            <div className="card lg:card-side bg-base-100 shadow-xl p-2">
              <figure>
                <img src={item.img} alt="Album" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{item.title}</h2>
                <p>{item.desc.slice(0, 100)}...</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary mt-2">Read More</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogPosts;
