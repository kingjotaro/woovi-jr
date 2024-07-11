import Image from 'next/image';

function Footer() {
  return (
    <div className='flex flex-row gap-1 items-center text-gray-400'>
      <Image
        priority
        src="/safe.svg"
        height={14}
        width={14}
        alt="Safeguard"
        className='fill-gray-400'
      />
      <div className='text-xs'>Pagamento 100% seguro via:</div>
      <div className='relative -mt-1'>
        <Image
          priority
          src="/woovi.svg"
          height={60}
          width={60}
          alt="Woovi logo"
          className=''
        />
      </div>
    </div>
  );
}

export default Footer;
