import { NavLink } from 'react-router-dom';
import styles from './Icon.module.scss';
import classNames from 'classnames';

type Props = {
  modificator: string;
  count?: number;
  onClick?: () => void;
};

export const Icon: React.FC<Props> = ({
  modificator,
  count = 0,
  onClick = () => {},
}) => {
  const isNavigate = modificator !== 'close' && modificator !== 'menu';

  return (
    <>
      <NavLink
        onClick={onClick}
        className={({ isActive }) =>
          classNames(`${styles.icon} ${styles[`icon--${modificator}`]}`, {
            [styles['icon--active']]: isActive && isNavigate,
          })
        }
        to={isNavigate ? `${modificator}` : '#'}
      >
        {!!count && <div className={styles.icon__counter}>{count}</div>}
      </NavLink>
    </>
  );
};
