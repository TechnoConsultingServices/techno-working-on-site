import Image from "next/image";

const BannerElement = ({className = ''}) => {
  return (
    <>
      <div className={`overlay ${className}`}></div>
      <div className='object-1'>
        <Image
          src='/images/mash/banner/banner_mash_1.png'
          alt='Mash 1'
          width={1401}
          height={1401}
        />
      </div>
      <div className='object-2'>
        <Image
          src='/images/mash/banner/banner_mash_2.png'
          alt='Mash 2'
          width={1368}
          height={1368}
        />
      </div>
    </>
  );
};

export default BannerElement;
