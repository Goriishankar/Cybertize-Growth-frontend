import { useState } from 'react';
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
            title: "Role of CRO Audits in Enhancing Shopify Store Performance",
            date: "April 28, 2025",
            author: "Neha Bawa",
            authorLink: "/",
            comments: 0,
            link: "/",
        },
        {
            image: Blog1,
            title: "How CRO & SEO Work Together to Maximize Conversion?",
            date: "April 24, 2025",
            author: "Neha Bawa",
            authorLink: "/",
            comments: 0,
            link: "/",
        },
        {
            image: Blog1,
            title: "What is a Digital Marketing Agency and How Does it Work?",
            date: "April 22, 2025",
            author: "Prashant Shukla",
            authorLink: "/",
            comments: 0,
            link: "/",
        },
        {
            image: Blog1,
            title: "JavaScript Redirects and Their Impact on SEO: A Comprehensive Guide",
            date: "April 17, 2025",
            author: "Rudra Kumar",
            authorLink: "/",
            comments: 0,
            link: "/",
        },
        {
            image: Blog1,
            title: "SRSLTID Parameter in SEO: How It Affects Your Site & How to Fix It",
            date: "April 16, 2025",
            author: "Neha Bawa",
            authorLink: "/",
            comments: 0,
            link: "/",
        },
        {
            image: Blog1,
            title: "What Is Deep Linking? Key Importance, Types, and How They Work",
            date: "April 15, 2025",
            author: "Prashant Shukla",
            authorLink: "/",
            comments: 0,
            link: "/",
        },
        {
            image: Blog1,
            title: "What Are SEO Keywords? Find Them & Rank Better in 2025",
            date: "April 15, 2025",
            author: "Neha Bawa",
            authorLink: "/",
            comments: 0,
            link: "/",
        },
        {
            image: Blog1,
            title: "How to Use the Google Disavow Tool to Enhance Your SEO in 2025",
            date: "April 9, 2025",
            author: "Rudra Kumar",
            authorLink: "/",
            comments: 0,
            link: "/",
        },
        {
            image: Blog1,
            title: "Complete Landing Page Optimization Checklist for 2025",
            date: "April 9, 2025",
            author: "Prashant Shukla",
            authorLink: "/",
            comments: 0,
            link: "/",
        },
        {
            image: Blog1,
            title: "15 SEO Benefits You Need to Know in 2025",
            date: "April 8, 2025",
            author: "Rudra Kumar",
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

    // Handle Previous and Next buttons
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
                                        window.scrollTo(0, 0); // Scroll to top on page change
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