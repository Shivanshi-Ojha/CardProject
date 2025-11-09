import React from "react";

const Products = ({elm:{title,description,thumbnail,price,category}}) => {
  return (
    <div className="col-4 border">
    <div className="col-4 border m-1 overflow hidden " style={{height:"64vh",width:"100%"}}>  
        <div classname="row g-0 border d-flex align-item-center overflow-hidden rounded  mb-4 shadow-sm h-md-250 position-relative" style={{height:"64vh"}}>
          
          <div classname="col-6 p-4 d-flex flex-column position-static">
            
            <h5 classname="d-inline-block mb-2 text-primary-emphasis">
              {title}
            </h5>
            <h3 className="mb-1 text-secondary ">Category:  {category}</h3>
            <h5 className="mb-0">price: ${price}</h5>
            <div classname="col-6 d-none d-lg-block">
            <img src={thumbnail} classname="bd-placeholder-img " style={{width:"60%",height:"50%"}}/>
          </div>
            <p classname="card-text mb-auto">{description}</p>
          </div>
          
        </div>
        
    </div>
  </div>
  );
};

export default Products;
