import React from 'react'
import Header from '../Component/Header'
import HomeCard from '../Component/HomeCard'
import Footer from '../Component/Footer';
import WhyCard from '../Component/WhyCard';
import { FaRegThumbsUp } from 'react-icons/fa';
import { AiOutlineTrophy,AiOutlineSetting } from 'react-icons/ai'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { LiaBabyCarriageSolid } from 'react-icons/lia'
import {BiPhoneCall} from 'react-icons/bi'
import FlatList from 'flatlist-react/lib';
import { COLORS } from '../Assets/Theme';
export default function Home() {
    const [count, setCount] = React.useState(0);
    const data = [
        {
            Icon: FaRegThumbsUp,
            title: "Outstanding Services",
            description: "Lorem ipsum dolor sit amet, adipiscing elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas lobortis vestibulum ipsum vitae pellentesque."
        },
        {
            Icon: AiOutlineTrophy,
            title: "Name for Quality Vehicles",
            description: "Lorem ipsum dolor sit amet, adipiscing elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas lobortis vestibulum ipsum vitae pellentesque."
        },
        {
            Icon:HiOutlineLocationMarker,
            title:"GPS on Every Vehicle!",
            description:"Lorem ipsum dolor sit amet, adipiscing elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas lobortis vestibulum ipsum vitae pellentesque."
        },
        {
            Icon:LiaBabyCarriageSolid,
            title:"Baby Chairs/Booster Seats",
            description:"Lorem ipsum dolor sit amet, adipiscing elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas lobortis vestibulum ipsum vitae pellentesque."
        },
        {
            Icon:AiOutlineSetting,
            title:"AT/MT Transmission",
            description:"Lorem ipsum dolor sit amet, adipiscing elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas lobortis vestibulum ipsum vitae pellentesque."
        },
        {
            Icon:BiPhoneCall,
            title:"24 Hours Support",
            description:"Lorem ipsum dolor sit amet, adipiscing elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas lobortis vestibulum ipsum vitae pellentesque."
        },

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
                    fontSize: '35px',
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
                    alignSelf:'center',
                }}>
                    <FlatList
                        list={data}
                        renderItem={(item, index) => <WhyCard Icon={item.Icon} title={item.title} description={item.description} />}
                        renderWhenEmpty={() => <div>List is empty!</div>}
                    />
                </div>
            <Footer/>

            </div>
        </div>
    )
}
