import styles from "./CheckboxFilter.module.css";
import { CheckboxFilterProps } from "./CheckboxFilter.props";

export const CheckBoxFilter: React.FC<CheckboxFilterProps> = ({
  inputId,
  textLabel,
  onChange,
}) => {
  return (
    <div className={styles.DPcheckboxContainer}>
      <input
        className={styles.DPinput}
        id={`${inputId}`}
        type="checkbox"
        onChange={(e) => onChange(e.target.checked)}
      />
      <label htmlFor={`${inputId}`}>{textLabel}</label>
    </div>
  );
};
