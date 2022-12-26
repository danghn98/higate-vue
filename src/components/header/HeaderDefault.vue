<template>
  <div
    class="bg-white dark:bg-white border-b border-b-body-text/[0.1] sticky top-0 z-50 duration-300"
  >
    <div
      class="flex justify-between items-center px-[16px] md:px-[30px] xl2:px-0 max-w-[1128px] mx-auto"
    >
      <div class="flex items-center">
        <div
          class="block w-[93.60px] pt-[22px] pb-[23px] lg:w-[142.75px] cursor-pointer"
        >
          <div>
            <img src="@/assets/images/Logo-light.png" alt="logo" />
          </div>
        </div>
        <ul class="hidden lg:flex lg:ml-[49.25px]">
          <li
            class="group relative flex ml-[32px] items-center text-title-text text-body-text2 pt-[30px] pb-[31px] font-OpenSans font-semibold leading-[20.02px]"
          >
            <div class="flex cursor-pointer">
              <p>For Agencies</p>
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                class="ml-[5px]"
                height="20"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0V0z"></path>
                <path
                  d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"
                ></path>
              </svg>
            </div>
            <div
              class="hidden group-hover:block top-[101%] border-t-[1px] border-t-body-text/[0.1] absolute z-10 bg-white shadow-xl w-[255px] rounded-b-2xl px-4"
            >
              <div class="inline-block w-full py-2 cursor-pointer">
                <div class="flex">
                  <div>
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 16 16"
                      style="
                        color: #0f23d0;
                        margin-right: 18px;
                        margin-top: 2px;
                      "
                      height="16"
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5zm1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0zM1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5z"
                      ></path>
                    </svg>
                  </div>
                  <div
                    class="flex text-body-text2 leading-[22.88px] text-title-text font-OpenSans font-normal"
                  >
                    <p class="mr-2">On-demand Remote Jobs</p>
                  </div>
                </div>
              </div>
              <div class="inline-block w-full py-2 cursor-pointer">
                <div class="flex">
                  <img
                    src="@/assets/icons/Three-people.png"
                    class="w-[16px] h-[16px] mr-[18px] mt-[2px]"
                    alt=""
                  />
                  <div
                    class="flex text-body-text2 leading-[22.88px] text-title-text font-OpenSans font-normal"
                  >
                    <p class="mr-2">Collaboration Process</p>
                  </div>
                </div>
              </div>
              <div class="inline-block w-full py-2 cursor-pointer">
                <div class="flex">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 16 16"
                    style="color: #0f23d0; margin-right: 18px; margin-top: 2px"
                    height="16"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3.854 2.146a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708L2 3.293l1.146-1.147a.5.5 0 0 1 .708 0zm0 4a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708L2 7.293l1.146-1.147a.5.5 0 0 1 .708 0zm0 4a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z"
                    ></path>
                  </svg>
                  <div
                    class="flex text-body-text2 leading-[22.88px] text-title-text font-OpenSans font-normal"
                  >
                    <p class="mr-2">Get Listed</p>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li
            class="group relative flex ml-[32px] items-center text-title-text text-body-text2 pt-[30px] pb-[31px] font-OpenSans font-semibold leading-[20.02px]"
          >
            <div class="flex cursor-pointer">
              <a href="/developer/for-developers"> For Developers</a>
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                class="ml-[5px]"
                height="20"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0V0z"></path>
                <path
                  d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"
                ></path>
              </svg>
            </div>
            <div
              class="hidden group-hover:block top-[101%] border-t-[1px] border-t-body-text/[0.1] absolute bg-white shadow-xl w-[255px] rounded-b-2xl px-4"
            >
              <div class="inline-block w-full py-2 cursor-pointer">
                <div class="flex">
                  <div>
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 16 16"
                      style="
                        color: #0f23d0;
                        margin-right: 18px;
                        margin-top: 2px;
                      "
                      height="16"
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5zm1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0zM1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5z"
                      ></path>
                    </svg>
                  </div>
                  <div
                    class="flex text-body-text2 leading-[22.88px] text-title-text font-OpenSans font-normal"
                  >
                    <p class="mr-2">On-demand Remote Jobs</p>
                  </div>
                </div>
              </div>
              <div class="inline-block w-full py-2 cursor-pointer">
                <div class="flex">
                  <img
                    src="@/assets/icons/Remote.png"
                    class="w-[16px] h-[16px] mr-[18px] mt-[2px]"
                    alt=""
                  />
                  <div
                    class="flex text-body-text2 leading-[22.88px] text-title-text font-OpenSans font-normal"
                  >
                    <p class="mr-2">Remote Developer Jobs</p>
                  </div>
                </div>
              </div>
              <div class="inline-block w-full py-2 cursor-pointer">
                <div class="flex">
                  <img
                    src="@/assets/icons/CV.png"
                    class="w-[16px] h-[16px] mr-[18px] mt-[2px]"
                    alt=""
                  />
                  <div
                    class="flex text-body-text2 leading-[22.88px] text-title-text font-OpenSans font-normal"
                  >
                    <p class="mr-2">Resume Guides</p>
                  </div>
                </div>
              </div>
              <div class="inline-block w-full py-2 cursor-pointer">
                <div class="flex">
                  <img
                    src="@/assets/icons/Book.png"
                    class="w-[16px] h-[16px] mr-[18px] mt-[2px]"
                    alt=""
                  />
                  <div
                    class="flex text-body-text2 leading-[22.88px] text-title-text font-OpenSans font-normal"
                  >
                    <p class="mr-2">Developer Knowledge Hub</p>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li
            class="flex group relative items-center ml-[32px] text-title-text text-body-text2 pt-[30px] pb-[31px] font-OpenSans font-semibold leading-[20.02px]"
          >
            <div class="flex cursor-pointer">
              <a href="/company/for-companies">For Firms</a>
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                class="ml-[5px]"
                height="20"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0V0z"></path>
                <path
                  d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"
                ></path>
              </svg>
            </div>
            <div
              class="hidden group-hover:block top-[101%] border-t-[1px] border-t-body-text/[0.1] absolute bg-white shadow-xl w-[255px] rounded-b-2xl px-4"
            >
              <div class="inline-block w-full py-2 cursor-pointer">
                <div class="flex">
                  <img
                    src="@/assets/icons/Earmark.png"
                    class="w-[16px] h-[16px] mr-[18px] mt-[2px]"
                    alt=""
                  />
                  <div
                    class="flex text-body-text2 leading-[22.88px] text-title-text font-OpenSans font-normal"
                  >
                    <p class="mr-2">Hire Verified Developers</p>
                  </div>
                </div>
              </div>
              <div class="inline-block w-full py-2 cursor-pointer">
                <div class="flex">
                  <img
                    src="@/assets/icons/Mail.png"
                    class="w-[16px] h-[16px] mr-[18px] mt-[2px]"
                    alt=""
                  />
                  <div
                    class="flex text-body-text2 leading-[22.88px] text-title-text font-OpenSans font-normal"
                  >
                    <p class="mr-2">Job Description Template</p>
                  </div>
                </div>
              </div>
              <div class="inline-block w-full py-2 cursor-pointer">
                <div class="flex">
                  <img
                    src="@/assets/icons/People.png"
                    class="w-[16px] h-[16px] mr-[18px] mt-[2px]"
                    alt=""
                  />
                  <div
                    class="flex text-body-text2 leading-[22.88px] text-title-text font-OpenSans font-normal"
                  >
                    <p class="mr-2">Recruitment Resources</p>
                  </div>
                </div>
              </div>
              <div class="inline-block w-full py-2 cursor-pointer">
                <div class="flex">
                  <img
                    src="@/assets/icons/Book-line.png"
                    class="w-[16px] h-[16px] mr-[18px] mt-[2px]"
                  />
                  <div
                    class="flex text-body-text2 leading-[22.88px] text-title-text font-OpenSans font-normal"
                  >
                    <p class="mr-2">Hiring Process</p>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="flex items-center xl2:mt-[22px] xl2:mb-[23px]">
        <div class="flex mr-[13px] md:mr-0 xl:hidden">
          <div>
            <button
              class="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiExample_Component-menu_bar css-1ujsas3"
              tabindex="0"
              type="button"
            >
              <svg
                stroke="currentColor"
                fill="none"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke-linecap="round"
                stroke-linejoin="round"
                height="18"
                width="18"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
              <span class="MuiTouchRipple-root css-w0pj6f"></span>
            </button>
            <div
              class="PrivateSwipeArea-root css-x15wq9"
              style="width: 20px"
            ></div>
          </div>
        </div>
        <div
          class="text-primary-1 text-center relative group overflow-hidden px-4 py-2 text-body-text1 mr-[13px] cursor-pointer hover:bg-[#0f23d00a] font-OpenSans font-semibold items-center justify-center rounded hidden md:flex"
        >
          <a href="/blogs"
            >Blogs<span
              class="absolute w-0 h-0 transition-all duration-500 ease-in-out bg-[#0f23d04d] rounded-full group-active:w-40 group-active:h-40 opacity-10"
            ></span
          ></a>
        </div>
        <div
          class="w-[155px] h-[40px] relative group overflow-hidden text-center cursor-pointer text-secondary hover:bg-[#0B1992] active:bg-primary-1 text-body-text1 font-OpenSans font-semibold bg-primary-1 items-center justify-center rounded hidden md:flex"
        >
          <a href="https://console.higate.io/f/your-post-p"
            >Hire Candidates<span
              class="absolute w-0 h-0 transition-all duration-500 ease-in-out bg-white rounded-full group-active:w-40 group-active:h-40 opacity-10"
            ></span
          ></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderDefault",
};
</script>
