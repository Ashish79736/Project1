import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import C1 from './c1';
import C2 from './c2';
import C3 from './c3';
import C4 from './c4';
import Home from './home';
import Forms from './forms';
export default function Head(){
        const showAlert = () => {
          alert('This Service Coming Soon...');
        };
    return(
        <Router>
            <div className='container'>
                <div class="header-background">
                    <div class="top-social-media-icons">
                        <div class="l-constrained-5 group">
                            <img class="text" src={require("../images/copy_17.png")} alt="" width="11" height="11" title="" />
                            <img class="text-2" src={require("../images/image_43.png")} alt="" width="6" height="11" title="" />
                            <img class="text-3" src={require("../images/image_44.png")} alt="" width="12" height="10" title="" />
                            <img class="text-4" src={require("../images/image_45.png")} alt="" width="11" height="12" title="" />
                            <img class="text-5" src={require("../images/image_46.png")} alt="" width="12" height="11" title="" />
                        </div>
                    </div>
                    <div class="l-constrained-4">
                        <div class="row-24 group">
                            <div class="logo">
                            TRAVELERBIES
                            </div>
                            <img class="text-7" src={require("../images/image_42.png")} alt="" width="22" height="17" title="" />
                            <img class="text-6" src={require("../images/image_41.png")} alt="" width="21" height="20" title="" />
                        </div>
                    <nav class="nav-2">
                        <ul class="nav-list-2 group">
                        <li><p class="nav-item-1-2"><Link to={'/'}>Home</Link></p></li>
                        <li><p class="nav-item-1-3"><Link to={'/C1'}>Features</Link></p></li>
                        <li><p class="nav-item-1-4"><Link to={'/C2'}>Travel</Link></p></li>
                        <li><p class="nav-item-1-5"><Link to={'/C3'}>Lifestyle</Link></p></li>
                        <li><p class="nav-item-1-6"><Link to={'/C4'}>Music</Link></p></li>
                        <li><p class="nav-item-1-7"><a href='#' onClick={showAlert} >Shop</a></p></li>
                        <li><p class="nav-item-1-8"><Link to={'/login'}>Login</Link></p></li>
                        </ul>
                    </nav>
                    <div class="latest-post-banner match-height group">
                        <div class="post01">
                        <div class="rectangle-4-holder">
                            Lifesyle
                        </div>
                        <p class="text-8">Eternal city of timeless beauty where ancient history meets modern charm</p>
                        <div class="row-19 group">
                            <img class="text-9" src={require("../images/image.png")} alt="" width="13" height="11" title="" />
                            <p class="text-10">2 Comments</p>
                            <img class="text-11" src={require("../images/image_2.png")} alt="" width="12" height="12" title="" />
                            <p class="text-12">July 11, 2016</p>
                        </div>
                        </div>
                        <div class="post02 group">
                        <div class="rectangle-4-holder-2">
                            Lifesyle
                        </div>
                        <p class="text-13">Bay Area gem with iconic landmarks, scenic bridges, and diverse culture</p>
                        <div class="row-20 group">
                            <img class="text-14" src={require("../images/image.png")} alt="" width="13" height="11" title="" />
                            <p class="text-15">5 Comments</p>
                            <img class="text-16" src={require("../images/image_2.png")} alt="" width="12" height="12" title="" />
                            <p class="text-17">June 11, 2018</p>
                        </div>
                        </div>
                        <div class="post03 group">
                        <div class="rectangle-4-holder-3">
                            Lifesyle
                        </div>
                        <p class="text-18">Tropical paradise of sun, sand, and sea, where relaxation and adventure unite.</p>
                        <div class="row-21 group">
                            <img class="text-19" src={require("../images/image.png")} alt="" width="13" height="11" title="" />
                            <p class="text-20">8 Comments</p>
                            <img class="text-21" src={require("../images/image_2.png")} alt="" width="12" height="12" title="" />
                            <p class="text-22">March 21, 2019</p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <section>
                    <Routes>
                    <Route exact path='/' element={<Home/>}/>
                    <Route exact path='/C1' element={<C1/>}/>
                    <Route exact path='/C2' element={<C2/>}/>
                    <Route exact path='/C3' element={<C3/>}/>
                    <Route exact path='/C4' element={<C4/>}/>
                    <Route exact path='/login' element={<Forms/>}/>
                    </Routes>
                </section>
            </div>
        </Router>
    )
}