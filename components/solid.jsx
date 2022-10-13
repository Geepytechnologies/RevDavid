<div ref={solidnav} className='shadow text-white w-[100%] border-b-2 shadow-[0_7px_60px_-15px_rgba(0,0,0,0.3)] border-b-[#f7f7f7] h-[80px] flex items-center bg opacity-[1] hidden sticky top-0 z-[100]'>
        {/* logo section */}
        <div onClick={()=>{router.push('/')}} className='flex items-center basis-[70%] sm:basis-[50%] md:basis-[30%] lg:[25%]'>
              <p className='font-allura font-[700] text-[20px] sm:text-[25px] text-[#bfccd4]'>Rev David Akanwa</p>
        </div>
        {/* end of logo section */}
        {/* menu section */}
        <div className='basis-[30%] hidden md:block md:basis-[70%] lg:basis-[50%]'>
            <div className=''>
                <ul className='flex justify-around'>
                        <li className='dtext inline text-[#bfccd4] cursor-pointer font-[poppins]'><Link href='/'><a>Home</a></Link></li>
                        
                        <li className='dtext inline text-[#bfccd4] cursor-pointer font-[poppins]'><Link href='/about'><a>About</a></Link></li>
                        
                        <li className='dtext inline text-[#bfccd4] cursor-pointer font-[poppins]'><Link href='/media'><a>Media</a></Link></li>
                        
                        <li className='dtext inline text-[#bfccd4] cursor-pointer font-[poppins]'><Link href='/events'><a>Events</a></Link></li>
                        
                        <li className='dtext inline text-[#bfccd4] cursor-pointer font-[poppins]'><Link href='/blog'><a>Blog</a></Link>
                        </li>
                        
                        <li className='dtext inline text-[#bfccd4] cursor-pointer font-rob'><Link href='/contact'><a>Contact</a></Link></li>
                        
                </ul>
            </div>
        </div>
        {/* end of menu section */}
        {/* social icons */}
        <div className='lg:basis-[25%] lg:flex lg:justify-end hidden lg:block animate__animated animate__bounce animate__infinite	infinite '>
            <div className='w-[70%] p-[10px] bg-[white] mr-[4px] rounded-xl socialshadow border-2 border-[white] '>
            <ul className='flex justify-around'>
                <li className='inline'>
                    <Link href='' target='_blank' rel='noreferrer'><a><FaTwitter style={{fill: '#9b0000'}} /></a></Link>
                </li>
                <li className='inline'>
                    <Link href='' target='_self' rel='noreferrer'><a><AiFillYoutube style={{fill: '#9b0000'}}/></a></Link>
                </li>
                <li className='inline'>
                    <Link href='' target='_self' rel='noreferrer'><a><FaFacebook style={{fill: '#9b0000'}}/></a></Link>
                </li>
                <li className='inline'>
                    <Link href='' target='_blank' rel='noreferrer'><a><FaInstagram style={{fill: '#9b0000'}}/></a></Link>
                </li>
            </ul>
            </div>
        </div>
        {/* end of social icons */}
        {/* menu icon */}
        <div ref={menu2} onClick={show2} className='flex justify-end basis-[50%] cursor-pointer sm:basis-[50%] text-[25px] pr-[10px] md:!hidden'>
            <FaBars style={{fill: 'white'}} className='border-2 border-white rounded-md p-[4px]' />
        </div>
        <div ref={close2} onClick={hide2} className='basis-[50%] hidden cursor-pointer sm:basis-[50%] text-[25px] pr-[0px] flex justify-end  md:!hidden'>
            <RiCloseCircleLine style={{fill: 'white'}} />
        </div>
        {/* end of menu icon */}
        <div ref={side2} className='w-[70vw] fixed bg-[#15255b] sidenav  border-none z-[100] top-[80px] text-white right-[0px] overflow-hidden absolute sidenavglass max-h-[0px] h-[100vh] md:!hidden transition-[max-height] duration-500 ease-in-out'><Sidenav /></div>
    </div>