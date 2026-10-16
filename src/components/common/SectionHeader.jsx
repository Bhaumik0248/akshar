import './SectionHeader.css';

export default function SectionHeader({ badge, title, subtitle, centered = true }) {
  return (
    <div className={`section-header ${centered ? 'text-center' : 'text-left'}`}>
      {badge && (
        <div className="badge-pill">
          <span className="dot" />
          <span>{badge}</span>
        </div>
      )}
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
}
