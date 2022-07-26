// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import sliderBg from "../../assets/slider/testimonials-bg.svg";
import johnSmith from "../../assets/slider/smith.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./slider.css";

// import required modules
import { Parallax, Navigation } from "swiper";

export default function Slider() {
	return (
		<>
			<Swiper
				style={{
					"--swiper-navigation-color": "#fff",
					"--swiper-pagination-color": "#fff",
				}}
				speed={600}
				parallax={true}
				navigation={true}
				spaceBetween={0}
				slidesPerView={1}
				modules={[Parallax, Navigation]}
				className="mySwiper"
			>
				<h5 className="slider__title">CUSTOMERS STORIES</h5>
				<div
					slot="container-start"
					className="parallax-bg"
					style={{
						"backgroundImage": `url(${sliderBg})`,
						backgroundSize: "75%",
						"margin":"0",
					}}
					data-swiper-parallax="-23%"
				>
					{" "}
				</div>

				<SwiperSlide>
					{/* 					<div className="title" data-swiper-parallax="-300">
						Slide 1
					</div>
					<div className="subtitle" data-swiper-parallax="-200">
						Subtitle
					</div> */}
					<div className="text" data-swiper-parallax="-100">
						<p>
							"Spadetech provided invaluable support during the development of
							our project. Their expertise and guidance were essential in
							helping us overcome some of the challenges we faced."
						</p>
						<article className="author">
							<img src={johnSmith} alt="John Smith" />
							<div>
								<h5>John Smith</h5>
								<span>Founder & CEO</span>
							</div>
						</article>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					{/* 					<div className="title" data-swiper-parallax="-300">
						Slide 2
					</div>
					<div className="subtitle" data-swiper-parallax="-200">
						Subtitle
					</div> */}
					<div className="text" data-swiper-parallax="-100">
						<p>
							"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
							dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
							laoreet justo vitae porttitor porttitor."
						</p>
						<article className="author">
							<img src={johnSmith} alt="John Smith" />
							<div>
								<h5>John Smith</h5>
								<span>Founder & CEO</span>
							</div>
						</article>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					{/* 					<div className="title" data-swiper-parallax="-300">
						Slide 3
					</div>
					<div className="subtitle" data-swiper-parallax="-200">
						Subtitle
					</div> */}
					<div className="text" data-swiper-parallax="-100">
						<p>
							"Suspendisse in sem justo. Integer laoreet magna nec elit
							suscipit, ac laoreet nibh euismod. Aliquam hendrerit lorem at elit
							facilisis rutrum. Ut at ullamcorper velit."
						</p>
						<article className="author">
							<img src={johnSmith} alt="John Smith" />
							<div>
								<h5>John Smith</h5>
								<span>Founder & CEO</span>
							</div>
						</article>
					</div>
				</SwiperSlide>
			</Swiper>
		</>
	);
}
