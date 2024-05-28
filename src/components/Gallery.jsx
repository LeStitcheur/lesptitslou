// Importation modules
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules'

// Importation CSS
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import './../css/gallery.css'

// Importation médias
import flyerRecto from './../assets/images/flyer-recto.jpg'
import flyerVerso from './../assets/images/flyer-verso.jpg'
import microCreche from './../assets/images/micro-crèche-default.jpg'
import siesteNordique from './../assets/images/sieste_nord_sketch.jpg'

export default function Gallery() {
	return (
		<div className='gallery'>
			<Swiper
				effect={'coverflow'}
				grabCursor={true}
				centeredSlides={true}
				loop={true}
				slidesPerView={'auto'}
				coverflowEffect={{
					rotate: 0,
					stretch: 0,
					depth: 100,
					modifier: 2.5,
				}}
				pagination={{ el: '.swiper-pagination', clickable: true }}
				navigation={{
					nextEl: 'swiper-button-next',
					prevEl: 'swiper-button-prev',
					clickable: true,
				}}
				modules={[EffectCoverflow, Pagination, Navigation]}
				className='swiper_container'>
				<SwiperSlide>
					<img
						src={flyerRecto}
						alt="Flyer recto Les P'tits Lou"
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						src={flyerVerso}
						alt="Flyer verso Les P'tits Lou"
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						src={microCreche}
						alt='Image micro crèche'
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						src={siesteNordique}
						alt='Image sieste nordique'
					/>
				</SwiperSlide>
				<div className='slider-controler'>
					<div className='swiper-button-prev slider-arrow'>
						<box-icon name='arrow-back'></box-icon>
					</div>
					<div className='swiper-button-next slider-arrow'>
						<box-icon name='arrow-forward'></box-icon>
					</div>
					<div className='swiper-pagination'></div>
				</div>
			</Swiper>
		</div>
	)
}
