'use client'
import Footer from '@/component/footer/footer'
import styles from './contact-us.module.css'
import Header from '@/component/header/header'

export default function page() {

    const card = [{
        name: "Global Headquarters - USA",
        addr: '3423 Piedmont Rd NE, Atlanta, GA 30305'
    },
    {
        name: "Canada",
        addr: 'Atlantic Avenue, Suite 200, Toronto, Ontario M6K 1X9'
    },
    {
        name: "Mexico",
        addr: '12th Floor, Ejercito Nacional 216, Veronica Anzures, Mexico City'
    },
    {
        name: "Argentina",
        addr: 'Libertador Avenue 2442 4th Floor, Buenos Aires, Olivos, Argentina'
    },
    {
        name: "England",
        addr: 'Alpha House, 100 Borough High Street, London, Greater London SE1 1LB'
    }
        ,
    {
        name: "India",
        addr: 'RDB Boulevard, 8th Floor, Plot K-1, Sector V, Salt Lake, Kolkata, West Bengal'
    },
    {
        name: "India",
        addr: 'The Estate, 8th Floor, Dickenson Road, Bangalore, Karnataka 560042'
    },
    {
        name: "Brazil",
        addr: '3131, Presidente Vargas Ave., 6th Floor, Rio de Janeiro, Brazil'
    }]

    return <div>
        <Header checkPage={true}></Header>
        <div style={{ height: "100px" }}></div>
        <div className='row p-3'>

            <div className='col-lg-6 p-5'>
                <span style={{ fontSize: "55px", fontWeight: 'bolder' }}> <span style={{ color: "#73A133" }}>Our </span>
                    Offices
                </span>
                {card.map((item) => (
                    <div className={styles.bannerCard}>
                        <div>
                            <h4 className='p-2'>{item?.name}</h4>
                            <div className='p-2'>
                                <img style={{ paddingRight: "10px" }} src='/contact-us/location.svg'></img>
                                {item?.addr}
                            </div>
                            <div className='p-2'>
                                <img style={{ paddingRight: "10px" }} src='/contact-us/email.svg'></img>
                                support@avistatech.net
                            </div>
                            <div className='p-2 btn' style={{ color: "#0E76BC" }}>
                                <img style={{ paddingRight: "10px" }} src='/contact-us/direction.svg'></img>
                                Get Directions
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className='col-lg-6 pt-5 form-group'>
                <form>
                    <h3 style={{ fontWeight: 'bolder' }}>Fill out the details below for one of our experts to get in touch with you.</h3>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <input type='text' placeholder='First Name' className='form-control p-3 m-3 border border-primary'></input>
                            <input type='email' placeholder='Email' className='form-control p-3 m-3 border border-primary'></input>
                        </div>
                        <div className='col-lg-6'>
                            <input type='text' placeholder='Last Name' className='form-control p-3 m-3 border border-primary'></input>
                            <input type='number' placeholder='phone' className='form-control p-3 m-3 border border-primary'></input>
                        </div>
                    </div>
                    <div className=''>
                        <input type='text' placeholder='subject' className='form-control p-3 m-3 border border-primary'></input>
                    </div>
                    <div className=''>
                        <textarea placeholder='Message' className='form-control p-3 m-3 border border-primary'></textarea>

                    </div>
                    <button className={`p-3 m-3 border border-primary ${styles.button}`}>Submit</button>
                </form>

            </div>
        </div>
        <Footer></Footer>
    </div>
}