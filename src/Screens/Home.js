import React from 'react'
import Header from '../Component/Header'
import HomeCard from '../Component/HomeCard'
import Footer from '../Component/Footer';
import WhyCard from '../Component/WhyCard';
import { FaRegThumbsUp } from 'react-icons/fa';
import { AiOutlineTrophy, AiOutlineSetting } from 'react-icons/ai'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { LiaBabyCarriageSolid } from 'react-icons/lia'
import { BiPhoneCall } from 'react-icons/bi'
import FlatList from 'flatlist-react/lib';
import { COLORS } from '../Assets/Theme';
import useMediaQuery from '../Component/useMediaQuery';
export default function Home() {
    const [count, setCount] = React.useState(0);
    const mobile = useMediaQuery('(max-width: 768px)');
    const data = [
        {
            Icon: FaRegThumbsUp,
            title: "Outstanding Services",
            description: "We prioritize your needs, respond promptly, and maintain a fleet of clean, well-maintained vehicles for your safety and comfort. Our transparent pricing ensures no surprises, while our expert staff offers local recommendations and assistance, making your experience exceptional"
        },
        {
            Icon: AiOutlineTrophy,
            title: "Name for Quality Vehicles",
            description: "you're not just renting a vehicle; you're opting for excellence, reliability, and the assurance of top-tier transportation. We take pride in our dedication to maintaining a premium fleet that meets and exceeds your expectations, and we look forward to serving you with the utmost quality and professionalism."
        },
        {
            Icon: LiaBabyCarriageSolid,
            title: "Baby Chairs/Booster Seats",
            description: "At our car and bike rental company, safety and comfort are paramount, and that extends to the youngest members of your family. We offer baby chairs and booster seats to ensure that even the tiniest passengers travel securely. Our top-of-the-line, safety-approved baby chairs and booster seats provide the necessary support to keep your child safe and comfortable throughout the journey."
        },
        {
            Icon: AiOutlineSetting,
            title: "MT Transmission",
            description: "It's an excellent choice for enthusiasts who appreciate the art of driving. At our rental company, we understand that preferences vary, and that's why we offer a range of vehicles with  MT options. Whether you're seeking convenience or a more interactive driving experience, we've got you covered."
        },
        {
            Icon: BiPhoneCall,
            title: "24 Hours Support",
            description: "Our commitment to your convenience and peace of mind extends around the clock. With 24-hour support, we're always here to assist you, no matter the time or situation. Whether you have a question, need assistance, or encounter an unexpected issue, our dedicated support team is just a call or message away. You can count on us to provide prompt and reliable assistance, ensuring that your rental experience is as smooth as possible, day or night."
        }
    ]
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100vw',
        }}>
            <Header count={count} setCount={setCount} />
            <HomeCard count={count} />
            <div style={{
                width: '100vw',
                height: '30vh',
            }}>
                <p style={{
                    fontSize: mobile? "30px" : '35px',
                    fontFamily: "LEMONMILK-Bold",
                    color: COLORS.text,
                    marginBlock: 0,
                    textAlign: 'center',
                    marginTop: '50px',
                }}>
                    Why Choose Us
                </p>
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                    // marginBlock: '50px',
                    alignSelf: 'center',
                }}>
                    <FlatList
                        list={data}
                        renderItem={(item, index) => <WhyCard Icon={item.Icon} title={item.title} description={item.description} />}
                        renderWhenEmpty={() => <div>List is empty!</div>}
                    />
                </div>
                <Footer />

            </div>
        </div>
    )
}
