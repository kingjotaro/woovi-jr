import Image from 'next/image';

function HeaderWoovi() {
  return (
    <div className='mt-8 mb-9'>
         <Image
        priority
        src="/wooviGreen.svg"
        height={122}
        width={122}
        alt="Woovi Green logo"
      />
    </div>
  )
}

export default HeaderWoovi