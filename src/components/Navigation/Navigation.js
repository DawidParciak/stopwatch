import Button from '../Button/Button';
import styles from './Navigation.module.scss';

const Navigation = () => {
    return (
      <div className={styles.navigation}>
        <Button>start</Button>
        <Button>stop</Button>
        <Button>reset</Button>
      </div>
    );
};

export default Navigation;
