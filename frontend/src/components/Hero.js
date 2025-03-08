// import React from "react";
//  import { ReactTyped as Typed } from "react-typed";

// const Hero = () => {
//   return (
//     <div className="w-full h-[90vh]">
//       <img
//         src="https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3433&q=80"
//         alt="/"
//         className="w-full h-full object-cover"
//       />
//       <div className="max-w-[1140px] m-auto">
//         <div className="absolute top-[40%] w-full md:-[50%] max-w-[600px] h-full flex flex-col text-white p-4">
//           {/* <h1 className="font-bold text-4xl">Find Your Special Trip</h1>
//           <h2 className="text-4xl py-4 italic">With TripIn</h2> */}
//           <h1 className="font-bold text-4xl">
//             <Typed
//               strings={[
//                 "Find Your Special Trip",
//                 "Explore the World",
//                 "Discover Hidden Gems",
//                 "Plan Your Dream Vacation",
//               ]}
//               typeSpeed={100}
//               backSpeed={80}
//               loop
//             />
//           </h1>
//           <h2 className="text-4xl py-4 italic">With TripIn</h2>

//           <p>
//             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae
//             doloribus totam dicta ab ratione. Explicabo eveniet dolor, omnis in
//             recusandae temporibus suscipit cum nihil officia deserunt possimus
//             saepe praesentium accusamus!
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;

import React from "react";
import { ReactTyped as Typed } from "react-typed";

const Hero = () => {
  return (
    <div className="relative w-full h-[90vh] overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/back.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center text-center">
        <div className="max-w-[600px] text-white p-4">
          <h1 className="font-bold text-4xl">
            <Typed
              strings={[
                "Find Your Special Trip",
                "Explore the World",
                "Discover Hidden Gems",
                "Plan Your Dream Vacation",
              ]}
              typeSpeed={100}
              backSpeed={80}
              loop
            />
          </h1>
          <h2 className="text-4xl py-4 italic">With TripIn</h2>
          {/* <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae
            doloribus totam dicta ab ratione. Explicabo eveniet dolor, omnis in
            recusandae temporibus suscipit cum nihil officia deserunt possimus
            saepe praesentium accusamus!
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
