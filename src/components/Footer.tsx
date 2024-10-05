import React from 'react';
import '../styles.css';

const Footer = () => {
  return (
    <div className='footer text-center p-4'>
        <div className='divider'></div>
        <div className='row justify-content-center'>
            <div className='col-md-4'>
                <p>katrinango3388@gmail.com</p>
            </div>
            <div className='col-md-4'>
                <div className='socials container text-center'>
                    <div className='row'>
                        <div className='col'>
                        <a className='social-icon linkedin m-3' href='https://www.linkedin.com/in/katrinango-/' target='_blank' rel='noopener noreferrer'>
                                <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_6_232)">
                                        <path d="M22.6667 11.3333C24.921 11.3333 27.0831 12.2289 28.6771 13.8229C30.2712 15.417 31.1667 17.579 31.1667 19.8333V29.75H25.5V19.8333C25.5 19.0819 25.2015 18.3612 24.6702 17.8299C24.1388 17.2985 23.4182 17 22.6667 17C21.9153 17 21.1946 17.2985 20.6632 17.8299C20.1319 18.3612 19.8334 19.0819 19.8334 19.8333V29.75H14.1667V19.8333C14.1667 17.579 15.0622 15.417 16.6563 13.8229C18.2504 12.2289 20.4124 11.3333 22.6667 11.3333Z" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M8.50004 12.75H2.83337V29.75H8.50004V12.75Z" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M5.66671 8.50001C7.23151 8.50001 8.50004 7.23148 8.50004 5.66668C8.50004 4.10187 7.23151 2.83334 5.66671 2.83334C4.1019 2.83334 2.83337 4.10187 2.83337 5.66668C2.83337 7.23148 4.1019 8.50001 5.66671 8.50001Z" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_6_232">
                                        <rect width="34" height="34" fill="white"/>
                                        </clipPath>
                                    </defs>
                                </svg>

                                </a>
                                <a className='social-icon github m-3' href='https://github.com/katr1na' target='_blank' rel='noopener noreferrer'>
                                <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_6_231)">
                                        <path d="M12.75 26.9167C5.66671 29.0417 5.66671 23.375 2.83337 22.6667M22.6667 31.1667V25.6842C22.7198 25.0087 22.6286 24.3296 22.399 23.6921C22.1694 23.0545 21.8067 22.4732 21.335 21.9867C25.7834 21.4908 30.4584 19.805 30.4584 12.07C30.458 10.0921 29.6972 8.19004 28.3334 6.75751C28.9792 5.02706 28.9335 3.11434 28.2059 1.41668C28.2059 1.41668 26.5342 0.920847 22.6667 3.51335C19.4197 2.63334 15.997 2.63334 12.75 3.51335C8.88254 0.920847 7.21087 1.41668 7.21087 1.41668C6.48324 3.11434 6.43758 5.02706 7.08337 6.75751C5.70939 8.20067 4.94778 10.1199 4.95837 12.1125C4.95837 19.7908 9.63337 21.4767 14.0817 22.0292C13.6156 22.5108 13.2562 23.0852 13.0267 23.7149C12.7973 24.3446 12.703 25.0156 12.75 25.6842V31.1667" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_6_231">
                                        <rect width="34" height="34" fill="white"/>
                                        </clipPath>
                                    </defs>
                                </svg>

                                </a>
                                <a className='social-icon mail m-3' href='mailto:katrinango3388@gmail.com'>
                                <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_6_230)">
                                        <path d="M31.1667 8.49999C31.1667 6.94166 29.8917 5.66666 28.3334 5.66666H5.66669C4.10836 5.66666 2.83336 6.94166 2.83336 8.49999M31.1667 8.49999V25.5C31.1667 27.0583 29.8917 28.3333 28.3334 28.3333H5.66669C4.10836 28.3333 2.83336 27.0583 2.83336 25.5V8.49999M31.1667 8.49999L17 18.4167L2.83336 8.49999" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_6_230">
                                        <rect width="34" height="34" fill="white"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                                </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Footer