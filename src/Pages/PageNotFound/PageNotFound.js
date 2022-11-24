import React from 'react';
import not from '../../assets/images/not.png'
const PageNotFound = () => {
    return (


<div className="hero  ">

<div className="hero-content flex-col lg:flex-row-reverse">
<figure><img src={not} alt="Shoes" /></figure>
  <div>
    <h1 className="text-5xl font-bold">Ooooops.4O4 page not found!!!!</h1>
    <p className="py-6">Buddy!Seems you enter in wrong palce </p>
    
  </div>
</div>
</div>
    );
};

export default PageNotFound;