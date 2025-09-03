import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <section className="footer">
        <div className="info-1">
            <Link to={'/'}>
                <h4>Home</h4>
            </Link>
            <Link to={'/contact'}>
                <h4>Contact</h4>
            </Link>
            <Link to={'/policy'}>
                <h4>Policy and Rules</h4>
            </Link>
            <Link to={'/complain'}>
                <h4>Complain</h4>
            </Link>
        </div>
        <div className="info-2">
            <h4 className="top-head">GET IN TOUCH<br/>(Monday to Saturday 10:00 hrs to 18:00 hrs )</h4>
            <br />
            <div className="sub-info">
                <h4>Directorate of Tourism</h4>
                <h4>MDI Building, 3rd Floor, Dhurva, Ranchi-834004</h4>
                <h4>dirjharkhandtourism@gmail.com</h4>
                <br />
                <h4>Department of Tourism</h4>
                <h4>FFP Building 2nd Floor Dhurva, Ranchi-834004</h4>
                <h4>govjharkhandtourism@gmail.com</h4>
            </div>
        </div>
        <div className="info-3">
            <h4 className="top-head">ONLINE BOOKING, FEEDBACK & SUPPORT</h4>
            <br />
            <h4>jtdcltd@gmail.com</h4>
            <h4>0651-2331828,2331643</h4>
            <br />
            <h4>Jharkhand Tourism Development Corporation Ltd</h4>
            <h4>6th Floor, Premium Suit Building JUPMI Campus, Plant Plaza Road Dhurwa, Ranchi-834004</h4>
            <h4>jtdcltd@gmail.com</h4>
            <h4>+91 651 2331828</h4>
        </div>
    </section>
  )
}

export default Footer