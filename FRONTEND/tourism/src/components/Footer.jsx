import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <section className="footer">
        <div className="info-1">
            <Link to={'/'}>
                <h4>Home</h4>
            </Link>
            <Link to={'/contact'}>
                <h4>Contact Us</h4>
            </Link>
            <Link to={'/policy'}>
                <h4>Policy and Rules</h4>
            </Link>
            <Link to={'/complain'}>
                <h4>Complain</h4>
            </Link>
            <div className="social-icons">
                <a href="https://www.facebook.com/VisitJharkhand">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-facebook-icon lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </a>
                <a href="https://www.instagram.com/jharkhandtourism/">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-instagram-icon lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                </a>
                <a href="https://x.com/visitjharkhand">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 50 50" stroke="currentColor">
                        <path d="M 5.9199219 6 L 20.582031 27.375 L 6.2304688 44 L 9.4101562 44 L 21.986328 29.421875 L 31.986328 44 L 44 44 L 28.681641 21.669922 L 42.199219 6 L 39.029297 6 L 27.275391 19.617188 L 17.933594 6 L 5.9199219 6 z M 9.7167969 8 L 16.880859 8 L 40.203125 42 L 33.039062 42 L 9.7167969 8 z"></path>
                    </svg>
                </a>
                <a href="https://www.youtube.com/channel/UCKDHUzseKwkESQOLzOiVY0A">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-youtube-icon lucide-youtube"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>
                </a>
            </div>
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