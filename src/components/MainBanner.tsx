import Image from 'next/image';
import ServerStatusImage from './ServerStatusImage'

const MainBanner = () => {
  return (
    <div className="flex justify-center items-center">
      <Image
        src="/images/Websitebackground.png"
        alt="Jacob Butcher, Please Hire Me"
        width={928}
        height={474}
        style={{ objectFit: "cover" }}
        quality={100}
        className='w-full max-w-6xl h-full max-h-96'
      />
      <ServerStatusImage />
    </div>
  );
};

export default MainBanner;
