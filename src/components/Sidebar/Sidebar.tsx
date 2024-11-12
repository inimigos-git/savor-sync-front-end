import styles from "./Sidebar.module.scss";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.container}>
        <h2>Restaurantes</h2>
        <ul>
          <li>Price: $ Expensive (50)</li>
          <li>Every expensive (5)</li>
          <li>American (200)</li>
          <li>Italian (20)</li>
          <li>French (50)</li>
          <li>Japanese (5)</li>
          <li>Californian (15)</li>
          <li>Seafood (10)</li>
        </ul>
        <h3>Ratings</h3>
      </div>
    </aside>
  );
}
