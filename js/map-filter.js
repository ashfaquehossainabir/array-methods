const result = document.querySelector(".result")

const blogs = [
    {
        title: "Title One",
        article: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur voluptatibus culpa vitae nostrum atque ipsa, fuga voluptas? Eos maxime impedit sint aperiam aliquid esse culpa eligendi velit facere. Beatae, qui?"
    },
    {
        title: "Title Two",
        article: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur voluptatibus culpa vitae nostrum atque ipsa, fuga voluptas? Eos maxime impedit sint aperiam aliquid esse culpa eligendi velit facere. Beatae, qui?"
    },
    {
        title: "Title Three",
        article: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur voluptatibus culpa vitae nostrum atque ipsa, fuga voluptas? Eos maxime impedit sint aperiam aliquid esse culpa eligendi velit facere. Beatae, qui?"
    },
]

const filtered = blogs.filter(blog => blog.title !== "Title Two")

console.log(filtered)

filtered.map((blog, i) => {
    result.innerHTML += `
                            <div id="blog-${i + 1}" style="margin: 30px 0;">
                                <p>
                                    ${blog.title}
                                </p>
                                <p>
                                    ${blog.article}
                                </p>
                            </div>
                        `
})