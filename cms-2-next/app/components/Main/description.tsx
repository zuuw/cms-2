import React from 'react'

type Props = {}

function Description({}: Props) {
  return (
    <div className='flex flex-col justify-center items-center m-0 space-y-11'>
        <div>
        <h1 className='font-extrabold text-5xl'> Hi, I'm</h1>
        <h1 className='font-extrabold text-6xl'>Cody Mcleod</h1>
        </div>
        <div>
        <p className='w-85ch'>Hi, I’m Cody McLeod, a 23-year-old web designer from Canada. I started my career as an electrical apprentice but quickly discovered my passion for digital design and development. Now, I’m focused on honing my skills in modern web technologies, especially Next.js, to build fast and responsive websites. I enjoy problem-solving and bringing creative ideas to life through clean, user-friendly designs. As I continue to grow in this field, I’m always looking for new challenges and opportunities to improve. Let’s create something amazing together!</p>
        </div>
    </div>
  )
}

export default Description