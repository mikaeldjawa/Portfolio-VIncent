const UserDetail = ({ field, value, link }) => {
  return (
    <li className='flex items-center'>
      <span className='flex-[0_0_6rem]'>{field}</span>
      <span className='flex-[0_0_2rem]'>:</span>

      <span className='text-black dark:text-white hover:text-theme hover:underline'>
        <a href={link} className='flex-[1_1_auto] ' target='_blank'>
          {value}
        </a>
      </span>
    </li>
  );
};

export default UserDetail;
