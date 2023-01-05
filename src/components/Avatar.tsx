import styles from "./Avatar.module.css";

export function Avatar({ hasBorder = true, src }) {
  return (
    <img
      className={hasBorder ? styles.hasBorderAvatar : styles.avatar}
      src={src}
    />
  );
}
