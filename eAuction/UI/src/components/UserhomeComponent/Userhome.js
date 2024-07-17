import './Userhome.css';

function Userhome() {

  return (
    <>
            {/* About Start */}
            <div class="container-xxl py-5">
            <div class="container">
                <div class="row g-5 align-items-center">
                    <div class="col-lg-12 wow fadeInUp" data-wow-delay="0.1s">
                        <h1 class="mb-4">Welcome to eAuction , User panel</h1>
                        <p className="lead"> Explore the available options to view, add, and bid on products.</p>
                        <div className="card-body">
                  <h5 className="card-title">View Products</h5>
                  <p className="card-text">Browse and search through available auction items.</p>
                </div>

                <div className="card-body">
                  <h5 className="card-title">Add Products</h5>
                  <p className="card-text">List your items for auction by providing the necessary details.</p>
                </div>


                <div className="card-body">
                  <h5 className="card-title">View Bid Products</h5>
                  <p className="card-text">Check the products you have bid on and monitor their status.</p>
                </div>
                        </div>
                </div>
            </div>
        </div>
        {/* About End */}
    </>
  );
}

export default Userhome;
