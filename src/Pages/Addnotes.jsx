import React from 'react'

function Addnotes() {
  return (
    <div className='bg-[#000] py-12 flex-col  w-full'>
           <div className="w-[1297px] h-[657px] relative bg-[#fff] rounded-[20px] border border-[#808080] backdrop-blur-[18.60px]  overflow-hidden mx-auto">
  <div className="left-[203px] top-[563px] absolute text-center text-white text-[40px] font-bold font-['Poppins']">WebRoom.</div>
  <div className="left-[22px] top-[25px] absolute justify-start items-center gap-[77px] inline-flex">
    <img src='uploadnotesimg.png'></img>
    <div className="w-[574px] flex-col justify-start items-center gap-[38px] inline-flex">
      <div className="self-stretch text-center text-black text-[40px] font-semibold font-['Poppins']">Upload Your Notes !</div>
      <div className="w-[574px] h-[478px] relative">
        <div className="w-[279px] h-[81px] left-[1px] top-0 absolute flex-col justify-start items-start gap-[7px] inline-flex">
          <div className="self-stretch text-black text-base font-medium font-['Poppins']">Enter Event name :</div>
          <div className="self-stretch h-[50px] flex-col justify-center items-start gap-2.5 flex">
            <div className="self-stretch h-[50px] bg-white rounded-lg border border-black" />
          </div>
          <div className="w-[100px] h-6 left-[16px] top-[44px] absolute text-neutral-500 text-base font-medium font-['Poppins']">Ex. Codebug</div>
        </div>
        <div className="w-[279px] h-[81px] left-[292px] top-0 absolute flex-col justify-start items-start gap-[7px] inline-flex">
          <div className="self-stretch text-black text-base font-medium font-['Poppins']">Enter Event Date:</div>
          <div className="self-stretch h-[50px] px-4 py-[13px] bg-white rounded-lg border border-black justify-start items-center gap-2.5 inline-flex">
            <div className="text-center text-neutral-500 text-base font-medium font-['Poppins']">Ex. 2-2-2025</div>
          </div>
        </div>
        <div className="w-[280px] h-[83px] left-0 top-[95px] absolute flex-col justify-start items-start gap-[9px] inline-flex">
          <div className="self-stretch text-black text-base font-medium font-['Poppins']">Event Cover Img :</div>
          <div className="self-stretch h-[50px] px-4 py-[13px] bg-white rounded-lg border border-black justify-start items-center gap-2.5 inline-flex">
            <div className="text-center text-neutral-500 text-base font-medium font-['Poppins']">Ex. Bca</div>
          </div>
        </div>
        <div className="w-[280px] h-[81px] left-0 top-[194px] absolute flex-col justify-start items-start gap-[7px] inline-flex">
          <div className="self-stretch text-black text-base font-medium font-['Poppins']">Upload Document (PFD):</div>
          <div className="self-stretch h-[50px] px-4 py-[13px] bg-white rounded-lg border border-black justify-start items-center gap-2.5 inline-flex">
            <div className="text-center text-neutral-500 text-base font-medium font-['Poppins']">Ex. Brochure.pdf</div>
          </div>
        </div>
        <div className="w-[279px] h-[83px] left-[292px] top-[95px] absolute flex-col justify-start items-start gap-[9px] inline-flex">
          <div className="self-stretch text-black text-base font-medium font-['Poppins']">Add Link :</div>
          <div className="self-stretch h-[50px] px-4 py-[13px] bg-white rounded-lg border border-black justify-start items-center gap-2.5 inline-flex">
            <div className="text-center text-neutral-500 text-base font-medium font-['Poppins']">Ex. Google form link</div>
          </div>
        </div>
        <div className="w-[573px] h-[125px] left-[1px] top-[286px] absolute flex-col justify-start items-start gap-2.5 inline-flex">
          <div className="w-[573px] h-[125px] relative">
            <div className="w-[573px] h-[92px] left-0 top-[33px] absolute bg-white rounded-lg border border-black" />
            <div className="left-0 top-0 absolute text-center text-black text-base font-medium font-['Poppins']">Event description :</div>
          </div>
        </div>
        <div className="w-[570px] h-[50px] px-[218px] py-2 left-[1px] top-[428px] absolute bg-black rounded-[10px] justify-center items-center gap-2.5 inline-flex">
          <div className="text-center text-white text-xl font-medium font-['Poppins']">Upload Event</div>
        </div>
      </div>
    </div>
  </div>
</div>
    </div>
    
  )
}

export default Addnotes