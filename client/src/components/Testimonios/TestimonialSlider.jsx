import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import styles from './TestimonialSlider.module.css';

const testimonials = [
  {
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    name: "Gloria Burnett",
    role: "Software Developer",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    photo: "https://images.unsplash.com/photo-1607083208696-58c94d7c210b",
  },
  {
    quote: "Aliquam erat volutpat. Pellentesque habitant morbi tristique...",
    name: "Carlos Gómez",
    role: "Frontend Engineer",
    image: "https://randomuser.me/api/portraits/men/76.jpg",
    photo: "https://images.unsplash.com/photo-1522204509343-9c8e9f7e6ad5",
  },
];

const TestimonialSlider = () => (
  <div className={styles.container}>
    <Swiper spaceBetween={50} slidesPerView={1} loop autoplay={{ delay: 5000 }}>
      {testimonials.map((t, index) => (
        <SwiperSlide key={index}>
          <div className={styles.slide}>
            <img src="https://tse2.mm.bing.net/th/id/OIP.vpZO7euW-jkKNK2ycq7koQHaEG?rs=1&pid=ImgDetMain" alt="User" className={styles.photo} />
            <div className={styles.content}>
              <p className={styles.quote}>❝ {t.quote}</p>
              <div className={styles.author}>
                <img src={t.image} alt={t.name} />
                <div>
                  <strong>{t.name}</strong>
                  <p>{t.role}</p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
);

export default TestimonialSlider;