import React from 'react';

const CategoryIcon = () => {
  return (
    <div className="flex flex-row mt-10 gap-10 text-[#c4c0cc] absolute left-1/2 transform -translate-x-1/2">
      <div className="flex justify-center flex-col w-16 items-center">
        <svg width="30" height="30" className="svg-white" viewBox="0 0 40 41">
          <g id="mic_svg__icon_selection">
            <path
              id="mic_svg__primary_fill"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.813 5.003a7.812 7.812 0 00-4.705 14.05 2.5 2.5 0 004.24 2.137l.556-.555 12.322 10.47c.247.21.614.195.845-.033l.517-.512c.494.43 1.141.693 1.85.693a2.8 2.8 0 001.497-.431l3.998 3.998a.625.625 0 00.884-.884l-3.998-3.998a2.8 2.8 0 00.43-1.497c0-.698-.254-1.337-.674-1.828l.546-.54a.625.625 0 00.035-.85L20.633 12.905l.554-.554a2.5 2.5 0 00-2.137-4.24 7.801 7.801 0 00-6.237-3.109zm15.624 25c-.36 0-.692-.122-.956-.327l2.201-2.18a1.562 1.562 0 01-1.245 2.507zm-8.691-16.21L18.1 15.439a.625.625 0 11-.884-.884l3.087-3.087A1.25 1.25 0 0018.535 9.7L9.697 18.54a1.25 1.25 0 101.768 1.768l3.072-3.073a.625.625 0 01.884.884l-1.63 1.63L25.599 29.78l4.23-4.188-10.083-11.799zm-1.882-5.166a6.548 6.548 0 00-5.127-2.373l3.7 3.778 1.215-1.216c.068-.068.139-.131.212-.19zm-6.678-2.17a6.543 6.543 0 00-2.551 1.298l4.933 4.962a.626.626 0 01.082.101l1.902-1.902-4.366-4.46zM7.751 8.639a6.543 6.543 0 00-1.297 2.55l4.465 4.36 1.866-1.866a.632.632 0 01-.103-.085l-4.93-4.96zm-1.5 4.099v.078c0 2.03.922 3.847 2.372 5.051.059-.073.122-.144.19-.212l1.222-1.222-3.784-3.695zm14.816 4.948a.625.625 0 00-.884.884l1.25 1.25a.625.625 0 10.884-.884l-1.25-1.25z"
              fill="#c4c0cc"
            ></path>
          </g>
        </svg>
        <h2 className="mt-3 text-sm">Music</h2>
      </div>
      <div className="flex justify-center flex-col w-16 items-center">
        <svg width="24" height="24" fill="none" viewBox="0 0 32 33">
          <g id="buisness-profession_svg__icon_selection">
            <path
              id="buisness-profession_svg__primary_fill"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15.002 5.936L15 6.01v.493h2V6.01l-.002-.073a1 1 0 00-1.996 0zM18 6.502h9.5a.5.5 0 010 1H27v16h.5a.5.5 0 110 1h-3.172l.046.046.006.005.006.007.067.072.011.012a2 2 0 01-2.833 2.813l-.01-.01-.065-.06-.006-.007-.004-.003-2.875-2.875H13.41l-2.873 2.874-.01.01-.065.061-.01.01a2 2 0 01-2.834-2.813l.011-.012.068-.072.011-.012.046-.046H4.5a.5.5 0 010-1H5v-16h-.5a.5.5 0 010-1H14v-.514l.003-.089v-.014a2 2 0 013.994 0v.014l.003.089v.514zm-12 1v16h20v-16H6zm16.914 17h-2.828l2.162 2.162.053.05a1 1 0 001.416-1.405l-.055-.06-.748-.747zm-10.919 0H9.167l-.747.747-.056.06a1 1 0 001.416 1.405l.054-.05 2.161-2.162zM8.145 9.65a.5.5 0 01.355-.147h6a.5.5 0 01.5.496l.04 5.5a.5.5 0 11-1 .008l-.036-5.004H9.002l.036 10h5.002v-2a.5.5 0 111 0v2.5a.5.5 0 01-.5.5h-6a.5.5 0 01-.5-.498l-.04-11a.5.5 0 01.146-.355zM17 18.002a.5.5 0 100 1h6.5a.5.5 0 000-1H17zm-.5-2.5a.5.5 0 01.5-.5h5.5a.5.5 0 110 1H17a.5.5 0 01-.5-.5zm.5-3.5a.5.5 0 100 1h6.5a.5.5 0 000-1H17z"
              fill="#c4c0cc"
            ></path>
          </g>
        </svg>
        <h2 className="mt-3 text-sm">Business</h2>
      </div>
      <div className="flex justify-center flex-col w-16 items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#dbd9e0"
          height="20"
          width="20"
          viewBox="0 0 512 512"
        >
          <path d="M62.7 223.4c-4.8 .4-9.7 .6-14.7 .6c-15.6 0-30.8-2-45.2-5.9C19.2 107.1 107.1 19.2 218.1 2.8C222 17.2 224 32.4 224 48c0 4.9-.2 9.8-.6 14.7c-.7 8.8 5.8 16.5 14.6 17.3s16.5-5.8 17.3-14.6c.5-5.7 .7-11.5 .7-17.3c0-16.5-1.9-32.6-5.6-47.9c1.8 0 3.7-.1 5.6-.1C397.4 0 512 114.6 512 256c0 1.9 0 3.7-.1 5.6c-15.4-3.6-31.4-5.6-47.9-5.6c-5.8 0-11.6 .2-17.3 .7c-8.8 .7-15.4 8.5-14.6 17.3s8.5 15.4 17.3 14.6c4.8-.4 9.7-.6 14.7-.6c15.6 0 30.8 2 45.2 5.9C492.8 404.9 404.9 492.8 293.9 509.2C290 494.8 288 479.6 288 464c0-4.9 .2-9.8 .6-14.7c.7-8.8-5.8-16.5-14.6-17.3s-16.5 5.8-17.3 14.6c-.5 5.7-.7 11.5-.7 17.3c0 16.5 1.9 32.6 5.6 47.9c-1.8 0-3.7 .1-5.6 .1C114.6 512 0 397.4 0 256c0-1.9 0-3.7 .1-5.6C15.4 254.1 31.5 256 48 256c5.8 0 11.6-.2 17.3-.7c8.8-.7 15.4-8.5 14.6-17.3s-8.5-15.4-17.3-14.6zM121.3 208c-8 3.7-11.6 13.2-7.9 21.2s13.2 11.6 21.2 7.9c45.2-20.8 81.7-57.2 102.5-102.5c3.7-8 .2-17.5-7.9-21.2s-17.5-.2-21.2 7.9c-17.6 38.3-48.5 69.2-86.7 86.7zm277.2 74.7c-3.7-8-13.2-11.6-21.2-7.9c-45.2 20.8-81.7 57.2-102.5 102.5c-3.7 8-.2 17.5 7.9 21.2s17.5 .2 21.2-7.9c17.6-38.3 48.5-69.2 86.7-86.7c8-3.7 11.6-13.2 7.9-21.2z" />
        </svg>
        <h2 className="mt-3 text-sm">Hobbies</h2>
      </div>
      <div className="flex justify-center flex-col w-16 items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="20"
          width="20"
          fill="#dbd9e0"
          viewBox="0 0 576 512"
        >
          <path d="M339.3 367.1c27.3-3.9 51.9-19.4 67.2-42.9L568.2 74.1c12.6-19.5 9.4-45.3-7.6-61.2S517.7-4.4 499.1 9.6L262.4 187.2c-24 18-38.2 46.1-38.4 76.1L339.3 367.1zm-19.6 25.4l-116-104.4C143.9 290.3 96 339.6 96 400c0 3.9 .2 7.8 .6 11.6C98.4 429.1 86.4 448 68.8 448H64c-17.7 0-32 14.3-32 32s14.3 32 32 32H208c61.9 0 112-50.1 112-112c0-2.5-.1-5-.2-7.5z" />
        </svg>
        <h2 className="mt-3 text-sm">Art</h2>
      </div>
    </div>
  );
};

export default CategoryIcon;
