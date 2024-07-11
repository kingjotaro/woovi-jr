import Image from 'next/image';

function header() {
  return (
    <div>
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

export default header