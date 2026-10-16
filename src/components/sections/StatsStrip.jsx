import { Users, Award, TrendingUp, UserCheck, Star } from 'lucide-react';
import { useInView } from '../../hooks/useInView';
import { useCountUp } from '../../hooks/useCountUp';
import './StatsStrip.css';

const ICON_MAP = {
  'patients-treated': Users,
  'experience-years': Award,
  'recovery-rate': TrendingUp,
  'expert-physios': UserCheck,
  'patient-rating': Star
};

function StatCounterItem({ metric, isVisible }) {
  const Icon = ICON_MAP[metric.id] || Award;

  // Determine numeric configuration for smooth ticking
  let targetNum = 0;
  let suffix = '';
  let prefix = '';
  let decimals = 0;

  if (metric.id === 'patients-treated') {
    targetNum = 5400;
    suffix = '+';
  } else if (metric.id === 'experience-years') {
    targetNum = 12;
    suffix = '+ Years';
  } else if (metric.id === 'recovery-rate') {
    targetNum = 98.6;
    suffix = '%';
    decimals = 1;
  } else if (metric.id === 'expert-physios') {
    targetNum = 25;
    suffix = '+';
  } else if (metric.id === 'patient-rating') {
    targetNum = 4.9;
    suffix = ' / 5.0';
    decimals = 1;
  }

  const animatedValue = useCountUp(targetNum, 2200, isVisible, decimals);

  return (
    <div className={`stat-strip-card ${metric.highlight ? 'stat-highlight' : ''}`}>
      <div className="stat-card-top">
        <div className="stat-icon-wrap">
          <Icon size={20} />
        </div>
        <span className="stat-big-number">
          {prefix}{animatedValue}{suffix}
        </span>
      </div>
      <h3 className="stat-title-label">{metric.label}</h3>
      <p className="stat-sub-detail">{metric.detail}</p>
    </div>
  );
}

export default function StatsStrip({ metrics }) {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section ref={ref} className="stats-strip-section" aria-label="Clinical Metrics and Track Record">
      <div className="container">
        <div className="stats-inner-grid">
          {metrics.map((metric) => (
            <StatCounterItem key={metric.id} metric={metric} isVisible={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
