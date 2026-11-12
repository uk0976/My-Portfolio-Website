import React from 'react';

export const SkhiladzeFab: React.FC = () => {
  return (
    <aside className="fab-a" aria-label="Contact">
      <a
        className="fab"
        href="mailto:umerkhan0976@gmail.com"
        aria-label="Direct Transmission to Umer Khan"
      >
        <span className="pt" aria-hidden="true" />
        <span className="roll">
          <span>Contact</span>
          <span aria-hidden="true" data-t="Contact" />
        </span>
      </a>
    </aside>
  );
};
