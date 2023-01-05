import styles from "./Sidebar.module.css";
import { PencilLine } from "phosphor-react";
import { Avatar } from "./Avatar";
export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://media.licdn.com/dms/image/D4D16AQFV59DZuRNq5w/profile-displaybackgroundimage-shrink_350_1400/0/1672787481972?e=1678320000&v=beta&t=6JzgV3yVLoGCeFcZ_E0UBcX-rmPvkyphdy9D-6AehxU"
        alt=""
      />
      <div className={styles.profile}>
        <Avatar
          hasBorder
          src={"https://avatars.githubusercontent.com/u/104699555?v=4"}
        />

        <strong>Davi</strong>
        <span>Full Stack Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} /> Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
