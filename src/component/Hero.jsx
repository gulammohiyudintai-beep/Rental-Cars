function Hero() {

  // 👇 APNI BMW IMAGE URL YAHAN PASTE KARO
  const bmwImage =
    "https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/topics/magazine-article-pool/2024/wallpaper/m-wallpaper/3-0-csl/bmw-3-0-csl-mi-05.jpg?imwidth=1440";

  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-90px)] bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{
        backgroundImage: `url("${bmwImage}")`,
      }}
    >

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* LEFT DARK GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#06111c] via-[#06111c]/85 to-transparent"></div>


      {/* HERO CONTENT */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-8">

        {/* 👇 TEXT KO NICHE KIYA */}
        <div className="pt-[120px] md:pt-[150px] lg:pt-[160px] max-w-[650px]">

          {/* SMALL TEXT */}
          <p className="text-[#FFC400] text-sm md:text-base font-bold tracking-[0.12em] rent">
            RENT YOUR RIDE. OWN THE JOURNEY.
          </p>


          {/* HEADING */}
          <h1 className="text-white text-5xl sm:text-6xl lg:text-[64px] xl:text-[70px] font-extrabold leading-[1.05] tracking-[-2px] rent1">

            Local or Luxury,

            <br />

            <span className="text-[#FFC400]">
              We've Got You Covered.
            </span>

          </h1>


          {/* DESCRIPTION */}
          <p className="mt-7 max-w-[570px] text-white/90 text-base md:text-lg leading-7">
            From everyday city rides to luxurious experiences,
            choose the perfect car for every journey.
          </p>


          {/* FEATURES */}
          <div className="flex flex-wrap gap-8 mt-10">

            {/* FEATURE 1 */}
            <div className="flex items-center gap-3">

              <div className="w-12 h-12 rounded-full border border-[#FFC400] flex items-center justify-center text-[#FFC400] text-lg star1">
                ★
              </div>

              <div>
                <p className="text-white text-sm font-semibold text1">
                  Best Prices
                </p>

                <p className="text-white/70 text-xs">
                  Guaranteed
                </p>
              </div>

            </div>


            {/* FEATURE 2 */}
            <div className="flex items-center gap-3">

              <div className="w-12 h-12 rounded-full border border-[#FFC400] flex items-center justify-center text-[#FFC400] text-lg star1">
                ◫
              </div>

              <div>
                <p className="text-white text-sm font-semibold text1">
                  Easy Booking
                </p>

                <p className="text-white/70 text-xs">
                  In Just 3 Steps
                </p>
              </div>

            </div>


            {/* FEATURE 3 */}
            <div className="flex items-center gap-3">

              <div className="w-12 h-12 rounded-full border border-[#FFC400] flex items-center justify-center text-[#FFC400] text-lg star1">
                ♧
              </div>

              <div>
                <p className="text-white text-sm font-semibold text1">
                  24/7 Customer
                </p>

                <p className="text-white/70 text-xs star2">
                  Support
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;