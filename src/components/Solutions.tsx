import React from 'react';
import { Code, Cloud, GitBranch, ShieldCheck, Zap, Users } from 'lucide-react';

const Solutions: React.FC = () => {
  const solutions = [
    {
      anchor: "solution-devsecops",
      title: "DevSecOps Integration",
      description: "Integrate security seamlessly into your development workflows. Automated security checks throughout your pipeline.",
      icon: GitBranch,
      features: ["Pipeline integration", "Automated scanning", "Early detection", "Continuous monitoring"],
      colorClass: "from-unveilr-blue to-unveilr-cyan"
    },
    {
      anchor: "solution-multi-cloud",
      title: "Multi-Cloud Security",
      description: "Unified security management across all your cloud environments. Single platform for comprehensive visibility.",
      icon: Cloud,
      features: ["Multi-cloud visibility", "Unified dashboard", "Centralized management", "Cross-cloud insights"],
      colorClass: "from-unveilr-purple to-unveilr-blue"
    },
    {
      anchor: "solution-appsec",
      title: "Application Security",
      description: "Comprehensive protection for your applications throughout the development lifecycle and runtime.",
      icon: Code,
      features: ["Code analysis", "Dependency scanning", "Runtime protection", "API security"],
      colorClass: "from-unveilr-cyan to-unveilr-purple"
    },
    {
      anchor: "solution-container",
      title: "Container & Kubernetes",
      description: "Secure your containerized workloads and Kubernetes infrastructure with comprehensive protection.",
      icon: ShieldCheck,
      features: ["Image security", "Runtime protection", "Policy enforcement", "Continuous monitoring"],
      colorClass: "from-unveilr-purple to-unveilr-cyan"
    },
    {
      anchor: "solution-threat",
      title: "Threat Intelligence",
      description: "Advanced threat analysis and correlation to understand risks across your entire infrastructure.",
      icon: Zap,
      features: ["Risk visualization", "Threat correlation", "Prioritization", "Actionable insights"],
      colorClass: "from-unveilr-blue to-unveilr-purple"
    },
    {
      anchor: "solution-compliance",
      title: "Compliance & Governance",
      description: "Streamlined compliance management across multiple frameworks with automated tracking and reporting.",
      icon: Users,
      features: ["Framework support", "Automated tracking", "Compliance reporting", "Policy management"],
      colorClass: "from-unveilr-cyan to-unveilr-blue"
    }
  ];

  return (
    <section id="solutions" className="py-24 relative scroll-mt-28 md:scroll-mt-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="inline-block py-1 px-3 rounded-full bg-unveilr-blue/10 border border-unveilr-blue/30 text-unveilr-blue text-sm font-medium mb-4">
            Solutions for Every Team
          </span>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6 reveal font-orbitron">
            Security Solutions That Fit Your Workflow
          </h2>
          
          <p className="text-xl text-gray-300 reveal" style={{ transitionDelay: '0.1s' }}>
            Unveilr XSPM provides tailored solutions for development, operations, security, and compliance teams.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <div
                key={index}
                id={solution.anchor}
                className="glass-card p-8 rounded-2xl hover:border-unveilr-blue/50 transition-all duration-300 reveal group scroll-mt-28 md:scroll-mt-32"
                style={{ transitionDelay: `${0.1 * index}s` }}
              >
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${solution.colorClass} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-white">
                  {solution.title}
                </h3>
                
                <p className="text-gray-300 mb-6 text-lg">
                  {solution.description}
                </p>
                
                <ul className="space-y-2">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-400 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-unveilr-blue mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Integration Section */}
        <div className="mt-20 glass-card p-8 md:p-12 rounded-[1.4rem]">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 font-orbitron text-glow">
              Seamless <span className="gradient-text">Integrations</span>
            </h3>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Seamlessly integrate with your existing development tools, CI/CD pipelines, and security infrastructure.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
            {['GitHub Actions', 'GitLab CI', 'Jenkins', 'Azure DevOps', 'Terraform', 'Kubernetes', 'Docker', 'Slack'].map((tool, idx) => (
              <div
                key={idx}
                className="glass-card p-4 rounded-lg text-center hover:border-unveilr-blue/30 transition-all duration-300"
              >
                <p className="text-gray-300 font-medium">{tool}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Background elements */}
      <div className="absolute top-1/2 right-0 w-[25vw] h-[40vh] rounded-full bg-unveilr-blue opacity-[0.03] blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[20vw] h-[30vh] rounded-full bg-unveilr-purple opacity-[0.04] blur-[120px] pointer-events-none"></div>
    </section>
  );
};

export default Solutions;

