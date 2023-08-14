import React from "react";
import OursecData from "../utils/OursecData";
import { OurData } from "../utils/Data";

function Oursection() {
  return (
    <div>
      <section className="container py-4 my-5" style={{backgroundColor:"#383F51"}}>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {OurData.map((item, key) => (
            <div className="col-lg-4 col-md-6">
              <div className="card mx-3 rounded-0 border-0" >
                <OursecData
                  imgsrc={item.imgsrc}
                  title={item.title}
                  description={item.description}
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Oursection;
