import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import userReviews from '../data/userReview';

const ReviewSlider = ({ userReviews }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };

    return (
        <div className='w-full mt-10 text-center px-4 bg-white rounded-sm shadow-md h-64'>
            <Slider {...settings}>
                {userReviews.map((review, index) => (
                    <div key={index} className='w-full'>
                        <div className='h-72 '>
                        <img src={review.image} alt={review.name} className='w-full h-24 object-contain pt-4 ' />
                        <p className='pt-3 text-gray-800'>{review.review}</p>
                        <p className='pt-3 text-lg font-medium'>{review.name}</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default ReviewSlider;
