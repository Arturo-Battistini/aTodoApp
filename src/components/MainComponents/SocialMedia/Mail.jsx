import React from 'react'

const Mail = () => {
  return (
    
    <aside  id='mail' className='email-container fixed bottom-[-20px] right-[calc(.5%)]  -tracking-tighter text-pText sm:hidden text-xs'>
      <span  after='' className=' email [writing-mode:vertical-lr] cursor-pointer hover:text-skyblue transition-all duration-300   hover:tracking-widest 
            after:bg-pText after:h-[120px] after:inline-block after:w-[1px] after:mt-5 '>
        <a data-aos="fade-left" data-aos-delay="1200"  href="mailto:ab@abattistini.cl">ab@abattistini.cl</a>
      </span>
    </aside>
  )
}

export default Mail