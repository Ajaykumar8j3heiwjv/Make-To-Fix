import { useState } from 'react';
import './App.css';
import './script.js';
import './script1.js'
import logo from '/images/logo.png';

function Main1() {
  const [count, setCount] = useState(0);

  return (
    <>
    <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>M2F Services</title>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="home_page.css" />
        <link rel="stylesheet" href="home1_page.css" />
        <link rel="stylesheet" href="home2_page.css" />
        <link rel="stylesheet" href="footer.css" />
        <link rel="icon" type="image/png" href="/images/logo.png" />
    </head>
    <header>
        <nav class="navbar">
            <div class="logo">
                <a href="main1.html"><img src={logo} alt="M2F Logo"/></a>
                <h1>Make To Fix</h1>
            </div>
            
            <button class="mobile-menu" aria-label="Toggle Menu">
                <span>English</span>
                <span>Tamil</span>
                <span>Spanish</span>
            </button>

            <div class="nav-items">
                <ul class="nav-links">
                    <li><a href="main.html" class="active">Home</a></li>
                    <li><a href="Aboutus.html">About us</a></li>
                    <li><a href="cart1.html">Cart</a></li>
                </ul>
                
                <div class="nav-buttons">
                    <div class="language-selector">
                        <span>🌐</span>
                        <select class="language">
                            <option value="en">English</option>
                            <option value="ta">Tamil</option>
                            <option value="tl">Telugu</option>
                            <option value="Ma">malayalam</option>
                        </select>
                    </div>
                    <a href="login_page.html" class="signup"><button class="btn-login">Log in</button></a>
                    <a href="User_Signup.html" class="signup"><button class="btn-signup">Sign up</button></a>
                </div>
            </div>
        </nav>
    </header>
      <main className="main">
        
        <section className="hero">
          <div className="hero-content">
            <h1>Make your day fix with <span className="highlight">M2F</span> and keep connected</h1>
            <p className="quote">"User satisfaction is our first priority and top most order for the services partner"</p>
            <div className="cta-buttons">
              <a href="Register_form.html">
                <button className="btn-register">Register Now</button>
              </a>
              < a href="Electrical_addon_page.html">
                <button className="btn-view">View Service</button>
              </a>
            </div>
          </div>
        </section>
        <div>
          <a href="pro_page.html">
            <div className="pro-banner">
              <div className="pro-content">
                <img src="images/PRO_logo.png" alt="PRO Icon" className="pro-icon" />
                <span className="pro-text">PRO</span>
                <span className="pro-message">Save up to 15% in each service</span>
              </div>
              <div className="pro-arrow">➤</div>
            </div>
          </a>
          <main className="container" style={{ display: 'grid', flexDirection: 'column', alignItems: 'center' }}>
            <section className="service-section" style={{ display: 'grid', flexDirection: 'column', alignItems: 'center' }}>
              <div className="section-header">
                <h2>Our <span>Services</span></h2>
                <a href="Package_addon_page.html" >
                <button className="view-all">View all package</button>
                </a>
              </div>
              <div className="blog-cards">
                <article className="blog-card">
                  <img src="images/Bg1.png" alt="House cleaning setup" />
                  <div className="card-content">
                    <div className="meta">
                      <span className="date">September | 2023</span>
                      <span className="read-time">5 min read</span>
                    </div>
                    <h3>The benefits of a house cleaning and good things in it</h3>
                  </div>
                </article>
                <article className="blog-card">
                  <img src="images/Bg.png" alt="Service person" />
                  <div className="card-content">
                    <div className="meta">
                      <span className="date">September | 2023</span>
                      <span className="read-time">8 min read</span>
                    </div>
                    <h3>Why you should consider hiring a service person</h3>
                  </div>
                </article>
                <article className="blog-card">
                  <img src="images/Bg2.png" alt="Professional cleaning" />
                  <div className="card-content">
                    <div className="meta">
                      <span className="date">September | 2023</span>
                      <span className="read-time">6 min read</span>
                    </div>
                    <h3>The benefits of professional services</h3>
                  </div>
                </article>
              </div>
              <div className="carousel-nav">
                <button className="prev">←</button>
                <div className="dots">
                  <span className="dot active"></span>
                  <span className="dot"></span>
                  <span className="dot"></span>
                  <span className="dot"></span>
                </div>
                <button className="next">→</button>
              </div>
            </section>
            <section className="popular-section">
              <div className="section-header">
                <div className="title-wrapper">
                  <p className="subtitle">The latest demanding work!</p>
                  <h2>Popular <span>services</span></h2>
                </div>
              </div>
              <div className="service-cards">
                <div className="service-card">
                  <img src="images/Bg3.png" alt="Refrigerator Service" />
                  <h3>Refrigerator Service</h3>
                  <div className="price">₹500/hour</div>
                  <div className="rating">★★★★☆ (5.0)</div>
                  <button className="more-info">More service</button>
                </div>
                <div className="service-card">
                  <img src="images/Bg4.png" alt="Switch Replacement" />
                  <h3>Switch Replacement</h3>
                  <div className="price">₹300/hour</div>
                  <div className="rating">★★★★☆ (4.8)</div>
                  <button className="more-info">More service</button>
                </div>
                <div className="service-card">
                  <img src="images/Bg5.png" alt="AC repair" />
                  <h3>AC repair</h3>
                  <div className="price">₹400/hour</div>
                  <div className="rating">★★★★☆ (4.9)</div>
                  <button className="more-info">More service</button>
                </div>
                <div className="service-card">
                  <img src="images/Bg6.png" alt="Floor polishing" />
                  <h3>Floor polishing</h3>
                  <div className="price">₹300/hour</div>
                  <div className="rating">★★★★☆ (4.7)</div>
                  <button className="more-info">More service</button>
                </div>
              </div>
              <div className="carousel-nav">
                <button className="prev">←</button>
                <div className="dots">
                  <span className="dot active"></span>
                  <span className="dot"></span>
                  <span className="dot"></span>
                  <span className="dot"></span>
                </div>
                <button className="next">→</button>
              </div>
            </section>
          </main>
          <section className="reviews-section" style={{ display: 'grid', flexDirection: 'column', alignItems: 'center' }}>
            <h2>Valuable Words From Customers</h2>
            <div className="reviews-container">
              <div className="review-card">
                <div className="rating">★★★★★</div>
                <p className="review-text">Using their service was a great experience. When they approach with a new I'm feel free to book it.</p>
                <div className="reviewer">
                  <img src="images/profile_img2.png" alt="reviewer" className="reviewer-img" />
                  <div className="reviewer-info">
                    <p className="reviewer-name">Andres fonolosa</p>
                    <p className="platform">Trustpilot</p>
                  </div>
                </div>
              </div>
              <div className="review-card">
                <div className="rating">★★★★★</div>
                <p className="review-text">totally satisfied with the service. The staff was very friendly and helpful. They make me feel like I'm part of the family..</p>
                <div className="reviewer">
                  <img src="images/profile_img1.png" alt="reviewer" className="reviewer-img" />
                  <div className="reviewer-info">
                    <p className="reviewer-name">Marquinaa</p>
                    <p className="platform">Google Review</p>
                  </div>
                </div>
              </div>
              <div className="review-card">
                <div className="rating">★★★★★</div>
                <p className="review-text">Make my house clean and neat with healp of M2F and use their service for 2 years they are very good and helpful..</p>
                <div className="reviewer">
                  <img src="images/profile_img.png" alt="reviewer" className="reviewer-img" />
                  <div className="reviewer-info">
                    <p className="reviewer-name">Craig Hansen</p>
                    <p className="platform">trust Review</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="review-nav">
              <button className="nav-btn prev">←</button>
              <button className="nav-btn next">→</button>
            </div>
          </section>
          <section className="categories-section" style={{ display: 'grid', flexDirection: 'column', alignItems: 'center' }}>
            <h2>Choose <span className="highlight">Category</span> you want!!!</h2>
            <div className="categories-grid">
              <div className="category-card">
                <img src="images/cleaning.png" alt="Cleaning Services" />
                <h3>Cleaning Services</h3>
              </div>
              <div className="category-card">
                <img src="images/appliance.png" alt="Appliance repair" />
                <h3>Appliance repair</h3>
              </div>
              <div className="category-card">
                <img src="images/plumbing.png" alt="Plumbing works" />
                <h3>Plumbing works</h3>
              </div>
              <div className="category-card">
                <img src="images/Electrical.png" alt="Electrical works" />
                <h3>Electrical works</h3>
              </div>
              <div className="category-card">
                <img src="images/men salon.png" alt="Men's Spa & Salon" />
                <h3>Men's Spa & Salon</h3>
              </div>
              <div className="category-card">
                <img src="images/womens spa.png" alt="Women's Spa & Salon" />
                <h3>Women's Spa & Salon</h3>
              </div>
              <div className="category-card">
                <img src="images/all packages.png" alt="Real Estate" />
                <h3>Real Estate</h3>
              </div>
              <div className="category-card">
                <img src="images/all categories.png" alt="All Categories" />
                <h3>All Categories</h3>
              </div>
            </div>
          </section>
          <section className="tagline-section">
            <blockquote>"Bring homes to life, one service at a time"</blockquote>
          </section>
          <footer>
            <div className="footer-container">
              <div className="company-info">
                <div className="logo">
                  <a href="main1.html"><img src="images/logo.png" alt="M2F Logo" /></a>
                  <h2>Make To Fix</h2>
                </div>
                <p>your trusted partner for all your home service needs with quality workmanship, and customer satisfaction</p>
                <h3>Contact Us</h3>
                <div className="contact-details">
                  <p><i className="fas fa-map-marker-alt"></i> Chennai, Tamilnadu, India</p>
                  <p><i className="fas fa-envelope"></i> Make2Fix@gmail.com</p>
                  <p><i className="fas fa-phone"></i> +91 63807 65665</p>
                </div>
                <div className="social-links">
                  <a href="https://www.instagram.com/p/C9AQpe_yyBK/"><i className="fab fa-instagram"><img src="images/Instagram.png" /></i></a>
                  <a href="https://www.linkedin.com/in/skajaykumar/"><i className="fab fa-linkedin"><img src="images/Linkedin.png" /></i></a>
                  <a href="https://www.facebook.com/"><i className="fab fa-facebook"><img src="images/Facebook.png" /></i></a>
                  <a href="#"><i className="fab fa-twitter"><img src="images/X.png" /></i></a>
                  <a href="https://web.whatsapp.com/"><i className="fab fa-whatsapp"><img src="images/whatsapp.png" /></i></a>
                </div>
              </div>
              <div className="footer-section">
                <h3>For User</h3>
                <ul>
                  <li>Process flow</li>
                  <li>Ratings</li>
                  <li>Support team</li>
                  <li>Feedback</li>
                  <li>Update</li>
                  <li>Monitoring</li>
                  <li>Bills</li>
                </ul>
              </div>
              <div className="footer-section">
                <h3>For Partner</h3>
                <ul>
                  <li>Support team</li>
                  <li>User ratings</li>
                  <li>Feedback</li>
                  <li>Ratings (user)</li>
                  <li>Pay out query</li>
                  <li>Change no.</li>
                </ul>
              </div>
              <div className="footer-section">
                <h3>Company</h3>
                <ul>
                  <li>About us</li>
                  <li>Terms & conditions</li>
                  <li>Privacy policy</li>
                  <li>Careers</li>
                  <li>M2F impact</li>
                </ul>
              </div>
            </div>
            <div className="footer-bottom">
              <p>2025 M2F. All rights reserved</p>
            </div>
          </footer>
        </div>
      </main>
    </>
  );
}

export default Main1;



