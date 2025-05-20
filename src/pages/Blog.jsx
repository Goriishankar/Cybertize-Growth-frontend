import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import '../styles/blog.css';

// img from file
import Blog1 from '../assets/Blog.jpg';

function BlogCard({ image, title, date, author, authorLink, comments, link }) {
    return (
        <div className="blog-box">
            <a href={link} className="blog-pic">
                <img src={image} alt={title} />
            </a>
            <div className="about-blog">
                <h3>
                    <a href={link}>{title}</a>
                </h3>
                <div className="post-detail">
                    <span className="date">{date}</span>
                    <span className="post-by">
                        <a href={authorLink}>{author}</a>
                    </span>
                    <span className="comment">{comments}</span>
                </div>
            </div>
        </div>
    );
}

function Blog() {
    const blogPosts = [
        {
            image: Blog1,
            title: "How to Create a Winning Digital Marketing Strategy in 2025: A Step-by-Step Guide",
            date: "May 18, 2025",
            author: "Mukul Choudhary",
            authorLink: "/",
            comments: 0,
            link: "/",
        },
    ];

    // Pagination Logic
    const postsPerPage = 6; // 3 rows × 2 columns = 6 posts per page
    const totalPages = Math.ceil(blogPosts.length / postsPerPage);
    const [currentPage, setCurrentPage] = useState(1);

    // Calculate the posts to show on the current page
    const startIndex = (currentPage - 1) * postsPerPage;
    const currentPosts = blogPosts.slice(startIndex, startIndex + postsPerPage);

    // Handle Timeline and Next buttons
    const handlePrevious = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
            window.scrollTo(0, 0); // Scroll to top on page change
        }
    };

    const handleNext = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
            window.scrollTo(0, 0); // Scroll to top on page change
        }
    };

    // Generate page numbers to display
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    return (
        <div className="blog-sec" id="blog-sec-home">
            <Helmet>
                <title>Blog - Digital Marketing Agency in Jhunjhunu | Cybertize Growth</title>
                <meta
                    name="description"
                    content="Read expert insights on digital marketing from Cybertize Growth, a leading digital marketing agency in Jhunjhunu, offering SEO, SMM, and more in India."
                />
                <meta
                    name="keywords"
                    content="digital marketing agency in Jhunjhunu, digital marketing, digital marketing agency, digital marketing agency in India, digital marketing strategy, SEO, SMM, Cybertize Growth"
                />
                <meta name="author" content="Cybertize Growth Team" />
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://cybertizegrowth.com/blog" />
                {/* Open Graph Tags */}
                <meta
                    property="og:title"
                    content="Blog - Digital Marketing Agency in Jhunjhunu | Cybertize Growth"
                />
                <meta
                    property="og:description"
                    content="Explore digital marketing tips and strategies from Cybertize Growth, a top digital marketing agency in Jhunjhunu, serving businesses in India."
                />
                <meta
                    property="og:image"
                    content="https://cybertizegrowth.com/images/blog-hero.webp"
                />
                <meta property="og:url" content="https://cybertizegrowth.com/blog" />
                <meta property="og:type" content="website" />
                {/* Twitter Card Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    property="twitter:title"
                    content="Blog - Digital Marketing Agency in Jhunjhunu | Cybertize Growth"
                />
                <meta
                    property="twitter:description"
                    content="Get expert digital marketing insights from Cybertize Growth, a leading agency in Jhunjhunu."
                />
                <meta
                    property="twitter:image"
                    content="https://cybertizegrowth.com/images/blog-hero.webp"
                />
                {/* JSON-LD Structured Data */}
                <script type="application/ld+json">{`
                    {
                        "@context": "https://schema.org",
                        "@type": "Blog",
                        "name": "Cybertize Growth Blog",
                        "url": "https://cybertizegrowth.com/blog",
                        "description": "Blog by Cybertize Growth, a digital marketing agency in Jhunjhunu, offering insights on digital marketing strategies, SEO, and SMM for businesses in India.",
                        "publisher": {
                            "@type": "Organization",
                            "name": "Cybertize Growth",
                            "url": "https://cybertizegrowth.com",
                            "logo": "https://cybertizegrowth.com/images/logo.png",
                            "address": {
                                "@type": "PostalAddress",
                                "addressLocality": "Jhunjhunu",
                                "addressRegion": "Rajasthan",
                                "addressCountry": "India"
                            }
                        },
                        "blogPost": [
                            {
                                "@type": "BlogPosting",
                                "headline": "How to Create a Winning Digital Marketing Strategy in 2025: A Step-by-Step Guide",
                                "datePublished": "2025-05-18",
                                "author": {
                                    "@type": "Person",
                                    "name": "Mukul Choudhary"
                                },
                                "description": "A step-by-step guide on creating a winning digital marketing strategy in 2025 by Cybertize Growth, a digital marketing agency in Jhunjhunu."
                            }
                        ]
                    }
                `}</script>
            </Helmet>
            <div className="seoServicesTitle test">
                <h2>All Blog Articles</h2>
            </div>
            <div id="allblogpost" className="blog-desc">
                {currentPosts.map((post, index) => (
                    <BlogCard
                        key={index}
                        image={post.image}
                        title={post.title}
                        date={post.date}
                        author={post.author}
                        authorLink={post.authorLink}
                        comments={post.comments}
                        link={post.link}
                    />
                ))}
            </div>
            <div className="paginationbtrow">
                <div className="navigation">
                    <ol className="wp-paginate font-inherit">
                        <li>
                            <button
                                className="prev"
                                onClick={handlePrevious}
                                disabled={currentPage === 1}
                                aria-label="Go to previous page"
                            >
                                Previous
                            </button>
                        </li>
                        {pageNumbers.map((page, index) => (
                            <li key={index}>
                                <button
                                    className={`page ${page === currentPage ? "current" : ""}`}
                                    onClick={() => {
                                        setCurrentPage(page);
                                        window.scrollTo(0, 0);
                                    }}
                                    aria-label={`Go to page ${page}`}
                                >
                                    {page}
                                </button>
                            </li>
                        ))}
                        <li>
                            <button
                                className="next"
                                onClick={handleNext}
                                disabled={currentPage === totalPages}
                                aria-label="Go to next page"
                            >
                                Next
                            </button>
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    );
}

export default Blog;