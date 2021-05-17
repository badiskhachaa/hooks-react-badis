
import React from "react";

import Carousel from 'react-bootstrap/Carousel';
function Slide() {
    return (
<div className="carousel">
        <Carousel>
          <Carousel.Item interval={10000}>
            <img
              className="d-block w-100"
              src="https://occ-0-2706-2705.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABSZ3miYuuIHKfQTvw6GdqF9-1gnvLx6OYxQP7TJ_qy9-Pq4LHbWBNIL_CgwsGwpNE59f2TDgQ3dZffG9qwQpMXrF8CVr13iMvwDyrP47UOECdHAX17jvbaY6l0Vs.jpg?r=4a7"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>SEX!FY</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={550}>
            <img
              className="d-block w-100"
              src="https://occ-0-2706-2705.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABTpCR8YGDediYhXcOIuU0xcSVxnsyvXv7LZztq4sB8QeN0IJLwz400Co4sjB_VhYoziLgjRUfBZC2RXR7KKdoeIcI7P2-P5M_wyOgUwMFBrVHHTNyntGPdh3Sreg.jpg?r=a13"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>DARK</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://occ-0-2706-2705.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABaizldA2Mr2fuycgoOcrD8IS4W5DsUnkgAtWUNjg8B2torQEdAIysOfA8cxa7m9M7asMfeL2L3soViNSxZoaB8ZkJJQ.jpg?r=46d"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>FRIENDS</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
};
    
export default Slide;