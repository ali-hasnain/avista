import styles from './footer.module.css'

export default function Footer() {

    return <div>
        <div className={`${styles.footer} `}>
            <div className="row container">
                <div className="col-lg-8" >
                    <img style={{ height: "300px" }} src="/Footer.svg" />
                </div>
                <div className="col-lg-4 text-center" style={{ padding: "40px 0px" }}>
                    <div>
                        <img src="/Sticky-Logo.png"></img>
                    </div>
                    <div style={{ marginTop: "20px" }}>
                        <p>support@avistatech.net</p>
                    </div>
                    <div style={{ marginTop: "20px" }}>
                        <p>© copyright 2024 AvistaTech</p>
                    </div>
                </div>

            </div>
        </div>
    </div>
}