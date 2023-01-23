import styles from './FormattedTime.module.scss'

const FormattedTime = ({ time }) => {
    const formatTime = millseconds => {
        let milliseconds = Math.floor(millseconds % 1000);
        let seconds = Math.floor((millseconds / 1000) % 60);
        let minutes = Math.floor((millseconds / (1000 * 60)) % 60);
        let hours = Math.floor((millseconds / (1000 * 60 * 60)) % 24);
    
        hours = hours < 10 ? '0' + hours : hours;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;
    
        return `${hours}:${minutes}:${seconds}.${milliseconds}`;
    };
 
   return (
     <div className={styles.formatted}>
        {formatTime(time)}
     </div>
   );
 
 };
 
 export default FormattedTime;
