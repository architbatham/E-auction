import './Viewproduct.css';
import { useState , useEffect } from 'react';
import axios from 'axios';
import { _productapiurl } from '../../Api.url';
import { Link, useParams } from 'react-router-dom';

function Viewproduct() {

  const params = useParams();
  const [ pDetails , setProductDetails ] = useState([]);

  useEffect(()=>{
    axios.get(_productapiurl+"fetch?subcatnm="+params.subcatnm).then((response)=>{
      const fetchProductDetails=response.data;
      var p=fetchProductDetails.map(product => {
        const initialtime = new Date(product.info);
        const timedifference = (new Date() - initialtime)/(1000*60*60);  
        return{
          ...product,
          timedifference:timedifference
        }
      });
      setProductDetails(p);  
    }).catch((error)=>{
      console.log(error);   
    });
  },[]);

  return (
    <>
            {/* About Start */}
            <div class="container-xxl py-5">
            <div class="container">
                <div class="row g-5 align-items-center">
                    <div class="col-lg-12 wow fadeInUp" data-wow-delay="0.1s">

<h1 class="mb-4">View Product List &gt;&gt; {params.subcatnm}</h1>

{
  pDetails.map((row)=>(
<center>
<table id="ptable" border="1">
<tr>
  <td rowspan="3">
    <center>
    <img src={`../assets/uploads/picons/${row.piconnm}`} height="100" width="150" />
    </center>
  </td>
  <td><b>Title : {row.title} </b></td>
</tr>
<tr>
  <td><b>Description : {row.description}</b></td>
</tr>  
<tr>
  <td>
  <b>Base price : {row.baseprice}</b>
  <br/>
  { row.timedifference>48 ?<button>Bid Closed</button>:<Link to={`/bidp/${row._id}`} ><button>Bid Running</button></Link> }
  </td>
</tr>
</table>
<br/><br/>
</center>

  ))
}

                    </div>
                </div>
            </div>
        </div>
        {/* About End */}
    </>
  );
}

export default Viewproduct;
