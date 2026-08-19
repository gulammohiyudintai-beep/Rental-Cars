import { useState } from "react";

function Location() {
    const [activeTab, setActiveTab] = useState("local");

    const [formData, setFormData] = useState({
        pickupLocation: "",
        dropoffLocation: "",
        pickupDate: "2025-05-18",
        pickupTime: "10:00",
        carType: "all",
    });

    // ================================
    // INPUT CHANGE
    // ================================

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };


    // ================================
    // TAB CHANGE
    // ================================

    const handleTabChange = (tab) => {
        setActiveTab(tab);

        setFormData((prev) => ({
            ...prev,
            carType: tab === "luxury" ? "luxury" : "all",
        }));
    };


    // ================================
    // FORM SUBMIT
    // ================================

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("Rental Search:", formData);
    };


    return (
        <section className="relative z-20 -mt-[60px] w-full px-6 sm:px-8">

            {/* ==================================================
          MAIN RENTAL BOX
      ================================================== */}

            <div
                className="
          mx-auto
          w-full
          max-w-[1100px]
          overflow-hidden
          rounded-[14px]
          border
          border-[#303A45]
          bg-[#111B26]
          shadow-[0_8px_25px_rgba(0,0,0,0.25)]
          location
        "
            >

                {/* ==================================================
            TABS
        ================================================== */}

                <div className="flex h-[52px] items-center gap-2 px-4">

                    {/* ---------------- LOCAL RENTAL ---------------- */}

                    <button
                        type="button"
                        onClick={() => handleTabChange("local")}
                        className={`
              flex
              h-[38px]
              items-center
              gap-2
              rounded-[8px]
              px-5
              text-[13px]
              font-semibold
              transition-all
              duration-200
              location1

              ${activeTab === "local"
                                ? "bg-[#FFC400] text-[#101923]"
                                : "bg-transparent text-white hover:bg-[#26323E]"
                            }
            `}
                    >

                        {/* Car Icon */}
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M5 17H4C3.45 17 3 16.55 3 16V11.5C3 10.67 3.67 10 4.5 10H6L8 5.5C8.32 4.59 9.19 4 10.15 4H13.85C14.81 4 15.68 4.59 16 5.5L18 10H19.5C20.33 10 21 10.67 21 11.5V16C21 16.55 20.55 17 20 17H19"
                                stroke="currentColor"
                                strokeWidth="1.7"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />

                            <path
                                d="M6 10H18"
                                stroke="currentColor"
                                strokeWidth="1.7"
                                strokeLinecap="round"
                            />

                            <circle
                                cx="7"
                                cy="17"
                                r="1.5"
                                stroke="currentColor"
                                strokeWidth="1.7"
                            />

                            <circle
                                cx="17"
                                cy="17"
                                r="1.5"
                                stroke="currentColor"
                                strokeWidth="1.7"
                            />
                        </svg>

                        Local Rental

                    </button>


                    {/* ---------------- EXPENSIVE CARS ---------------- */}

                    <button
                        type="button"
                        onClick={() => handleTabChange("luxury")}
                        className={`
              flex
              h-[38px]
              items-center
              gap-2
              rounded-[8px]
              px-5
              text-[13px]
              font-semibold
              transition-all
              duration-200

              ${activeTab === "luxury"
                                ? "bg-[#FFC400] text-[#101923]"
                                : "bg-transparent text-white hover:bg-[#26323E]"
                            }
            `}
                    >

                        {/* Diamond Icon */}

                        <svg
                            width="17"
                            height="17"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M6 3H18L22 8L12 21L2 8L6 3Z"
                                stroke="currentColor"
                                strokeWidth="1.8"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />

                            <path
                                d="M2 8H22"
                                stroke="currentColor"
                                strokeWidth="1.8"
                            />

                            <path
                                d="M8 3L6 8L12 21"
                                stroke="currentColor"
                                strokeWidth="1.5"
                            />

                            <path
                                d="M16 3L18 8L12 21"
                                stroke="currentColor"
                                strokeWidth="1.5"
                            />
                        </svg>

                        Expensive Cars

                    </button>

                </div>


                {/* ==================================================
            FORM
        ================================================== */}

                <form
                    onSubmit={handleSubmit}
                    className="
            grid
            grid-cols-1
            items-end
            gap-3
            px-4
            pb-5
            md:grid-cols-2
            lg:grid-cols-6
          "
                >

                    {/* ==================================================
              PICK-UP LOCATION
          ================================================== */}

                    <div className="min-w-0">

                        <label
                            className="
                mb-2
                block
                text-[10px]
                font-medium
                leading-none
                text-[#E1E5E8]
              "
                        >
                            Pick-up Location
                        </label>

                        <div className="relative">

                            <input
                                type="text"
                                name="pickupLocation"
                                placeholder="Enter location"
                                value={formData.pickupLocation}
                                onChange={handleChange}
                                required
                                className="
                  h-[54px]
                  w-full
                  rounded-[7px]
                  border
                  border-[#3A4652]
                  bg-[#1D2935]
                  pl-[38px]
                  pr-3
                  text-[13px]
                  font-medium
                  text-white
                  outline-none
                  transition
                  placeholder:text-[#D0D5DA]
                  focus:border-[#FFC400]
                  focus:bg-[#202D39]
                "
                            />

                        </div>

                    </div>


                    {/* ==================================================
              DROP-OFF LOCATION
          ================================================== */}

                    <div className="min-w-0">

                        <label
                            className="
                mb-2
                block
                text-[10px]
                font-medium
                leading-none
                text-[#E1E5E8]
              "
                        >
                            Drop-off Location
                        </label>

                        <div className="relative">


                            <input
                                type="text"
                                name="dropoffLocation"
                                placeholder="Enter location"
                                value={formData.dropoffLocation}
                                onChange={handleChange}
                                required
                                className="
                  h-[54px]
                  w-full
                  rounded-[7px]
                  border
                  border-[#3A4652]
                  bg-[#1D2935]
                  pl-[38px]
                  pr-3
                  text-[13px]
                  font-medium
                  text-white
                  outline-none
                  transition
                  placeholder:text-[#D0D5DA]
                  focus:border-[#FFC400]
                  focus:bg-[#202D39]
                "
                            />

                        </div>

                    </div>


                    {/* ==================================================
              PICK-UP DATE
          ================================================== */}

                    <div className="min-w-0">

                        <label
                            className="
                mb-2
                block
                text-[10px]
                font-medium
                leading-none
                text-[#E1E5E8]
              "
                        >
                            Pick-up Date
                        </label>

                        <div className="relative">

                            


                            <input
                                type="date"
                                name="pickupDate"
                                value={formData.pickupDate}
                                onChange={handleChange}
                                required
                                className="
                  h-[54px]
                  w-full
                  rounded-[7px]
                  border
                  border-[#3A4652]
                  bg-[#1D2935]
                  pl-[38px]
                  pr-3
                  text-[13px]
                  font-medium
                  text-white
                  outline-none
                  transition
                  focus:border-[#FFC400]
                  focus:bg-[#202D39]
                "
                            />

                        </div>

                    </div>


                    {/* ==================================================
              PICK-UP TIME
          ================================================== */}

                    <div className="min-w-0">

                        <label
                            className="
                mb-2
                block
                text-[10px]
                font-medium
                leading-none
                text-[#E1E5E8]
              "
                        >
                            Pick-up Time
                        </label>

                        <div className="relative">

                        


                            <input
                                type="time"
                                name="pickupTime"
                                value={formData.pickupTime}
                                onChange={handleChange}
                                required
                                className="
                  h-[54px]
                  w-full
                  rounded-[7px]
                  border
                  border-[#3A4652]
                  bg-[#1D2935]
                  pl-[38px]
                  pr-3
                  text-[13px]
                  font-medium
                  text-white
                  outline-none
                  transition
                  focus:border-[#FFC400]
                  focus:bg-[#202D39]
                "
                            />

                        </div>

                    </div>


                    {/* ==================================================
              CAR TYPE
          ================================================== */}

                    <div className="min-w-0">

                        <label
                            className="
                mb-2
                block
                text-[10px]
                font-medium
                leading-none
                text-[#E1E5E8]
              "
                        >
                            Car Type
                        </label>

                        <div className="relative">

                        


                            <select
                                name="carType"
                                value={formData.carType}
                                onChange={handleChange}
                                className="
                  h-[54px]
                  w-full
                  cursor-pointer
                  appearance-none
                  rounded-[7px]
                  border
                  border-[#3A4652]
                  bg-[#1D2935]
                  pl-[38px]
                  pr-9
                  text-[13px]
                  font-medium
                  text-white
                  outline-none
                  transition
                  focus:border-[#FFC400]
                  focus:bg-[#202D39]
                "
                            >
                                <option value="all">
                                    All Types
                                </option>

                                <option value="hatchback">
                                    Hatchback
                                </option>

                                <option value="sedan">
                                    Sedan
                                </option>

                                <option value="suv">
                                    SUV
                                </option>

                                <option value="luxury">
                                    Luxury
                                </option>

                                <option value="sports">
                                    Sports
                                </option>

                            </select>


                            {/* Dropdown Arrow */}

                            <svg
                                className="
                  pointer-events-none
                  absolute
                  right-3
                  top-1/2
                  h-[15px]
                  w-[15px]
                  -translate-y-1/2
                  text-[#DCE0E4]
                "
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <path
                                    d="M6 9L12 15L18 9"
                                    stroke="currentColor"
                                    strokeWidth="1.8"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>

                        </div>

                    </div>


                    {/* ==================================================
              SEARCH BUTTON
          ================================================== */}

                    <button
                        type="submit"
                        className="
              h-[54px]
              w-full
              rounded-[7px]
              bg-[#FFC400]
              px-3
              text-[13px]
              font-bold
              text-[#101923]
              transition-all
              duration-200
              hover:-translate-y-[1px]
              hover:bg-[#FFD027]
              hover:shadow-[0_5px_15px_rgba(255,196,0,0.25)]
              active:translate-y-0
            "
                    >
                        Search Cars
                    </button>

                </form>

            </div>

        </section>
    );
}

export default Location;