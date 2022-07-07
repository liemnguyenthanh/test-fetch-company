import './App.css';
import Banner from './component/banner';
import { PETROL_DATA  ,FOOD_DATA, RENTAL_DATA} from './constant';
import CardList from './component/CardList'
import Footer from './component/footer';
function App() {
    return (
        <div className="">
            <Banner/>
            <CardList title='Petrol' dataSource={PETROL_DATA}/>
            <CardList title='Rental Rebate' dataSource={RENTAL_DATA}/>
            <CardList title='Food and Beverage' dataSource={FOOD_DATA}/>
            <Footer/>
        </div>
    );
}

export default App;
