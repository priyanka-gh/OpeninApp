import React, { useState} from 'react';

const Modal = ({ setDisplayAddProfile }) => {
  const userData = JSON.parse(localStorage.getItem('userprofile'));

  const [formValue, setFormValue] = useState(0);
  const [name, setName] = useState(userData?.name || "");
  const [email, setEmail] = useState(userData?.email || "");
  const [phone, setPhone] = useState(userData?.phone || "");
  const [instaLink, setInstaLink] = useState(userData?.social.instaLink || "");
  const [ytLink, setYtLink] = useState(userData?.social.ytLink || "");

  const highlightDivClass = (divNumber) => {
    if (divNumber === formValue) return "highlightDiv blue-div";
    else return "highlightDiv grey-div";
  };

    const dropdownsvg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
      <path d="M12.5 6.25L8 10.75L3.5 6.25" stroke="#999CA0" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`;

  const closesvg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
      <path d="M5.25 5.75L12 12.5M12 12.5L5.25 19.25M12 12.5L18.75 19.25M12 12.5L18.75 5.75" stroke="#999CA0" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`;

  const renderForm = () => {
    if (formValue === 0) {
      return (
        <div className="form-container my-[24px]">
          <label className="text-black font-Figtree text-[16px]">Enter Name*</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Eg. John Doe"
            className="w-full mt-[8px] p-[12px] border border-gray-300 rounded"
          />
          <label className="text-black font-Figtree text-[16px] mt-[24px]">Enter Email*</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Eg. John@xyz.com"
            className="w-full mt-[8px] p-[12px] border border-gray-300 rounded"
          />
          <label className="text-black font-Figtree text-[16px] mt-[24px]">Enter Phone*</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Eg. 9123456789"
            className="w-full mt-[8px] p-[12px] border border-gray-300 rounded"
          />
        </div>
      );
    } else {
      return (
        <div className="form-container">
          <label className="text-black font-Figtree text-[16px]">Instagram Link <span className='text-[#999CA0]'>(Optional)</span></label>
          <input
            type="url"
            value={instaLink}
            onChange={(e) => setInstaLink(e.target.value)}
            placeholder="Eg. ..instagram.com/username"
            className="w-full mt-[8px] p-[12px] border border-gray-300 rounded"
          />
          <label className="text-black font-Figtree text-[16px] mt-[24px]">Youtube Link <span className='text-[#999CA0]'>(Optional)</span></label>
          <input
            type="url"
            value={ytLink}
            onChange={(e) => setYtLink(e.target.value)}
            placeholder="Eg. ..youtube/username"
            className="w-full mt-[8px] p-[12px] border border-gray-300 rounded"
          />
        </div>
      );
    }
  };

  const submit = () => {
    setDisplayAddProfile(false);
    const user = {
      name,
      email,
      phone,
      social: {
        instaLink,
        ytLink,
      },
    };
  
    localStorage.setItem('userprofile', JSON.stringify(user));
    const userData = localStorage.getItem('userprofile');
    if(userData){
      const user = JSON.parse(userData);
      console.log('first',user.name)
    }

  };

  const renderButtons = () => {
    if (formValue === 0) {
      return (
        <div className="mt-[24px]">
          <button
            onClick={() => {
              setFormValue(1);
            }}
            className="px-4 py-2 bg-[#3E84F8] rounded text-white font-Figtree font-semibold"
          >
            Next
          </button>
        </div>
      );
    } else {
      return (
        <div className="mt-[24px]">
          <button
            onClick={() => {
              setFormValue(0);
            }}
            className="p-4 py-2 mr-[8px] bg-[#FFFFFF] rounded text-black border border-[##999CA0] font-Figtree font-semibold"
          >
            Back
          </button>
          <button
            onClick={submit}
            className="px-4 py-2 bg-[#3E84F8] rounded text-white font-Figtree font-semibold"
          >
            Done
          </button>
        </div>
      );
    }
  };

  const profileClass = 'w-[544px] h-[553px]'; 
  const otherClass = 'w-[544px] h-[463px]';

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 ">
      <div className= {`bg-white rounded-lg sm:w-[70%] sm:h-[90%] xs:w-[70%] xs:h-[90%] ${formValue == 0 ? profileClass : otherClass}`}>
        <div className="top-bar flex justify-between items-center h-[64px] pt-[16px] mb-[24px] px-[24px]">
          <h2 className="text-black font-Figtree text-[24px] font-semibold">Add New Profile</h2>
          <div onClick={() => {setDisplayAddProfile(false)}} dangerouslySetInnerHTML={{ __html: closesvg }}/>
        </div>
        <div className="main-body h-[40px] mx-[24px] my-[24px]">
          <div className='grid grid-cols-2 mt-[24px] mb-[24px]'>
            <div>
              <div className="formSwitchButtons text-black font-Figtree border-b-[4px] pb-[12px] border-[#3F84F8] font-bold text-[16px] mr-[27px] text-center">Basic</div>
            </div>
            <div>
              <div className="formSwitchButtons text-black font-Figtree  border-b-[4px] pb-[12px]  font-bold text-[16px] text-center mr-[27px] border-[#D9D9D9]">{formValue == 0 ? 'Contact' : 'Social'}</div>
            </div>
          </div>
          <div className={highlightDivClass(0)}></div>
          <div className={highlightDivClass(1)}></div>
          <div>
          <div className='w-full'>
          {renderForm()}
          </div>
          <div className="flex justify-end items-center h-[64px]">
            {renderButtons()}
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
