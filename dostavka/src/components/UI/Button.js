import styles from './Button.module.css';
const Button = (props) => {
  const buttonClasses = `${styles.button} ${props.addClass || ''}`;
  return (
    <button className={buttonClasses} onClick={props.onClick}>
      {props.children}
    </button>
  );
};
export default Button;
