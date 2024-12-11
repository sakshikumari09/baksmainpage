"use client";
import React, { useRef, useState } from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import LinearDeterminate from "./ProgressBar";
import { validationSchema4 } from "./Utils/ValidationSchema";
import { useFormik } from "formik";

function Page4({ values, appendvalues, page, handleForward, handleBackward }) {
  const fileInputRef = useRef(null);
  const [fileName, setFileName] = useState("");

  // const handleFileUpload = () => {
  //   fileInputRef.current.click();
  // };


  // const handleFileChange = async (event) => {
  //   const file = event.target.files[0];
  //   if (file) {
  //     const resizedImage = await resizeImage(file, 800, 800); // Resize to 800x800 pixels
  //     formik.setFieldValue("restaurantimage", {
  //       file,
  //       base64: resizedImage,
  //     });
  //     setFileName(file.name);
  //   }
  // };

  const handleSubmitforward = (values) => {
    appendvalues({ ...values, restaurantimage: values?.restaurantimage?.base64 });
    handleForward(page);
  };

  const initialValues = {
    restaurantopeninghours: values.restaurantopeninghours || "",
    restaurantclosinghours: values.restaurantclosinghours || "",
    noofchef: values.noofchef || "",
    noofseatingcapacity: values.noofseatingcapacity || "",
    nooftables: values.nooftables || "",
    noofemployees: values.noofemployees || "",
    noofwaiters: values.noofwaiters || "",
    restaurantimage: null,
  };

  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema4,
    onSubmit: (values, action) => {
      //console.log(values);
      handleSubmitforward(values);
      action.resetForm();
    },
  });

  return (
    <div className="w-full max-w-md p-8 space-y-6 mx-2 noscrollbar relative overflow-y-auto lg:h-[650px] h-[750px] bg-white rounded-lg shadow-md">
      <div className="absolute top-0  left-0 right-0">
        <LinearDeterminate currentProgress={60} />
      </div>
      <h2
        
        className="text-left text-amber-500 -mb-5 tracking-widest text-sm"
      >
        <span onClick={() => handleBackward(page)} className="cursor-pointer "><KeyboardBackspaceIcon /> Go back</span>
      </h2>
      <h2 className="text-3xl font-bold text-left text-indigo-600">
        Fill Restaurant Details
      </h2>
      <form onSubmit={formik.handleSubmit}>
        <div className="flex flex-col space-y-4">
          <div className="flex items-center justify-between space-x-4">
            <div className="flex flex-col space-y-1">
              <label htmlFor="restaurantopeninghours" className="text-sm text-gray-700">
                Opens at&nbsp;<span className="text-red-500">*</span>
              </label>
              <input
                type="time"
                id="restaurantopeninghours"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.restaurantopeninghours}
                name="restaurantopeninghours"
                placeholder=" "
                className="text-zinc-500 font-semibold px-3 py-2 border border-gray-300 rounded-lg focus:outline-none"
              />
              <div className="h-5">
              {formik.errors.restaurantopeninghours && formik.touched.restaurantopeninghours ? (
                <p className="form-error p-[2px] text-[0.65rem] text-zinc-500">
                  {formik.errors.restaurantopeninghours}
                </p>
              ) : null}
              </div>
            </div>
            <div className="flex flex-col space-y-1">
              <label htmlFor="restaurantclosinghours" className="text-sm text-gray-700">
                Closes at&nbsp;<span className="text-red-500">*</span>
              </label>
              <input
                type="time"
                id="restaurantclosinghours"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.restaurantclosinghours}
                name="restaurantclosinghours"
                placeholder=" "
                className="text-zinc-500 font-semibold px-3 py-2 border border-gray-300 rounded-lg focus:outline-none"
              />
              <div className="h-5">
              {formik.errors.restaurantclosinghours && formik.touched.restaurantclosinghours ? (
                <p className="form-error p-[2px] text-[0.65rem] text-zinc-500">
                  {formik.errors.restaurantclosinghours}
                </p>
              ) : null}
              </div>
            </div>
          </div>
          {/* -------------------------------------------------------------- */}
          <div className="flex border-t border-dashed pt-2 items-center justify-between space-x-4">
            <div className="flex flex-col space-y-1 w-[36%]">
              <label htmlFor="noofchef" className="text-sm text-gray-700">
                No. of Chef&nbsp;<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="noofchef"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.noofchef}
                name="noofchef"
                min={0}
                placeholder=" "
                className="text-zinc-900 font-semibold px-3 py-2 border border-gray-300 rounded-lg focus:outline-none"
              />
              <div className="h-5">
              {formik.errors.noofchef && formik.touched.noofchef ? (
                <p className="form-error p-[2px] text-[0.65rem] text-zinc-500">
                  {formik.errors.noofchef}
                </p>
              ) : null}
              </div>
            </div>
            <div className="flex flex-col space-y-1 w-[36%]">
              <label htmlFor="noofseatingcapacity" className="text-sm text-gray-700">
                Seating Capacity&nbsp;<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="noofseatingcapacity"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.noofseatingcapacity}
                name="noofseatingcapacity"
                min={0}
                placeholder=" "
                className="text-zinc-900 font-semibold px-3 py-2 border border-gray-300 rounded-lg focus:outline-none"
              />
              <div className="h-5">
              {formik.errors.noofseatingcapacity && formik.touched.noofseatingcapacity ? (
                <p className="form-error p-[2px] text-[0.65rem] text-zinc-500">
                  {formik.errors.noofseatingcapacity}
                </p>
              ) : null}
              </div>
            </div>
          </div>
          {/* -------------------------------------------------------------- */}
          <div className="flex border-t border-dashed pt-2 items-center justify-between space-x-4">
            <div className="flex flex-col space-y-1 w-[36%]">
              <label htmlFor="nooftables" className="text-sm text-gray-700">
                No. of Tables&nbsp;<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="nooftables"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.nooftables}
                name="nooftables"
                min={0}
                placeholder=" "
                className="text-zinc-900 font-semibold px-3 py-2 border border-gray-300 rounded-lg focus:outline-none"
              />
              <div className="h-5">
              {formik.errors.nooftables && formik.touched.nooftables ? (
                <p className="form-error p-[2px] text-[0.65rem] text-zinc-500">
                  {formik.errors.nooftables}
                </p>
              ) : null}
              </div>
            </div>
            <div className="flex flex-col space-y-1 w-[36%]">
              <label htmlFor="noofemployees" className="text-sm text-gray-700">
                No. of employees&nbsp;<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="noofemployees"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.noofemployees}
                name="noofemployees"
                min={0}
                placeholder=" "
                className="text-zinc-900 font-semibold px-3 py-2 border border-gray-300 rounded-lg focus:outline-none"
              />
              <div className="h-5">
              {formik.errors.noofemployees && formik.touched.noofemployees ? (
                <p className="form-error p-[2px] text-[0.65rem] text-zinc-500">
                  {formik.errors.noofemployees}
                </p>
              ) : null}
              </div>
            </div>
          </div>
          {/* -------------------------------------------------------------- */}
          <div className="flex border-t border-dashed pt-2 items-center justify-between space-x-4">
            <div className="flex flex-col space-y-1 w-full">
              <label htmlFor="noofwaiters" className="text-sm text-gray-700">
                No. of waiters&nbsp;<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="noofwaiters"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.noofwaiters}
                name="noofwaiters"
                min={0}
                placeholder=" "
                className="text-zinc-900 font-semibold px-3 py-2 border border-gray-300 rounded-lg focus:outline-none"
              />
              <div className="h-5">
              {formik.errors.noofwaiters && formik.touched.noofwaiters ? (
                <p className="form-error p-[2px] text-[0.65rem] text-zinc-500">
                  {formik.errors.noofwaiters}
                </p>
              ) : null}
              </div>
            </div>
  
          </div>
          {/* -------------------------------------------------------------- */}
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
          >
            Next
          </button>
        </div>
      </form>
      <p className="text-sm text-center text-gray-600">
        <a href="#" className="font-medium text-zinc-500 tracking-tight underline">
          Connect with team Baksish
        </a>
      </p>
    </div>
  );
}

export default Page4;
