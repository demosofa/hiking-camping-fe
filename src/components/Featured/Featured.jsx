import { LeftOutlined, RightOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Carousel, Image } from 'antd';
import { useRef } from 'react';
import './Featured.css';

export const Featured = () => {
	const carouselRef = useRef(null);

	const handlePrevClick = () => {
		if (carouselRef.current) {
			carouselRef.current.prev();
		}
	};

	const handleNextClick = () => {
		if (carouselRef.current) {
			carouselRef.current.next();
		}
	};

	const blogData = [
		{
			src: '//hiking-camping-demo.myshopify.com/cdn/shop/articles/blog-7_large.jpg?v=1480500987',
			date: '2016-11-29',
			news: 'Mirum est notare quam littera',
			user: 'Ram M',
			content:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labo...',
		},
		{
			src: '//hiking-camping-demo.myshopify.com/cdn/shop/articles/blog-7_large.jpg?v=1480500987',
			date: '2016-11-29',
			news: 'Mirum est notare quam littera',
			user: 'Ram M',
			content:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labo...',
		},
		{
			src: '//hiking-camping-demo.myshopify.com/cdn/shop/articles/blog-7_large.jpg?v=1480500987',
			date: '2016-11-29',
			news: 'Mirum est notare quam littera',
			user: 'Ram M',
			content:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labo...',
		},
	];

	const renderBlogItem = (blog, index) => (
		<div key={index} className="blog-image-container">
			<Image preview={false} className="blog-image" src={blog.src} />
			<div className="blog-desc">
				<p className="blog-date">
					<time dateTime={blog.date}>
						<span className="date">{blog.date}</span>
					</time>
				</p>
				<div className="home-blog-content blog-detail">
					<h4>
						<a href="/blogs/news/mirum-est-notare-quam-littera-2">
							{blog.news}
						</a>
					</h4>
					<i className="fa fa-user" aria-hidden="true"></i>
					<span>
						<UserOutlined /> {blog.user}
					</span>
					<p>{blog.content}</p>
					<a className="action-btn">
						<Button className="btn-handle">READ MORE</Button>
					</a>
				</div>
			</div>
		</div>
	);

	return (
		<div className="carousel-container">
			<Carousel dots={false} draggable={true} autoplay arrows ref={carouselRef}>
				{blogData.map((blog, index) => renderBlogItem(blog, index))}
			</Carousel>
			<a className="carousel-arrow prev" onClick={handlePrevClick}>
				<LeftOutlined />
			</a>
			<a className="carousel-arrow next" onClick={handleNextClick}>
				<RightOutlined />
			</a>
		</div>
	);
};
