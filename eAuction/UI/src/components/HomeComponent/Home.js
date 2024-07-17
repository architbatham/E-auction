import './Home.css';

function Home() {

  const products = [
    { id: 1, name: 'Portrait', image: 'assets/img/Home-img/Self-portrait, Vincent van Gogh.jpg' },
    { id: 2, name: 'Jewellery', image: 'assets/img/Home-img/jewlery.jpg' },
    { id: 3, name: 'Bronze Sculpture', image: 'assets/img/Home-img/Minerva and Cupid, Gerolamo Campagna,.jpg' },
    { id: 4, name: 'Wood Sculpture', image: 'assets/img/Home-img/Descent into Limbo.jpg' },
    { id: 5, name: 'Marbel Sculpture', image: 'assets/img/Home-img/Christ as Savior, Giovanni Battista Caccini.jpg' },
    { id: 6, name: 'Old Bed', image: 'assets/img/Home-img/Four Bed.jpg' },
    { id: 7, name: 'Old Chair', image: 'assets/img/Home-img/Troonzetel van koning Willem II,….jpg' },
    { id: 8, name: 'Wood Statue', image: 'assets/img/Home-img/unnamed.jpg' },
    // Add more products as needed
  ];

  return (
    <>
      {/* About Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-12 wow fadeInUp" data-wow-delay="0.1s">
              <h1 className="mb-4">Welcome to eAuction, Home page</h1>
              <h1>The collection </h1><br/>
              {/* <p>Tempor erat elitr rebum at clita...</p> */}
            </div>
          </div>

          {/* Gallery Start */}
          <div className="row g-4">
            {products.map(product => (
              <div className="col-lg-3 col-md-4 col-sm-6" key={product.id}>
                <div className="product-card">
                  <img src={product.image} alt={product.name} className="img-fluid" />
                  <h5 className="product-name">{product.name}</h5>
                </div>
              </div>
            ))}
          </div>
          {/* Gallery End */}
        </div>
      </div>
      {/* About End */}
    </>
  );
}

export default Home;
