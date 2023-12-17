import Footer from '../components/Footer';
import Banner from '../components/HomeComponents/Banner';
import Recommendations from '../components/HomeComponents/Recommendations/Recommendations';
import ClientReviews from '../components/HomeComponents/ClientReviews/ClientReviews';
const home = () => {
    return (
        <div className="Home-Page -z-10">
            <Recommendations />
            <ClientReviews />
            <Footer />
        </div>
    )
}

export default home