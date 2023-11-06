type IconProps = {
  className?: string;
};

const ArrowIcon = ({ className }: IconProps) => {
  return (
    <svg
      className={className}
      xmlns='http://www.w3.org/2000/svg'
      width='46'
      height='46'
      viewBox='0 0 46 46'
      fill='none'>
      <mask
        id='mask0_142_1353'
        maskUnits='userSpaceOnUse'
        x='0'
        y='0'
        width='46'
        height='46'>
        <path
          d='M45.27 23L22.6426 0.372559L0.0151588 23L22.6426 45.6274L45.27 23Z'
          fill='white'
        />
      </mask>
      <g mask='url(#mask0_142_1353)'>
        <path
          d='M9.90928 10.5912C9.90928 10.5912 29.2487 16.3934 35.2309 10.4111'
          stroke='#414141'
          strokeWidth='2'
          strokeMiterlimit='10'
        />
        <path
          d='M35.0504 35.7328C35.0504 35.7328 29.2482 16.3934 35.2305 10.4111'
          stroke='#414141'
          strokeWidth='2'
          strokeMiterlimit='10'
        />
        <path
          d='M11.3286 34.3135L33.9561 11.686'
          stroke='#414141'
          strokeWidth='2'
          strokeMiterlimit='10'
        />
      </g>
    </svg>
  );
};

export default ArrowIcon;
