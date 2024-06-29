import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import toast, {Toaster} from "react-hot-toast";
import PreLoader from "views/PreLoader.js";
import { updateAadhar, updatePan, updateProfile, updateProfilePicture } from "../../redux/actions/profile.js";
import { clearError, clearMessage } from "./../../redux/reducer/profileSlicer.js";

export default function CardUpdateProfile() {

  const { user, loading } = useSelector(state => state.user);
  const { error, message } = useSelector(state => state.profile);
  const [email, setEmail] = useState(user?user.email:"");
  const [name, setName] = useState(user?user.name:"");
  const [address, setAddress] = useState(user?user.address:"");
  const [phoneNumber, setPhoneNumber] = useState(user?user.phoneNumber:"");

  const dispatch = useDispatch();

  // Profile Update
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(updateProfile(name, email, phoneNumber, address));
  }

  const [image, setImage] = useState(null);
  const [imagePrev, setImagePrev] = useState(null);

  const [imageAadhar, setImageAadhar] = useState(null);
  const [imageAadharPrev, setImageAadharPrev] = useState(null);

  const [imagePan, setImagePan] = useState(null);
  const [imagePanPrev, setImagePanPrev] = useState(null);

  const UploadPhotoHandler = (e) => {
    if (image) {
      const myform = new FormData();
      myform.append('file', image);
      dispatch(updateProfilePicture(myform));
    }
    if(imageAadhar) {
      const myform = new FormData();
      myform.append('file', imageAadhar);
      dispatch(updateAadhar(myform));
    }
    if(imagePan) {
      const myform = new FormData();
      myform.append('file', imagePan);
      dispatch(updatePan(myform));
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImagePrev(reader.result);
      setImage(file);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleAadharImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImageAadharPrev(reader.result);
      setImageAadhar(file);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handlePanImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImagePanPrev(reader.result);
      setImagePan(file);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  useEffect(()=> {
    if(error) {
      toast.error(error);
      dispatch(clearError());
    }
    if(message) {
      toast.success(message);
      dispatch(clearMessage());
    }
  },[dispatch, error, message]);

  return (
    <>
    {loading ?  <PreLoader />: <></>}
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
        <div className="rounded-t bg-white mb-0 px-6 py-6">
          <div className="text-center flex justify-between">
            <h6 className="text-blueGray-700 text-xl font-bold ">My Profile</h6>
            <button
              className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
              type="button"
              onClick={submitHandler}
            >
              Update Profile
            </button>
          </div>
        </div>
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
          <form>
            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              User Information
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    defaultValue={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    defaultValue={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <hr className="mt-6 border-b-1 border-blueGray-300" />

            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              Contact Information
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-12/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Address
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    defaultValue={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Phone Number
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    defaultValue={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Toaster/>
    </>
  );
}
