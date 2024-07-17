import './Adminhome.css';

function Adminhome() {

  return (
    <>
            {/* About Start */}
            <div class="container-xxl py-5">
            <div class="container">
                <div class="row g-5 align-items-center">
                    <div class="col-lg-12 wow fadeInUp" data-wow-delay="0.1s">
                        <h1 class="mb-4">Welcome to eAuction , Admin panel</h1>
                        <p className="lead">Here you can manage various aspects of the eAuction platform efficiently and effectively.</p>

                <div className="card-body">
                  <h5 className="card-title">Manage Users</h5>
                  <p className="card-text">View, edit, and remove users from the platform.</p>
                </div>



                <div className="card-body">
                  <h5 className="card-title">Edit Profile</h5>
                  <p className="card-text">Update your profile information and change your password.</p>
                </div>
        


                <div className="card-body">
                  <h5 className="card-title">Manage Categories</h5>
                  <p className="card-text">Add, edit, categories for the auction items.</p>
                </div>
                
                       </div>
                </div>
               
            </div>
            
        </div>
        
        {/* About End */}
    </>
  );
}

export default Adminhome;
