import css from './Statistics.module.css';

const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css.statsList}>
        {stats.map(stat => {
          return (
            <li key={stat.id} className={css.item}>
              <span>{stat.label}</span>
              <span>{stat.percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
export default Statistics;
