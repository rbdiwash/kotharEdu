import React from "react";

const Classes = () => {
  return (
    <>
      <section id="classes" className="">
        <div className="container mx-auto my-auto h-full  py-12 md:py-24">
          <div className="row items-center text-center  h-full my-auto">
            <div className="md:text-6xl font-bold text-white leading-loose">
              TEST PREPERATION <br /> CLASSES
            </div>
            <div className="section-subHeading text-white mb-20">
              We have best experienced teachers who <br /> can guide you prepare
              for entrance test.
            </div>
          </div>
        </div>
      </section>{" "}
      <div className="container mx-auto mt-[-100px] z-50">
        <div className="grid grid-cols-3 lg:gap-40 gap-10">
          <div className="col-span-1">
            <div className="bg-gradient-to-t from-[#648dc7] to-[#64adc7] rounded-lg flex items-center justify-center">
              <div className="text-3xl font-bold leading-loose text-white p-20 tracking-widest	">
                IELTS
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <div className="bg-gradient-to-t from-[#648dc7] to-[#64adc7] rounded-lg flex items-center justify-center">
              <div className="text-3xl font-bold leading-loose text-white p-20 tracking-widest	">
                PTE
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <div className="bg-gradient-to-t from-[#648dc7] to-[#64adc7] rounded-lg flex items-center justify-center">
              <div className="text-3xl font-bold leading-loose text-white p-20 tracking-widest	">
                RPL
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Classes;
