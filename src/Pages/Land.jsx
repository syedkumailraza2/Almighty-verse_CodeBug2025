"use client"

import { useEffect } from "react"
import { Link } from "react-router-dom"

const Land = () => {
  // Function to handle the intersection observer for animations
  useEffect(() => {
    // Select all elements that should be animated
    const animatedElements = document.querySelectorAll(".animate-on-scroll")

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Add the animation class when the element is visible
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slide-in")
            // Optionally unobserve after animation is triggered
            // observer.unobserve(entry.target);
          }
        })
      },
      {
        threshold: 0.1, // Trigger when at least 10% of the element is visible
        rootMargin: "0px 0px -50px 0px", // Slightly before the element comes into view
      },
    )

    // Observe all elements with the animate-on-scroll class
    animatedElements.forEach((element) => {
      observer.observe(element)
    })

    // Cleanup observer on component unmount
    return () => {
      animatedElements.forEach((element) => {
        observer.unobserve(element)
      })
    }
  }, [])

  return (
    <div
      className="bg-cover bg-center h-screen w-full fixed"
      style={{
        backgroundImage: "url('/Home (1).png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Content Wrapper */}
      <div className="overflow-y-auto h-full">
        {/* Navigation */}
        <div className="flex text-white justify-between px-12 pt-6 items-center mb-64 animate-on-scroll">
          <h1 className="text-4xl">WebRoom</h1>
          <div className="flex text-[#b1b1b1] space-x-6">
            
          <button
  className="text-xl"
  onClick={() => {
    document.querySelector("#Aboutsection").scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }}
>
  About Website
</button>

<button
  className="text-xl"
  onClick={() => {
    document.querySelector("#Quicklinks").scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }}
>
  Quick Links
</button>


          </div>
          <div className="flex text-white space-x-2">
            <Link to="/register">
              <button className="px-4 py-auto text-xl font-medium text-black bg-[#88EB63] h-9 rounded-full">
                Signup
              </button>
            </Link>
            <Link to="/login">
              <button className="px-4 py-auto text-xl font-medium text-[#ffffff] border-2 border-[#88EB63] h-9 rounded-full">
                Login
              </button>
            </Link>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-40 px-12 flex justify-between">
          <div className="space-y-40">
            <div className="animate-on-scroll" style={{ transitionDelay: "100ms" }}>
              <h1 className="text-white text-5xl font-medium">25k+</h1>
              <h1 className="text-[#c5c5c5]">Daily Visits</h1>
            </div>
            <div className="animate-on-scroll" style={{ transitionDelay: "200ms" }}>
              <h1 className="text-white text-5xl font-medium">2k+</h1>
              <h1 className="text-[#c5c5c5]">Registered College</h1>
            </div>
          </div>

          <div className="text-[#fff] flex flex-col items-center justify-between">
            <div
              className="w-[613px] text-center text-white text-base font-medium font-['Poppins'] animate-on-scroll"
              style={{ transitionDelay: "300ms" }}
            >
              WebRoom is a platform that allows you to build connections, share resources, and connect with your college
              mates.
            </div>
            <div className="w-[953px] text-center animate-on-scroll" style={{ transitionDelay: "400ms" }}>
              <span className="text-[#88eb63] text-5xl font-medium font-['Poppins']">WebRoom </span>
              <span className="text-white text-5xl font-medium font-['Poppins']">Build Connection </span>
              <span className="text-[#88eb63] text-5xl font-medium font-['Poppins']">Effortlessly</span>
              <span className="text-white text-5xl font-medium font-['Poppins']"> & Access Resources</span>
            </div>

            <div className="flex space-x-10 animate-on-scroll" style={{ transitionDelay: "500ms" }}>
              <Link to="/login">
                <div className="h-9 px-[19px] py-0.5 bg-[#88eb63] rounded-[39px] justify-start items-center gap-0.5 inline-flex overflow-hidden">
                  <div className="w-[69px] text-center text-black text-2xl font-medium">Login</div>
                </div>
              </Link>

              <Link to="/register">
                <div className="h-9 px-[19px] py-0.5 bg-white rounded-[39px] justify-start items-center inline-flex overflow-hidden">
                  <div className="w-[80px] text-center text-black text-2xl font-medium">Signup</div>
                </div>
              </Link>
            </div>
          </div>

          <div className="space-y-40">
            <div className="animate-on-scroll" style={{ transitionDelay: "600ms" }}>
              <h1 className="text-white text-5xl font-medium">20k+</h1>
              <h1 className="text-[#c5c5c5]">Registered Users</h1>
            </div>
            <div className="animate-on-scroll" style={{ transitionDelay: "700ms" }}>
              <h1 className="text-white text-5xl font-medium">5k+</h1>
              <h1 className="text-[#c5c5c5]">Registered College</h1>
            </div>
          </div>
        </div>

        {/* About Section */}
        <h1 id="Aboutsection" className="text-[#fff] mt-40 font-medium text-5xl text-center animate-on-scroll">Abouts</h1>

        <div className="mt-32 px-60 flex justify-between">
          <div className="flex flex-col space-y-4">
            {/* Card 1 */}
            <div
              className="h-[249px] w-96 px-[22px] py-5 bg-[#191818] rounded-[10px] flex-col justify-start items-start gap-2.5 inline-flex overflow-hidden animate-on-scroll"
              style={{ transitionDelay: "100ms" }}
            >
              <div className="self-stretch h-[209px] flex-col justify-start items-center gap-2.5 flex">
                <div className="w-[81px] h-[81px] p-[15px] bg-white rounded-[40.50px] justify-start items-center gap-2.5 inline-flex">
                  <div className="w-[50.62px] h-[50.62px] relative">
                    <div className="w-[50.62px] h-[50.62px] left-0 top-0 absolute" />
                    <div data-svg-wrapper className="left-[9.49px] top-[5.27px] absolute">
                      <svg width="33" height="41" viewBox="0 0 33 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M6.94213 40.5391C5.16006 40.5391 3.63955 39.9096 2.38061 38.6506C1.12166 37.3917 0.492188 35.8712 0.492188 34.0891V7.31641C0.492188 5.4127 1.15875 3.7941 2.49187 2.46062C3.82535 1.1275 5.44395 0.460938 7.34766 0.460938H32.1328V30.8032C31.2268 30.8032 30.4527 31.1244 29.8104 31.7667C29.1681 32.409 28.8469 33.1831 28.8469 34.0891C28.8469 34.9951 29.1681 35.7692 29.8104 36.4115C30.4527 37.0538 31.2268 37.375 32.1328 37.375V40.5391H6.94213ZM3.65625 28.609C4.13508 28.2817 4.64818 28.0382 5.19557 27.8786C5.7433 27.7193 6.32549 27.6397 6.94213 27.6397H8.28053V3.625H7.34766C6.3334 3.625 5.46469 3.98676 4.74152 4.71027C4.01801 5.43344 3.65625 6.30215 3.65625 7.31641V28.609ZM11.4446 27.6397H28.9688V3.625H11.4446V27.6397ZM6.94213 37.375H26.6527C26.3468 36.8962 26.1088 36.3885 25.9386 35.852C25.7681 35.3152 25.6829 34.7276 25.6829 34.0891C25.6829 33.4862 25.7627 32.9075 25.9223 32.3531C26.0819 31.7987 26.3254 31.2821 26.6527 30.8032H6.94213C6.001 30.8032 5.21807 31.1244 4.59334 31.7667C3.96861 32.409 3.65625 33.1831 3.65625 34.0891C3.65625 35.0303 3.96861 35.8132 4.59334 36.4379C5.21807 37.0626 6.001 37.375 6.94213 37.375Z"
                          fill="#2A9601"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="self-stretch text-center text-[#88eb63] text-2xl font-semibold font-['Poppins']">
                  Find Study Material
                </div>
                <div className="self-stretch text-center text-white text-base font-normal font-['Poppins']">
                  Filter based study material for student. notes like video, audio, dox available on our website.
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div
              className="h-[249px] w-96 px-[22px] py-5 bg-[#191818] rounded-[10px] flex-col justify-start items-start gap-2.5 inline-flex overflow-hidden animate-on-scroll"
              style={{ transitionDelay: "200ms" }}
            >
              <div className="self-stretch h-[209px] flex-col justify-start items-center gap-2.5 flex">
                <div className="w-[81px] h-[81px] p-[15px] bg-white rounded-[40.50px] justify-start items-center gap-2.5 inline-flex">
                  <div className="w-[50.62px] h-[50.62px] relative">
                    <div className="w-[50.62px] h-[50.62px] left-0 top-0 absolute" />
                    <div data-svg-wrapper className="left-[3.15px] top-[5.25px] absolute">
                      <svg width="45" height="41" viewBox="0 0 45 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M21.8665 37.3144C22.0746 37.3144 22.2862 37.2657 22.5014 37.1683C22.7162 37.0709 22.8858 36.96 23.0103 36.8356L39.8811 19.9648C40.3571 19.4888 40.7155 18.9802 40.9563 18.4392C41.1968 17.8985 41.317 17.3307 41.317 16.7358C41.317 16.1192 41.1968 15.5256 40.9563 14.955C40.7155 14.3841 40.3571 13.8715 39.8811 13.4173L31.4436 4.97977C30.9893 4.50375 30.4972 4.15553 29.967 3.9351C29.4372 3.71502 28.864 3.60498 28.2473 3.60498C27.6525 3.60498 27.0812 3.71502 26.5335 3.9351C25.9857 4.15553 25.4807 4.50375 25.0184 4.97977L23.8092 6.18897L27.7116 10.1235C28.1848 10.5752 28.5344 11.0904 28.7604 11.6691C28.9861 12.2478 29.099 12.8481 29.099 13.47C29.099 14.7574 28.669 15.8311 27.8091 16.691C26.9492 17.5509 25.8755 17.9809 24.5881 17.9809C23.9662 17.9809 23.3638 17.8781 22.7809 17.6724C22.1984 17.4671 21.6812 17.1386 21.2294 16.6868L17.2338 12.7238L8.06642 21.8912C7.90681 22.0508 7.7871 22.2294 7.7073 22.4269C7.62749 22.6242 7.58759 22.827 7.58759 23.0355C7.58759 23.4247 7.72013 23.7572 7.98521 24.0332C8.25028 24.3092 8.57741 24.4472 8.96659 24.4472C9.17507 24.4472 9.38671 24.3985 9.60151 24.3011C9.81667 24.2037 9.98648 24.0928 10.1109 23.9684L17.0392 17.0401L19.2619 19.2629L12.3659 26.1911C12.2066 26.3507 12.0871 26.5293 12.0073 26.7269C11.9275 26.9241 11.8875 27.127 11.8875 27.3354C11.8875 27.7113 12.0234 28.0351 12.2952 28.3068C12.5669 28.5786 12.8907 28.7145 13.2666 28.7145C13.475 28.7145 13.6867 28.6658 13.9015 28.5684C14.1166 28.471 14.2863 28.3601 14.4104 28.2356L21.5822 21.0964L23.8055 23.3192L16.6658 30.4911C16.5199 30.6155 16.4037 30.7852 16.3172 31C16.2308 31.2151 16.1875 31.4268 16.1875 31.6349C16.1875 32.0111 16.3234 32.335 16.5951 32.6068C16.8669 32.8785 17.1907 33.0144 17.5665 33.0144C17.7746 33.0144 17.9775 32.9745 18.1751 32.8947C18.3723 32.8149 18.5507 32.6952 18.7103 32.5356L25.8822 25.3964L28.1055 27.6192L20.9336 34.791C20.774 34.9506 20.6543 35.1359 20.5745 35.3469C20.4947 35.5578 20.4548 35.7606 20.4548 35.9554C20.4548 36.3446 20.5994 36.6684 20.8888 36.9268C21.1781 37.1852 21.504 37.3144 21.8665 37.3144ZM21.8338 40.4779C20.6413 40.4779 19.6015 40.0643 18.7145 39.2371C17.8275 38.4095 17.3638 37.3791 17.3234 36.1458C16.1281 36.0646 15.1295 35.6401 14.3276 34.8722C13.5257 34.1041 13.0909 33.0953 13.0234 31.8458C11.774 31.765 10.764 31.3283 9.99333 30.5359C9.22235 29.7435 8.8098 28.7468 8.75566 27.5459C7.50093 27.465 6.46523 27.0101 5.64855 26.1811C4.83187 25.3521 4.42353 24.3036 4.42353 23.0355C4.42353 22.4136 4.54183 21.8043 4.77843 21.2077C5.01503 20.6115 5.35921 20.0876 5.81097 19.6362L17.2338 8.24561L23.4121 14.4234C23.5362 14.5693 23.699 14.6857 23.9004 14.7725C24.1022 14.859 24.3207 14.9023 24.5559 14.9023C24.9398 14.9023 25.271 14.7752 25.5494 14.521C25.8282 14.2668 25.9676 13.9341 25.9676 13.5227C25.9676 13.2875 25.9244 13.0692 25.8379 12.8678C25.7511 12.6663 25.6347 12.5034 25.4888 12.3789L18.0896 4.97977C17.6354 4.50375 17.1399 4.15553 16.6031 3.9351C16.0662 3.71502 15.4895 3.60498 14.8728 3.60498C14.278 3.60498 13.7136 3.71502 13.1795 3.9351C12.6452 4.15553 12.1401 4.50375 11.6645 4.97977L4.73571 11.9407C4.35181 12.3246 4.03751 12.7783 3.79282 13.3018C3.54814 13.8249 3.40417 14.3584 3.36093 14.9023C3.31734 15.3512 3.33755 15.7954 3.42157 16.2349C3.50525 16.6743 3.65255 17.0874 3.86349 17.4741L1.53526 19.8023C1.05925 19.1154 0.701007 18.346 0.460538 17.4942C0.219718 16.6423 0.120929 15.7784 0.164171 14.9023C0.207413 13.9312 0.426436 12.9935 0.821241 12.0889C1.21605 11.1843 1.76905 10.3764 2.48026 9.66521L9.38847 2.75701C10.1784 1.98885 11.0378 1.41088 11.9667 1.0231C12.8955 0.634979 13.8711 0.440918 14.8934 0.440918C15.9154 0.440918 16.8875 0.634979 17.8096 1.0231C18.7321 1.41088 19.5773 1.98885 20.3451 2.75701L21.5543 3.96569L22.763 2.75701C23.5526 1.98885 24.4084 1.41088 25.3306 1.0231C26.2527 0.634979 27.225 0.440918 28.2473 0.440918C29.2697 0.440918 30.2453 0.634979 31.1741 1.0231C32.1029 1.41088 32.9514 1.98885 33.7196 2.75701L42.1043 11.1418C42.8722 11.9099 43.4603 12.7841 43.8688 13.7643C44.277 14.7444 44.4811 15.7457 44.4811 16.768C44.4811 17.7904 44.277 18.7626 43.8688 19.6847C43.4603 20.6069 42.8722 21.4519 42.1043 22.2197L25.233 39.0583C24.7679 39.5234 24.2441 39.8764 23.6616 40.1172C23.0787 40.3577 22.4694 40.4779 21.8338 40.4779Z"
                          fill="#2A9601"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="self-stretch text-center text-[#88eb63] text-2xl font-semibold font-['Poppins']">
                  Find Project
                </div>
                <div className="self-stretch text-center text-white text-base font-normal font-['Poppins']">
                  Find appropriate project partner for your upcoming projects based on skills designation etc.
                </div>
              </div>
            </div>
          </div>

          <div className="animate-on-scroll" style={{ transitionDelay: "300ms" }}>
            <img className="h-auto w-[300rem]" src="Mokeup.png" alt="" />
          </div>

          <div className="flex flex-col space-y-4 justify-center items-center">
            {/* Card 3 */}
            <div
              className="h-[225px] w-96 px-[22px] py-5 bg-[#191818] rounded-[10px] flex-col justify-start items-start gap-2.5 inline-flex overflow-hidden animate-on-scroll"
              style={{ transitionDelay: "400ms" }}
            >
              <div className="self-stretch h-[185px] flex-col justify-start items-center gap-2.5 flex">
                <div className="w-[81px] h-[81px] p-[15px] bg-white rounded-[40.50px] justify-start items-center gap-2.5 inline-flex">
                  <div className="w-[50.62px] h-[50.62px] relative">
                    <div className="w-[50.62px] h-[50.62px] left-0 top-0 absolute" />
                    <div data-svg-wrapper className="left-[7.38px] top-[5.03px] absolute">
                      <svg width="41" height="43" viewBox="0 0 41 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M3.54688 13.7663H33.0781V8.49285C33.0781 8.33043 33.0105 8.18172 32.8751 8.04672C32.7401 7.91137 32.5914 7.84369 32.429 7.84369H4.19604C4.03361 7.84369 3.8849 7.91137 3.7499 8.04672C3.61455 8.18172 3.54688 8.33043 3.54688 8.49285V13.7663ZM4.19604 40.539C3.13045 40.539 2.22852 40.1699 1.49023 39.4316C0.751953 38.6933 0.382812 37.7914 0.382812 36.7258V8.49285C0.382812 7.42726 0.751953 6.52533 1.49023 5.78705C2.22852 5.04877 3.13045 4.67963 4.19604 4.67963H7.11647V0.217773H10.3617V4.67963H26.3445V0.217773H29.5085V4.67963H32.429C33.4946 4.67963 34.3965 5.04877 35.1348 5.78705C35.8731 6.52533 36.2422 7.42726 36.2422 8.49285V20.0174C35.7363 19.7956 35.2197 19.6163 34.6923 19.4795C34.165 19.3431 33.6269 19.2357 33.0781 19.1573V16.9304H3.54688V36.7258C3.54688 36.8882 3.61455 37.0369 3.7499 37.1719C3.8849 37.3073 4.03361 37.3749 4.19604 37.3749H17.9112C18.0894 37.9589 18.3051 38.5112 18.5582 39.0319C18.811 39.5525 19.0982 40.0549 19.4199 40.539H4.19604ZM31.3743 42.6484C28.7404 42.6484 26.4999 41.7248 24.6528 39.8777C22.8056 38.0306 21.8821 35.7901 21.8821 33.1562C21.8821 30.5223 22.8056 28.2818 24.6528 26.4347C26.4999 24.5876 28.7404 23.664 31.3743 23.664C34.0085 23.664 36.249 24.5876 38.0958 26.4347C39.9429 28.2818 40.8665 30.5223 40.8665 33.1562C40.8665 35.7901 39.9429 38.0306 38.0958 39.8777C36.249 41.7248 34.0085 42.6484 31.3743 42.6484ZM34.8874 37.9835L36.2016 36.6694L32.3077 32.7749V26.9499H30.4414V33.5375L34.8874 37.9835Z"
                          fill="#2A9601"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="self-stretch text-center text-[#88eb63] text-2xl font-semibold font-['Poppins']">
                  Event Calendar
                </div>
                <div className="self-stretch text-center text-white text-base font-normal font-['Poppins']">
                  A dedicated event calendar
                  <br />
                  for upcoming events
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div
              className="h-[201px] w-96 px-[22px] py-5 bg-[#191818] rounded-[10px] flex-col justify-start items-start gap-2.5 inline-flex overflow-hidden animate-on-scroll"
              style={{ transitionDelay: "500ms" }}
            >
              <div className="self-stretch h-[161px] flex-col justify-start items-center gap-2.5 flex">
                <div className="w-[81px] h-[81px] p-[15px] bg-white rounded-[40.50px] justify-start items-center gap-2.5 inline-flex">
                  <div className="w-[50.62px] h-[50.62px] relative">
                    <div className="w-[50.62px] h-[50.62px] left-0 top-0 absolute" />
                    <div data-svg-wrapper className="left-[9.49px] top-[7.38px] absolute">
                      <svg width="33" height="37" viewBox="0 0 33 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M0.492188 36.4297V26.8927C0.492188 25.8436 0.865547 24.9466 1.61227 24.2016C2.35898 23.4563 3.2567 23.0837 4.30541 23.0837H28.3196C29.3683 23.0837 30.266 23.457 31.0127 24.2038C31.7595 24.9505 32.1328 25.8482 32.1328 26.8969V36.4297H0.492188ZM10.2887 20.1632C7.57846 20.1632 5.26816 19.208 3.35777 17.2977C1.44738 15.3873 0.492188 13.077 0.492188 10.3668C0.492188 7.65658 1.44738 5.34629 3.35777 3.4359C5.26816 1.52551 7.57846 0.570312 10.2887 0.570312H22.3363C25.0465 0.570312 27.3568 1.52551 29.2672 3.4359C31.1776 5.34629 32.1328 7.65658 32.1328 10.3668C32.1328 13.077 31.1776 15.3873 29.2672 17.2977C27.3568 19.208 25.0465 20.1632 22.3363 20.1632H10.2887ZM3.65625 33.2656H28.9688V26.8969C28.9688 26.7078 28.9079 26.5522 28.7863 26.4302C28.6646 26.3086 28.5091 26.2477 28.3196 26.2477H4.30541C4.11592 26.2477 3.96035 26.3086 3.83871 26.4302C3.71707 26.5522 3.65625 26.7078 3.65625 26.8969V33.2656ZM10.2887 16.9992H22.3363C24.1887 16.9992 25.7572 16.3569 27.0418 15.0723C28.3264 13.7877 28.9688 12.2192 28.9688 10.3668C28.9688 8.5144 28.3264 6.9459 27.0418 5.66129C25.7572 4.37668 24.1887 3.73438 22.3363 3.73438H10.2887C8.43627 3.73438 6.86777 4.37668 5.58316 5.66129C4.29856 6.9459 3.65625 8.5144 3.65625 10.3668C3.65625 12.2192 4.29856 13.7877 5.58316 15.0723C6.86777 16.3569 8.43627 16.9992 10.2887 16.9992ZM10.2881 12.1919C10.8049 12.1919 11.2384 12.0172 11.5886 11.6677C11.9387 11.3179 12.1138 10.8845 12.1138 10.3673C12.1138 9.85051 11.9391 9.41703 11.5896 9.06687C11.2398 8.71637 10.8063 8.54111 10.2892 8.54111C9.77238 8.54111 9.33891 8.71601 8.98875 9.06582C8.63824 9.41562 8.46299 9.8491 8.46299 10.3663C8.46299 10.883 8.63789 11.3165 8.9877 11.6667C9.3375 12.0168 9.77098 12.1919 10.2881 12.1919ZM22.3358 12.1919C22.8526 12.1919 23.2861 12.0172 23.6363 11.6677C23.9868 11.3179 24.162 10.8845 24.162 10.3673C24.162 9.85051 23.9871 9.41703 23.6373 9.06687C23.2875 8.71637 22.854 8.54111 22.3369 8.54111C21.8201 8.54111 21.3866 8.71601 21.0364 9.06582C20.6863 9.41562 20.5112 9.8491 20.5112 10.3663C20.5112 10.883 20.6859 11.3165 21.0354 11.6667C21.3852 12.0168 21.8187 12.1919 22.3358 12.1919Z"
                          fill="#2A9601"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="self-stretch text-center text-[#88eb63] text-2xl font-semibold font-['Poppins']">
                  Ai mentor
                </div>
                <div className="self-stretch text-center text-white text-base font-normal font-['Poppins']">
                  Ai mentor for doubt solving
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer id="Quicklinks" className="bg-black animate-on-scroll" style={{ transitionDelay: "600ms" }}>
          <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              <div>
                <h1 className="text-white text-2xl font-bold">WebRoom</h1>
                <p className="max-w-xs mt-4 text-sm text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, accusantium.
                </p>
                <div className="flex mt-8 space-x-6 text-white">
                  <a className="hover:opacity-75" href target="_blank" rel="noreferrer">
                    <span className="sr-only"> Facebook </span>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                  <a className="hover:opacity-75" href target="_blank" rel="noreferrer">
                    <span className="sr-only"> Instagram </span>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                  <a className="hover:opacity-75" href target="_blank" rel="noreferrer">
                    <span className="sr-only"> Twitter </span>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a className="hover:opacity-75" href target="_blank" rel="noreferrer">
                    <span className="sr-only"> GitHub </span>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                  <a className="hover:opacity-75" href target="_blank" rel="noreferrer">
                    <span className="sr-only"> Dribbble </span>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-8 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-4">
                <div>
                  <p className="font-medium text-[#88eb63]">Company</p>
                  <nav className="flex flex-col mt-4 space-y-2 text-sm text-white">
                    <a className="hover:opacity-75" href>
                      {" "}
                      About{" "}
                    </a>
                    <a className="hover:opacity-75" href>
                      {" "}
                      Meet the Team{" "}
                    </a>
                    <a className="hover:opacity-75" href>
                      {" "}
                      History{" "}
                    </a>
                    <a className="hover:opacity-75" href>
                      {" "}
                      Careers{" "}
                    </a>
                  </nav>
                </div>
                <div>
                  <p className="font-medium text-[#88eb63]">Services</p>
                  <nav className="flex flex-col mt-4 space-y-2 text-sm text-white">
                    <a className="hover:opacity-75" href>
                      {" "}
                      1on1 Coaching{" "}
                    </a>
                    <a className="hover:opacity-75" href>
                      {" "}
                      Company Review{" "}
                    </a>
                    <a className="hover:opacity-75" href>
                      {" "}
                      Accounts Review{" "}
                    </a>
                    <a className="hover:opacity-75" href>
                      {" "}
                      HR Consulting{" "}
                    </a>
                    <a className="hover:opacity-75" href>
                      {" "}
                      SEO Optimisation{" "}
                    </a>
                  </nav>
                </div>
                <div>
                  <p className="font-medium text-[#88eb63]">Helpful Links</p>
                  <nav className="flex flex-col mt-4 space-y-2 text-sm text-white">
                    <a className="hover:opacity-75" href>
                      {" "}
                      Contact{" "}
                    </a>
                    <a className="hover:opacity-75" href>
                      {" "}
                      FAQs{" "}
                    </a>
                    <a className="hover:opacity-75" href>
                      {" "}
                      Live Chat{" "}
                    </a>
                  </nav>
                </div>
                <div>
                  <p className="font-medium text-[#88eb63]">Legal</p>
                  <nav className="flex flex-col mt-4 space-y-2 text-sm text-white">
                    <a className="hover:opacity-75" href>
                      {" "}
                      Privacy Policy{" "}
                    </a>
                    <a className="hover:opacity-75" href>
                      {" "}
                      Terms &amp; Conditions{" "}
                    </a>
                    <a className="hover:opacity-75" href>
                      {" "}
                      Returns Policy{" "}
                    </a>
                    <a className="hover:opacity-75" href>
                      {" "}
                      Accessibility{" "}
                    </a>
                  </nav>
                </div>
              </div>
            </div>
            <p className="mt-8 text-xs text-white">© 2022 Company Name</p>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Land