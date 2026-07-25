import React from 'react';
import Marquee from './motion/Marquee';

const integrations = [
  'GitHub', 'GitLab', 'Bitbucket', 'AWS', 'Azure', 'GCP',
  'Kubernetes', 'Docker', 'Terraform', 'Jira', 'Slack', 'Snyk',
];

const LogoMarquee: React.FC = () => {
  return (
    <section className="relative py-14 border-y border-white/[0.04]">
      <div className="container mx-auto px-6 lg:px-10">
        <p className="text-center text-[12px] uppercase tracking-[0.25em] text-gray-500 mb-8">
          Plugs into the stack you already run
        </p>
        <Marquee speed={36}>
          {integrations.map((name) => (
            <div
              key={name}
              className="mx-5 flex items-center gap-2.5 whitespace-nowrap opacity-60 transition-opacity hover:opacity-100"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-[#00E5FF] to-[#2F6BFF]" />
              <span className="text-lg font-outfit font-semibold tracking-tight text-gray-300">
                {name}
              </span>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default LogoMarquee;
