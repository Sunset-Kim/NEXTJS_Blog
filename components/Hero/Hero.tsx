import Image from 'next/image';

export default function Hero() {
  return (
    <div>
      <Image
        src={'/assets/pica.png'}
        alt={'자기소개대신'}
        width={720 / 2}
        height={860 / 2}
      />
      <div>나는 김민우다</div>
      <div>여기는 자기소개다</div>
    </div>
  );
}
